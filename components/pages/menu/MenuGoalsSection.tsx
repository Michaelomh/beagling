import { Plus, Circle, Pencil } from "lucide-react"
import { MenuProject } from "./MenuProject"

export const MenuGoalsSection = () => {
  return (
    <div>
      <div  className="px-4 bg-slate-700 flex justify-between text-white py-2">
        Goals
        <Plus/>
      </div>
      <div className="flex flex-col p-4 gap-4">
        <MenuProject title="Push up" color="red" isDefault />
        <div className="flex items-center justify-end mt-4">
          <p className="text-md">Manage goals</p>
          <Pencil size={24} className="ml-4"/> 
        </div>
      </div>
  </div>
  )
}