import dayjs from "dayjs"

export const DEFAULT_DATE_UI_FORMATTER = "MMM DD YYYY"
export const DEFAULT_DATETIME_UI_FORMATTER = "MMM DD, YYYY hh:mmA"
export const DEFAULT_DATE_FORMATTER = "YYYY-MM-DD"

export const FIRST_DAY_OF_CURRENT_MONTH = dayjs().startOf("month").format(DEFAULT_DATE_FORMATTER)
export const LAST_DAY_OF_CURRENT_MONTH = dayjs().endOf("month").format(DEFAULT_DATE_FORMATTER)
export const FIRST_DAY_OF_CURRENT_YEAR = dayjs().startOf("year").format(DEFAULT_DATE_FORMATTER)
export const LAST_DAY_OF_CURRENT_YEAR = dayjs().endOf("year").format(DEFAULT_DATE_FORMATTER)

export const formatDate = (date: Date | string, format = DEFAULT_DATE_FORMATTER): string => {
  return dayjs(date).format(format)
}
export const getFirstDayOfMonth = (date: Date | string, format = DEFAULT_DATE_FORMATTER): string => {
  return dayjs(date).startOf("month").format(format)
}
