"use client" 

import { supabase } from "@/utils/SupabaseClient";
import { useEffect, useState } from "react";
import StatsBox from "./StatsBox";
import { FIRST_DAY_OF_CURRENT_MONTH, LAST_DAY_OF_CURRENT_MONTH } from "@/utils/Date";

const MonthlyStats = () => {
  const [totalCount, setTotalCount] = useState<number>(0);

  const fetchMonthlyRecords = async () => {
    try {
      const { data: dbRecords, error } = await supabase
        .from('records')
        .select('created_at,count')
        .gt('created_at', FIRST_DAY_OF_CURRENT_MONTH)
        .lt('created_at', LAST_DAY_OF_CURRENT_MONTH)
        
        setTotalCount(dbRecords?.map(r => r.count).reduce((sum, a) => sum + a, 0));
    } catch (error) {
      console.log(error)
    }
    return null;
  }

  useEffect(() => {
    fetchMonthlyRecords()
  }, [])

  return <StatsBox title="This month (July)" count={totalCount} />
} 


export default MonthlyStats