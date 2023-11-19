/* eslint-disable no-magic-numbers */
// import { format } from 'date-fns'
import { formatToTimeZone } from 'date-fns-timezone'


const getTimeFormatted = (time) => {
  let hours = parseInt(time)
  hours = hours < 10 ? `0${hours}` : hours
  let min = Math.round(time % 1 * 60)
  min = min < 10 ? `0${min}` : min
  return `${hours}:${min}`
}

const timeToDecimal = (time) => {
  if (time !== null && time !== undefined) {
    let arr = time.toString().split(':')
    let dec = parseInt(arr[1] / 6 * 10, 10)

    return parseFloat(`${parseInt(arr[0], 10)}.${dec < 10 ? '0' : ''}${dec}`)
  } return 'N/A'
}

const secondsDivider = (sec) => {
  let time = {}, result = ''
  let value = ['hour', 'minute', 'second']

  const getTime = (time, dividedBy = 1) => {
    return Math.floor(Math.abs(time) / dividedBy)
  }

  time.second = getTime(sec)
  time.minute = getTime(time.second / 60)
  time.hour = getTime(time.minute / 60)
  // time.day = Math.floor(time.hour / 24)

  time.minute = time.minute % 60
  time.second = time.second % 60
  // time.hour = time.hour % 24

  for (let i = 0; i < value.length; i++) {
    let timeNumb = time[value[i]]
    let absTime = Math.abs(timeNumb)

    if (absTime < 10 && absTime >= 0) {
      result = `${i === 0 && sec < 0 ? '−' : ''}${result}0${absTime}`
    } else {
      result = `${i === 0 && sec < 0 ? '−' : ''}${result}${absTime}`
    }
    if (i < value.length - 1) {
      result = `${result}:`
    }
    // alert(time.length)
    // result = `${time[value[i]]} ${value[i]}s ago`
    // break
  }
  return result
}

const minutesDivider = (min) => {
  let minutes = 0, hours = 0, time = ''
  hours = Math.floor(min / 60)
  minutes = min % 60
  if (hours < 10) {
    time = '0'
  }

  // alert(time)
  time = `${time}${hours}:`
  if (minutes < 10) {
    time = `${time}0`
  }
  // alert(time)
  time = `${time}${minutes}`
  // alert(time)
  return time
}

const timezoneConverter = (time, zone, timeFormat = 'hh:mm') => {
  // let timezomeTime = new Date(time).toLocaleString('en-US', {timeZone: zone})
  // timezomeTime = new Date(timezomeTime)
  // let date = parseFromTimeZone(time, { timeZone: zone })
  // date = new Date(date)
  // return format(date.toLocaleString(), timeFormat)
  return formatToTimeZone(time, timeFormat, { timeZone: zone })
}

const getDateFormat = (date) => {
  const splittedDate = date.split('-')
  return new Date(`${splittedDate[1]}/${splittedDate[2]}/${splittedDate[0]}`)
}

export { getTimeFormatted, timeToDecimal, secondsDivider, minutesDivider, timezoneConverter, getDateFormat }
