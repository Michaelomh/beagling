"use client"

import { Dispatch, SetStateAction, createContext, useContext, useState } from "react"

type AppSettingsProps = {
  defaultProject: string
  showPercentageMonthly: boolean
  showPercentageYearly: boolean
  setDefaultProject: Dispatch<SetStateAction<string>>
  setShowPercentageMonthly: Dispatch<SetStateAction<boolean>>
  setShowPercentageYearly: Dispatch<SetStateAction<boolean>>
  updateMonthly: (state: boolean) => void
}

export const AppSettings = createContext<AppSettingsProps>({
  defaultProject: "",
  setDefaultProject: () => {},
  showPercentageMonthly: false,
  setShowPercentageMonthly: () => {},
  showPercentageYearly: false,
  setShowPercentageYearly: () => {},
  updateMonthly: (state: boolean) => {},
})

export function AppSettingsProvider({ children }: React.PropsWithChildren<{}>) {
  // TODO: Link getting the default from supabase
  const [defaultProject, setDefaultProject] = useState("Push up")
  const [showPercentageMonthly, setShowPercentageMonthly] = useState(true)
  const [showPercentageYearly, setShowPercentageYearly] = useState(false)
  const updateMonthly = (state: boolean) => {
    setShowPercentageMonthly(state)
  }

  return (
    <AppSettings.Provider
      value={{
        defaultProject,
        showPercentageMonthly,
        showPercentageYearly,
        setDefaultProject,
        setShowPercentageMonthly,
        setShowPercentageYearly,
        updateMonthly,
      }}
    >
      {children}
    </AppSettings.Provider>
  )
}

export const useAppSettingsContext = () => useContext(AppSettings)
