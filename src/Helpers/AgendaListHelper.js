import { format, eachDayOfInterval } from 'date-fns'
import { getDateFormat } from 'Helpers/TimeHelper'
import Colors from 'Constants/Colors'

class AgendaListHelper {
  async setupItems(data, withLastDayIsToday) {
    let days = await this.setupDays(data, withLastDayIsToday)
    let markedDays = this.setupMarkedDays(days)
    return [days, markedDays]
  }

  setupDays(data, withLastDayIsToday) {
    let items = {}
    let allitems = new Set(data)
    allitems.forEach(day => {
      items[day.day] = day.logs.length ? [day] : []
    })

    let days = Object.keys(items).reverse()

    if (days.length > 0) {
      let firstDay = days[0]
      let lastDay = withLastDayIsToday ? new Date() : new Date(getDateFormat(days[days.length - 1]))

      this.dateRange(new Date(getDateFormat(firstDay)), lastDay).map(day => {
      // eachDayOfInterval({ start: new Date(getDateFormat(firstDay)), end: lastDay }).map(day => {
        let formattedDate = format(day, 'yyyy-MM-dd')
        if (!items[formattedDate]) {
          items[formattedDate] = []
        }
      })
    } else {
      items[format(new Date(), 'yyyy-MM-dd')] = []
    }

    return items
  }

  setupMarkedDays(data) {
    let markedDays = {}
    let allDays = new Set(Object.keys(data))
    allDays.forEach(day => {
      if (data[day].length) {
        markedDays[day] = {
          marked: true,
          dotColor: `${Colors.darkBlue}40`,
        }
      }
    })

    return markedDays
  }

  dateRange(startDate, endDate, steps = 1) {
    const dateArray = []
    let currentDate = new Date(startDate)

    while (currentDate <= new Date(endDate)) {
      dateArray.push(new Date(currentDate))
      // Use UTC date to prevent problems with time zones and DST
      currentDate.setUTCDate(currentDate.getUTCDate() + steps)
    }

    return dateArray
  }
}

export default new AgendaListHelper()
