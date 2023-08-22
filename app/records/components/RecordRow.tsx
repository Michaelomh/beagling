"use client"

import { supabase } from "@/utils/SupabaseClient"
import { DEFAULT_DATETIME_UI_FORMATTER, formatDate } from "@/utils/Date"
import { PenLine, Trash2 } from "lucide-react"

import Link from "next/link"

type Props = {
  id: number
  date: string
  count: number
}

export const RecordRow = ({ id, date, count }: Props) => {
  const deleteRecord = async () => {
    try {
      const { error } = await supabase.from("records").delete().eq("id", id)

      if (error) {
        console.error(error)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="flex items-center justify-between [&:not(:first-child)]:border-t-2 border-t-slate-200 py-2 px-4">
      <div>
        <span>{formatDate(date, DEFAULT_DATETIME_UI_FORMATTER)}</span>
      </div>
      <div className="flex gap-4 items-center">
        <span className="font-bold">{count}</span>
        <Link href={`/records/${id}`}>
          <PenLine size={16} strokeWidth={1.5} />
        </Link>
        <Trash2 size={16} strokeWidth={1.5} onClick={deleteRecord} />
      </div>
    </div>
  )
}
