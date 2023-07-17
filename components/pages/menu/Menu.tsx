import { Switch } from "@/components/ui/switch"
import {  ArrowLeft, Dot, Pencil, Plus, User2Icon } from "lucide-react"
import { Dispatch, SetStateAction } from "react"

type MenuProps = {
  hideMenu: Dispatch<SetStateAction<boolean>>
}

export const Menu = ({hideMenu} : MenuProps) => {
  return (
    <div className="absolute h-[100dvh] w-[100dvw] top-0 left-0 bg-white ">
      <div className="flex bg-slate-200 p-4 justify-between">
        <div className="flex flex-row gap-4">
          <User2Icon/>
          <h1>Michael Ong</h1>
        </div>
        <ArrowLeft onClick={() => hideMenu(false)}/>
      </div>
      <div>
        <div  className="px-4 bg-slate-700 flex justify-between text-white py-2">
          Goals
          <Plus/>
        </div>
        <div className="flex flex-col p-4 gap-2">
          <div className="flex items-center justify-between">
            <div className="flex flex-row items-center">
            <Dot color="red"/>
            <p>Push up</p>
            </div>
            <span className="italic">default</span>
          </div>
          <div className="flex items-center"><Dot color="blue"/>Running</div>
          <div className="flex items-center">
            <Pencil className="mr-2"/> Manage goals
          </div>
        </div>
      </div>
      <div>
        <div  className="px-4 bg-slate-700 flex justify-between text-white py-2">General Settings</div>
        <div className="flex flex-col p-4 gap-2">
          <div className="flex flex-row justify-between">
            <p>Default Goal</p>
            <div className="flex flex-row items-center">
              <Dot color="red"/>
              Push up
            </div>
          </div>
          <div className="flex flex-row justify-between">
            Show % for month
            <Switch />
          </div>
          <div className="flex flex-row justify-between">
            Show % for year
            <Switch />
          </div>
        </div>
      </div>
    </div>
  )
}