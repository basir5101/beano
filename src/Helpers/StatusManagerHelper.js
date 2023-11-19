import AsyncStorage from '@react-native-community/async-storage'

import LogStore from 'Stores/LogStore'
import EmployeeStore from 'Stores/EmployeeStore'

const RESET_STATUS_KEY = '@PopsEmployee:ResetStatus'

class StatusManagerHelper {
  latestStatus = null

  async getLatestStatus(refreshStore = true) {
    const logsLength = LogStore.logs.length
    const resetStatus = await AsyncStorage.getItem(RESET_STATUS_KEY) || false

    if (!EmployeeStore.employeeData) {
      // most probably, means that it's the logger app
      return
    }

    if (resetStatus === 'true') {
      this.latestStatus = 'no_status'
      EmployeeStore.employeeData && (EmployeeStore.employeeData.status = 'no_status')
    } else if (logsLength > 0) {
      const lastLog = LogStore.logs[logsLength - 1]
      const myStatus = lastLog.type
      this.latestStatus = myStatus
    } else {
      if (refreshStore){ // we get the latest data from API
        await EmployeeStore.fetchAllHomePageData()
      }
      this.latestStatus = EmployeeStore.employeeData.status
    }
  }

  get status() {
    return this.latestStatus
      ? this.latestStatus
      : EmployeeStore.employeeData.status
  }

  async updateStatus(newStatus) {
    this.latestStatus = newStatus
    await this.toggleDayIfNeedsToBeReset(false)
  }

  async toggleDayIfNeedsToBeReset(value) {
    try {
      let stringValue = value.action && value.action === 'day_closed' ? 'true' : 'false'
      await AsyncStorage.setItem(RESET_STATUS_KEY, stringValue)
    } catch (error) {
  return error    }
  }
}

export default new StatusManagerHelper()
