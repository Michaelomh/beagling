import dayjs from "dayjs";

export const FIRST_DAY_OF_CURRENT_MONTH = dayjs().startOf("month").format('YYYY-MM-DD');
export const LAST_DAY_OF_CURRENT_MONTH = dayjs().endOf("month").format('YYYY-MM-DD');
export const FIRST_DAY_OF_CURRENT_YEAR = dayjs().startOf("year").format('YYYY-MM-DD');
export const LAST_DAY_OF_CURRENT_YEAR = dayjs().endOf("year").format('YYYY-MM-DD');