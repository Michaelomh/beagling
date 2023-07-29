"use client"

import { Switch } from "@/components/ui/switch"
import { useAppSettingsContext } from "../AppSettings";
import { useEffect, useState } from "react";

export const MenuSettings = () => {
  const {showPercentageMonthly, setShowPercentageMonthly, showPercentageYearly, setShowPercentageYearly} = useAppSettingsContext();

  // TODO: Link updating to updating in supabase
  const [ showPercentageMonth, setShowPercentageMonth] = useState(showPercentageMonthly)
  const [ showPercentageYear, setShowPercentageYear] = useState(showPercentageYearly)

  useEffect(() => {
    console.log(showPercentageMonthly)
  }, [showPercentageMonthly])

  return (
    <div className="mt-4">
    <div className="px-4 bg-slate-700 flex justify-between text-white py-2">General Settings</div>
    <div className="flex flex-col p-4 gap-2">
      <div className="flex flex-row justify-between">
        Show % for month
        <Switch 
          checked={showPercentageMonth}
          onCheckedChange={(state: boolean) => {
            setShowPercentageMonth(state)
            setShowPercentageMonthly(state)
          }}
        />
      </div>
      <div className="flex flex-row justify-between">
        Show % for year
        <Switch 
          checked={showPercentageYear}
          onCheckedChange={(state: boolean) => {
            setShowPercentageYear(state)
            setShowPercentageYearly(state)
          }}
        />
      </div>
    </div>
  </div>
  )
}