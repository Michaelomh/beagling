"use client"

import { LayoutList, Menu, TrendingUp } from "lucide-react"
import Link from "next/link"
import {usePathname} from "next/navigation"

export const Navbar = () => {
  const pathName = usePathname()
  console.log(pathName)
  
  return (
    <div className="h-12 flex justify-between items-center px-4 bg-blue-300">
      <Link href={"/settings"}>
        <Menu />
      </Link>
      <span>Push up Tracker</span>
      <div className="flex flex-row gap-2">
        <Link href={"/records"}>
          <LayoutList />
        </Link>
        {/* <TrendingUp /> */}
      </div>
    </div>
  )
}