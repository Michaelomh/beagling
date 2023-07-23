import { DEFAULT_DATETIME_UI_FORMATTER, formatDate } from "@/utils/Date"
import { Trash2 } from "lucide-react"

type Props = {
  date: string
  count : number
}

export const RecordRow = ({date, count}: Props) => {
  return (
    <div className="flex items-center justify-between [&:not(:first-child)]:border-t-2 border-t-slate-200 py-2 px-4">
      <div>
        <span>{formatDate(date, DEFAULT_DATETIME_UI_FORMATTER)}</span>
      </div>
      <div className="flex gap-2 items-center">
        <span className="font-bold mr-2">{count}</span>
        <Trash2 size={16} strokeWidth={1.5}/>
      </div>
    </div>
  )
}