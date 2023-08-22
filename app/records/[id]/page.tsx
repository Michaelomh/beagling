"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useParams } from "next/navigation"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { supabase } from "@/utils/SupabaseClient"
import { useEffect, useState } from "react"
import { formatDate } from "@/utils/Date"

const formSchema = z.object({
  count: z.string({
    required_error: "Value must be a number.",
    invalid_type_error: "Value must be a number.",
  }),
  createdAt: z.string({
    required_error: "Please select a valid date and time.",
    invalid_type_error: "Date is invalid.",
  }),
})

export default function Records() {
  const { id } = useParams()
  const [isSubmitting, setSubmitting] = useState<boolean>(false)

  useEffect(() => {
    console.log("resetting")
    typeof id === "string" && getRecord(id)
  }, [id])

  const getRecord = async (id: string) => {
    try {
      const { data: record, error } = await supabase.from("records").select("*").eq("id", id).single()

      form.reset({
        count: record.count,
        createdAt: formatDate(record.created_at, "YYYY-MM-DD hh:mm:ss"),
      })

      if (error) {
        console.error(error)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      count: "0",
      createdAt: formatDate(new Date(), "YYYY-MM-DD hh:mm:ss"),
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    updateRecord(values)
  }

  const updateRecord = async (values: any) => {
    try {
      setSubmitting(true)
      const { data, error } = await supabase
        .from("records")
        .update({ count: values.count, created_at: values.createdAt })
        .eq("id", id)
        .select()

      if (error) console.error(error)
    } catch (error) {
      console.error(error)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="count"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Value / Count</FormLabel>
                <FormControl>
                  <Input placeholder="Count" type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="createdAt"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date added</FormLabel>
                <FormControl>
                  <Input placeholder="date added" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </form>
      </Form>
    </div>
  )
}
