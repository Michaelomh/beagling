"use client"

import { LayoutList, Menu as MenuIcon, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Menu } from "./menu/Menu"
import { useState } from "react"

export const Navbar = () => {
  const [isMenuShowing, setMenuShowing] = useState(false)
  
  return (
    <div className="h-12 flex justify-between items-center px-4 bg-blue-300">
      <MenuIcon onClick={() => setMenuShowing(true)}/>
      <span>Push up Tracker</span>
      <div className="flex flex-row gap-2">
        <Link href={"/records"}>
          <LayoutList />
        </Link>
        {/* <TrendingUp /> */}
      </div>
      {
        isMenuShowing &&
        <Menu hideMenu={setMenuShowing}/>
      }
    </div>
  )
}