"use client"

import { Goal, LayoutList, Menu as MenuIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { Menu } from "./menu/Menu"
import { useState } from "react"

const titleMap: Record<string, string> = {
  "/": "Tracker",
  "/records": "Records"
}

export const Navbar = () => {
  const [isMenuShowing, setMenuShowing] = useState(false)
  const pathName = usePathname();
  
  return (
    <div className="h-12 flex justify-between items-center px-4 bg-blue-300">
      <MenuIcon onClick={() => setMenuShowing(true)}/>
      <span>Push up {titleMap[pathName]}</span>
      <div className="flex flex-row gap-2">
        {
          pathName === '/records' ? <Link href={"/"}><Goal /></Link> 
          :<Link href={"/records"}><LayoutList /></Link> 
          // <TrendingUp /> for stats in the future.
        }
      </div>
      {
        isMenuShowing &&
        <Menu hideMenu={setMenuShowing}/>
      }
    </div>
  )
}