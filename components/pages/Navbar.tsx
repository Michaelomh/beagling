import { LayoutList, Menu, TrendingUp } from "lucide-react"

export const Navbar = () => {
  return (
    <div className="h-12 flex justify-between items-center px-4 bg-blue-300">
      <Menu />
      <span>Push up Tracker</span>
      <div className="flex flex-row gap-2">
        <LayoutList />
        {/* <TrendingUp /> */}
      </div>
    </div>
  )
}