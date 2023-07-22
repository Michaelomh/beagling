'use client'

import { Counter } from "@/components/pages/project/Counter";
import MonthlyStats from "@/components/pages/project/MonthlyStats";
import YearlyStats from "@/components/pages/project/YearlyStats";

export default function Home() {
  return (
    <div className="p-4 grid gap-4 grid-rows-[1fr_1fr_200px] h-[calc(100%-48px)]">
      <YearlyStats />
      <MonthlyStats  />
      <Counter />
    </div>
  )
}
