import { ArrowLeft, User2Icon } from "lucide-react"
import { Dispatch, SetStateAction } from "react"
import { MenuSettings } from "./MenuSettings"
import { MenuGoalsSection } from "./MenuGoalsSection"

type MenuProps = {
  hideMenu: Dispatch<SetStateAction<boolean>>
}

export const Menu = ({ hideMenu }: MenuProps) => {
  return (
    <div className="absolute h-[100dvh] w-[100dvw] top-0 left-0 bg-white ">
      <div className="flex bg-slate-200 p-4 justify-between">
        <div className="flex flex-row gap-4">
          <User2Icon />
          <h1>Michael Ong</h1>
        </div>
        <ArrowLeft onClick={() => hideMenu(false)} />
      </div>
      <MenuGoalsSection />
      <MenuSettings />
    </div>
  )
}
