import { formatDate } from "@/utils/Date"

type Props = {
  date: string
  current : number
  target?: number
}

export const RecordHeader = ({date, current, target}: Props) => {
  return (
    <div className="px-4 bg-slate-700 flex justify-between text-white py-2">
      <h1>{formatDate(date, "MMM-YYYY")}</h1>
      <h1>{`${current}${target ? "/" + target: ""}`}</h1>
    </div>
  )
}