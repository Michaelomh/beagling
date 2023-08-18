"use client"
import { useEffect, useState } from "react"

import { Counter } from "@/components/pages/project/Counter"
import MonthlyStats from "@/components/pages/project/MonthlyStats"
import YearlyStats from "@/components/pages/project/YearlyStats"
import { supabase } from "@/utils/SupabaseClient"

export default function Home() {
  const [trigger, setTrigger] = useState<boolean>(false)

  const subscribeToRecordsData = () => {
    supabase
      .channel("records-channel")
      .on("postgres_changes", { event: "*", schema: "public", table: "records" }, () =>
        setTrigger((prevState) => !prevState)
      )
      .subscribe()
  }

  useEffect(() => {
    subscribeToRecordsData()
  }, [])

  return (
    <div className="p-4 grid gap-4 grid-rows-[1fr_1fr_200px] h-[calc(100%-48px)]">
      <YearlyStats trigger={trigger} />
      <MonthlyStats trigger={trigger} />
      <Counter />
    </div>
  )
}
