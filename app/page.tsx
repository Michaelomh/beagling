'use client'

import { Counter } from "@/components/pages/project/Counter";
import MonthlyStatsBox from "@/components/pages/project/MonthlyStatsBox";
import StatsBox from "@/components/pages/project/StatsBox";

export default function Home() {
  return (
    <div className="p-4 grid gap-4 grid-rows-[1fr_1fr_200px] h-[calc(100%-48px)]">
      <StatsBox title="This Year" count={3720} />
      <MonthlyStatsBox  />
      <Counter />
    </div>
  )
}
