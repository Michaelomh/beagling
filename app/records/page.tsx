"use client"

import { supabase } from "@/utils/SupabaseClient";
import { Fragment, useEffect, useState } from "react";
import { RecordType } from "@/types/records.types";
import { getFirstDayOfMonth } from "@/utils/Date";
import { RecordRow } from "./components/RecordRow";
import { RecordHeader } from "./components/RecordHeader";
import { Button } from "@/components/ui/button";

export default function Records() {
  const [records, setRecords] = useState<Record<string, RecordType[]>>()
  
  const fetchAllRecords = async () => {
    try {
      const { data, error } = await supabase
      .from('records')
      .select('id,created_at,count')
      .order('created_at', {ascending: false})

      if (data) {
        setRecords(groupRecordByMonth(data));
      }
    } catch(error) {
      console.error(error)
    }
  }

  const subscribeToRecordsData = () => {
    supabase.channel('records-channel')
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'records' },
      () => fetchAllRecords()
    )
    .subscribe()
  }

  function groupRecordByMonth(records: RecordType[] | null) {
    if (!records) return {}
    const groupedByMonth: Record<string, RecordType[]> = {};
    records.forEach((record) => {
      const createdAtDate = getFirstDayOfMonth(record.created_at)  
      if (!groupedByMonth[createdAtDate]) {
        groupedByMonth[createdAtDate] = [];
      }
      groupedByMonth[createdAtDate].push(record);
    });
  
    return groupedByMonth;
  }

  useEffect(() => {
    fetchAllRecords()
    subscribeToRecordsData()
  }, [])

  return (
    <div>
      <div className="flex flex-col ">
        {
          records &&
            Object.keys(records).map((month) => {
              return (
                <Fragment key={month}>
                  <RecordHeader date={month} current={0} />
                   {
                    records[month].map((record) => {
                      return (
                        <Fragment key={record.created_at+record.count}>
                          <RecordRow date={record.created_at} count={record.count} id={record.id}/>
                        </Fragment>
                      )
                    })
                  }
                </Fragment>
              )
            })
        }
      </div>
    </div>
  )
}
