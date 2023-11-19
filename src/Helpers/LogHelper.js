import { Platform, NativeModules } from 'react-native'
import { getDeviceName } from 'react-native-device-info'

import LogStore from 'Stores/LogStore'
import AlertStore from 'Stores/AlertStore'
import SessionStore from 'Stores/SessionStore'
import EmployeeStore from 'Stores/EmployeeStore'
import LanguageStore from 'Stores/LanguageStore'
import EmployeesStore from 'Stores/EmployeesStore'
import GeolocationStore from 'Stores/GeolocationStore'
import LoadingModalStore from 'Stores/LoadingModalStore'
import EmployeeLogNoteStore from 'Stores/EmployeeLogNoteStore'

import StatusManagerHelper from 'Helpers/StatusManagerHelper'

class LogHelper {
  async onCameraPress(isLongPress, navigation, logConfig = null) {
    const user = { ...SessionStore.employeeData, ...EmployeeStore.employeeData }
    const currentLogConfig = logConfig !== null ? logConfig : user
    let type = isLongPress ? 'video' : 'image'

    if (currentLogConfig.force_use_beacons && user.beacons.length > 0) {
      navigation.navigate('SearchForBeacons', {
        user,
        status: this.getEmployeeStatus(),
        type,
        logConfig
      })
    } else {
      await this.onPressHandling(
        user,
        this.getEmployeeStatus(),
        type,
        navigation,
        true, // fromEmployeeStack
        null,
        logConfig,
      )
    }
  }

  getEmployeeStatus() {
    try {
      const id = SessionStore.employeeData && SessionStore.employeeData.roleable_id

      if (id) {
        let status = LogStore.userStatus(id)
        if (status === null) {
          status = StatusManagerHelper.status
        }
        return status
      }
    } catch (err) {
        return err
      }
  }

  async onPressHandling(user, status, type = 'image', navigation, fromEmployeeStack = false, beacon_guid, logConfig = null) {
    const { general, homeScreen } = LanguageStore.textLocale
    const currentLogConfig = logConfig !== null ? logConfig : SessionStore.employeeData
    currentLogConfig.force_notes = logConfig !== null ? logConfig.force_notes : SessionStore.company.employee_log_note_enabled

    let response = true

    if (Platform.OS === 'android' && SessionStore.employeeData.force_use_location) {
      response = await NativeModules.OpenSettings.checkGPSStatus()
    }

    if (response) {
      if (currentLogConfig.force_use_location || (logConfig && logConfig.force_use_location)) {
        let result = await GeolocationStore.start(false, logConfig)
        if (!result) {
          await AlertStore.setAndShow({
            icon: true,
            title: general.alert,
            desc: homeScreen.alertActivateGPS,
            buttonText: general.okay,
          })
          return null
        }
      }

      if (!SessionStore.statusChecked && currentLogConfig.force_internet) {
        await AlertStore.setAndShow({
          icon: true,
          title: general.alert,
          desc: homeScreen.alertActivateInternet,
          buttonText: general.okay,
        })
        return null
      }

      !EmployeesStore.selectingEmployees && LoadingModalStore.show()
      this.checkForNotes(user)

      if (EmployeesStore.selectingEmployees) {
        EmployeesStore.toggleEmployee(user)
      } else {
        let new_status = ''

        switch (status) {
          case 'checkout':
            new_status = 'checkin'
            break
          case 'checkin':
            new_status = 'checkout'
            break
          case 'custom':
            new_status = 'checkout'
            break
          default:
            new_status = 'checkin'
        }

        let params = {
          userIds: [user.id], new_status: new_status,
          type: type, name: user.full_name, fromEmployeeStack, beacon_guid,
          forceNote: currentLogConfig.force_notes || false
        }

        if (logConfig) {
          params.custom_log_type = logConfig.log_type
          params.new_status = 'custom'
        }

        if (logConfig && !logConfig.force_log_file) {
          params.type = 'no_file'
          if (params.forceNote) {
            setTimeout(() => EmployeeLogNoteStore.open(async () => {
              params = { ...params, note: EmployeeLogNoteStore.text }
              await this.handleLog(params, navigation)
            }), 1500)
          } else {
            this.handleLog(params, navigation)
          }
        } else {
          navigation.navigate('PopsCamera', params)
        }
      }
    }
    return null
  }

  async checkForNotes(user) {
    if (user.logger_notes) {
      let messages = []
      user.logger_notes.map(note => {
        if (note.note_type === 'any_check_type') {
          messages.push(note.content)
        } else if (note.note_type === 'first_check_in' && user.status === 'no_status') {
          messages.push(note.content)
        } else if (note.note_type === 'any_check_in' && (user.status === 'checkout' || user.status === 'no_status')) {
          messages.push(note.content)
        } else if (note.note_type === 'any_check_out' && user.status === 'checkin') {
          messages.push(note.content)
        }
      })

      let warningVisible = messages.length > 0
      if (warningVisible) {
        await AlertStore.setAndShow({
          icon: true,
          isNotes: true,
          notes: messages
        })
      }
    }
  }

  async handleLog(log, navigation) {
    let logToSend = {
      id: log.id || log.userIds[0],
      type: log.new_status,
      date: new Date(),
      device_name: await getDeviceName(),
      logType: log.type,
      longitude: GeolocationStore.longitude.toString(),
      latitude: GeolocationStore.latitude.toString(),
      custom_log_type: log.custom_log_type,
    }
    if (log.note) {
      logToSend.note = log.note
    }

    if (log.note) {
      logToSend.note = log.note
    }

    setTimeout(() => {
      navigation.popToTop()
    }, 500)
    await StatusManagerHelper.updateStatus(logToSend.type)
    await this.addLogToQueue(logToSend, navigation)
    await EmployeeStore.fetchAllHomePageData()
  }

  async addLogToQueue(log, navigation) {
    await LogStore.addLog(log, true)
    await LogStore.syncLogs(navigation, false, true).then(() => {
      if (!Object.values(LogStore.uploadPercentage).some(value => value !== 100)) {
        LogStore.uploadPercentage = {}
      }
    })
  }

  checkIfLogCanBeShown(item) {
    const { custom_log_type_status } = EmployeeStore.employeeData
    const { enable_if_current_type_is_array } = item

    if (enable_if_current_type_is_array.includes('any_type')) {
      return true
    } else if (enable_if_current_type_is_array.length === 0) {
      return true
    } else if (custom_log_type_status === null && enable_if_current_type_is_array.includes('checkin')) {
      return true
    }

    return enable_if_current_type_is_array.includes(custom_log_type_status)
  }
}

export default new LogHelper()
