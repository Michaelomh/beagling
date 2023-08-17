import {
  DEFAULT_DATE_UI_FORMATTER,
  FIRST_DAY_OF_CURRENT_MONTH,
  FIRST_DAY_OF_CURRENT_YEAR,
  LAST_DAY_OF_CURRENT_MONTH,
  LAST_DAY_OF_CURRENT_YEAR,
  formatDate,
  getFirstDayOfMonth,
} from "./Date"

describe("Date constants", () => {
  const today = new Date()

  it(FIRST_DAY_OF_CURRENT_MONTH, () => {
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1)
    const y = firstDay.getFullYear()
    const m = firstDay.getMonth() + 1 < 10 ? `0${firstDay.getMonth() + 1}` : `${firstDay.getMonth() + 1}`
    const d = firstDay.getDate() < 10 ? `0${firstDay.getDate()}` : `${firstDay.getDate()}`
    expect(FIRST_DAY_OF_CURRENT_MONTH).toBe(`${y}-${m}-${d}`)
  })

  it(LAST_DAY_OF_CURRENT_MONTH, () => {
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0)
    const y = lastDay.getFullYear()
    const m = lastDay.getMonth() + 1 < 10 ? `0${lastDay.getMonth() + 1}` : `${lastDay.getMonth() + 1}`
    const d = lastDay.getDate() < 10 ? `0${lastDay.getDate()}` : `${lastDay.getDate()}`
    expect(LAST_DAY_OF_CURRENT_MONTH).toBe(`${y}-${m}-${d}`)
  })

  it(FIRST_DAY_OF_CURRENT_YEAR, () => {
    const firstDay = new Date(new Date().getFullYear(), 0, 1) // always 1st Jan
    const y = firstDay.getFullYear()
    const m = firstDay.getMonth() + 1 < 10 ? `0${firstDay.getMonth() + 1}` : `${firstDay.getMonth() + 1}`
    const d = firstDay.getDate() < 10 ? `0${firstDay.getDate()}` : `${firstDay.getDate()}`
    expect(FIRST_DAY_OF_CURRENT_YEAR).toBe(`${y}-${m}-${d}`)
  })

  it(LAST_DAY_OF_CURRENT_YEAR, () => {
    const lastDay = new Date(new Date().getFullYear(), 11, 31) // always 31st Dec
    const y = lastDay.getFullYear()
    const m = lastDay.getMonth() + 1 < 10 ? `0${lastDay.getMonth() + 1}` : `${lastDay.getMonth() + 1}`
    const d = lastDay.getDate() < 10 ? `0${lastDay.getDate()}` : `${lastDay.getDate()}`
    expect(LAST_DAY_OF_CURRENT_YEAR).toBe(`${y}-${m}-${d}`)
  })
})

describe("Date functions", () => {
  describe(formatDate, () => {
    const d1 = new Date(2022, 10, 7) //  day-of-month < 10
    const d2 = new Date(2023, 7, 11) //  month < 10
    const d3 = new Date(2024, 10, 11) // day-of-month < 10 +  month < 10
    const d4 = new Date(2025, 3, 7) // date

    it("with default formatter", () => {
      expect(formatDate(d1)).toBe("2022-11-07")
      expect(formatDate(d2)).toBe("2023-08-11")
      expect(formatDate(d3)).toBe("2024-11-11")
      expect(formatDate(d4)).toBe("2025-04-07")
    })

    it("with custom formats", () => {
      expect(formatDate(d1, DEFAULT_DATE_UI_FORMATTER)).toBe("Nov 07 2022")
      expect(formatDate(d2, DEFAULT_DATE_UI_FORMATTER)).toBe("Aug 11 2023")
      expect(formatDate(d3, DEFAULT_DATE_UI_FORMATTER)).toBe("Nov 11 2024")
      expect(formatDate(d4, DEFAULT_DATE_UI_FORMATTER)).toBe("Apr 07 2025")
    })
  })

  describe(getFirstDayOfMonth, () => {
    it("with default formatter", () => {
      const d1 = new Date(2023, 0, Math.random() * 30 + 1)
      expect(getFirstDayOfMonth(d1)).toBe("2023-01-01")

      const d2 = new Date(2023, 1, Math.random() * 28 + 1)
      expect(getFirstDayOfMonth(d2)).toBe("2023-02-01")

      const d3 = new Date(2023, 2, Math.random() * 31 + 1)
      expect(getFirstDayOfMonth(d3)).toBe("2023-03-01")

      const d4 = new Date(2023, 3, Math.random() * 30 + 1)
      expect(getFirstDayOfMonth(d4)).toBe("2023-04-01")

      const d5 = new Date(2023, 4, Math.random() * 31 + 1)
      expect(getFirstDayOfMonth(d5)).toBe("2023-05-01")

      const d6 = new Date(2023, 5, Math.random() * 30 + 1)
      expect(getFirstDayOfMonth(d6)).toBe("2023-06-01")

      const d7 = new Date(2023, 6, Math.random() * 31 + 1)
      expect(getFirstDayOfMonth(d7)).toBe("2023-07-01")

      const d8 = new Date(2023, 7, Math.random() * 31 + 1)
      expect(getFirstDayOfMonth(d8)).toBe("2023-08-01")

      const d9 = new Date(2023, 8, Math.random() * 30 + 1)
      expect(getFirstDayOfMonth(d9)).toBe("2023-09-01")

      const d10 = new Date(2023, 9, Math.random() * 31 + 1)
      expect(getFirstDayOfMonth(d10)).toBe("2023-10-01")

      const d11 = new Date(2023, 10, Math.random() * 30 + 1)
      expect(getFirstDayOfMonth(d11)).toBe("2023-11-01")

      const d12 = new Date(2023, 11, Math.random() * 31 + 1)
      expect(getFirstDayOfMonth(d12)).toBe("2023-12-01")
    })

    it("with custom formatter", () => {
      const d1 = new Date(2023, 0, Math.random() * 30 + 1)
      expect(getFirstDayOfMonth(d1, DEFAULT_DATE_UI_FORMATTER)).toBe("Jan 01 2023")

      const d2 = new Date(2023, 1, Math.random() * 28 + 1)
      expect(getFirstDayOfMonth(d2, DEFAULT_DATE_UI_FORMATTER)).toBe("Feb 01 2023")

      const d3 = new Date(2023, 2, Math.random() * 31 + 1)
      expect(getFirstDayOfMonth(d3, DEFAULT_DATE_UI_FORMATTER)).toBe("Mar 01 2023")

      const d4 = new Date(2023, 3, Math.random() * 30 + 1)
      expect(getFirstDayOfMonth(d4, DEFAULT_DATE_UI_FORMATTER)).toBe("Apr 01 2023")

      const d5 = new Date(2023, 4, Math.random() * 31 + 1)
      expect(getFirstDayOfMonth(d5, DEFAULT_DATE_UI_FORMATTER)).toBe("May 01 2023")

      const d6 = new Date(2023, 5, Math.random() * 30 + 1)
      expect(getFirstDayOfMonth(d6, DEFAULT_DATE_UI_FORMATTER)).toBe("Jun 01 2023")

      const d7 = new Date(2023, 6, Math.random() * 31 + 1)
      expect(getFirstDayOfMonth(d7, DEFAULT_DATE_UI_FORMATTER)).toBe("Jul 01 2023")

      const d8 = new Date(2023, 7, Math.random() * 31 + 1)
      expect(getFirstDayOfMonth(d8, DEFAULT_DATE_UI_FORMATTER)).toBe("Aug 01 2023")

      const d9 = new Date(2023, 8, Math.random() * 30 + 1)
      expect(getFirstDayOfMonth(d9, DEFAULT_DATE_UI_FORMATTER)).toBe("Sep 01 2023")

      const d10 = new Date(2023, 9, Math.random() * 31 + 1)
      expect(getFirstDayOfMonth(d10, DEFAULT_DATE_UI_FORMATTER)).toBe("Oct 01 2023")

      const d11 = new Date(2023, 10, Math.random() * 30 + 1)
      expect(getFirstDayOfMonth(d11, DEFAULT_DATE_UI_FORMATTER)).toBe("Nov 01 2023")

      const d12 = new Date(2023, 11, Math.random() * 31 + 1)
      expect(getFirstDayOfMonth(d12, DEFAULT_DATE_UI_FORMATTER)).toBe("Dec 01 2023")
    })
  })
})
