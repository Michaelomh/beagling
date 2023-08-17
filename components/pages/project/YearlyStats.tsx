"use client"

import { supabase } from "@/utils/SupabaseClient"
import { useEffect, useState } from "react"
import StatsBox from "./StatsBox"
import { FIRST_DAY_OF_CURRENT_YEAR, LAST_DAY_OF_CURRENT_YEAR } from "@/utils/Date"

type Props = {
  title: string
  count: number
  isShowTarget?: boolean
  target?: number
  isShowPercentage?: boolean
}

const YearlyStats = () => {
  const [totalCount, setTotalCount] = useState<number>(0)

  const fetchYearlyRecords = async () => {
    try {
      const { data: dbRecords, error } = await supabase
        .from("records")
        .select("created_at,count")
        .gt("created_at", FIRST_DAY_OF_CURRENT_YEAR)
        .lt("created_at", LAST_DAY_OF_CURRENT_YEAR)

      setTotalCount(dbRecords?.map((r) => r.count).reduce((sum, a) => sum + a, 0))
    } catch (error) {
      console.log(error)
    }
    return null
  }

  useEffect(() => {
    fetchYearlyRecords()
  }, [])

  return <StatsBox title="This year" count={totalCount} />
}

export default YearlyStats
