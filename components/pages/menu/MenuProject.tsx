import { Circle} from "lucide-react"

type MenuProjectType = {
  title: string,
  isDefault: boolean,
  color: string,
}

export const MenuProject = ({title, isDefault, color}: MenuProjectType) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex flex-row items-center">
          <Circle fill={color} color="transparent" className="mr-4" size={16}/>
          <p className="text-md">{title}</p>
        </div>
        {isDefault && <span className="italic text-sm text-slate-400">default</span> }
      </div>
    </div>
  )
}