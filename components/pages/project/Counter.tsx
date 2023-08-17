"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

export const Counter = () => {
  const supabase = createClientComponentClient()
  const [count, setCount] = useState<number>(30)
  const submitRecord = async () => {
    await supabase
      .from("records")
      .insert([
        {
          project_id: 1,
          count: count,
        },
      ])
      .select()
  }

  return (
    <div className="mt-4">
      <div className="flex flex-row gap-2 justify-between mb-4 h-20 items-center">
        <div className="flex gap-2">
          <Button onClick={() => setCount((prev) => prev - 1)}>-1</Button>
          <Button onClick={() => setCount((prev) => prev - 5)}>-5</Button>
        </div>
        <h1 className="font-bold text-5xl">{count}</h1>
        <div className="flex gap-2">
          <Button onClick={() => setCount((prev) => prev + 5)}>+5</Button>
          <Button onClick={() => setCount((prev) => prev + 1)}>+1</Button>
        </div>
      </div>
      <Button className="w-full mb-4" onClick={() => submitRecord()}>
        Submit
      </Button>
    </div>
  )
}
