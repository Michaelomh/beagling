"use client"

import { Button } from "@/components/ui/button";
import { createServerComponentClient, createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const SubmitButton = () => {
  const supabase = createClientComponentClient()
  const submitRecord = async () => {
    const { data, error } = await supabase
    .from('records')
    .insert([
      {
        project_id: 1, 
        count: 20,
      },
    ])
    .select()
    console.log(data)
    console.log(error)
  }

  return (
    <Button className="w-full" onClick={()=> submitRecord()}>Submit</Button>
  )
}