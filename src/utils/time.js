import dayjs from 'dayjs'
import { site } from '~/setting'

export function getDate(time = new Date(), format = site.dateFormate) {
  return dayjs(time).format(format)
}

export function getTime(time = new Date(), format = site.timeFormate) {
  return dayjs(time).format(format)
}

export function getDateTime(time = new Date(), format = `${site.dateFormate} ${site.timeFormate}`) {
  return dayjs(time).format(format)
}
