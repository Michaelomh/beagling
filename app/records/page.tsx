import { Button } from "@/components/ui/button";
import { Edit2, Trash2 } from "lucide-react";

export default function Records() {
  return (
    <div className="text-center">
      <div className="px-4 bg-slate-700 flex justify-between text-white py-2">
        <h1>Jul 2023</h1>
        <h1>520 / 600</h1>
      </div>
      <div className="px-4 flex flex-col ">
        <div className="flex items-center justify-between py-2 [&:not(:first-child)]:border-t-2 border-t-slate-200">
          <div>
            <span className="text-slate-600 text-md">12th Jul 14:25:01</span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="font-bold mr-2 text-md text-slate-600">40</span>
            <Button size="icon">
              <Edit2 size={16} strokeWidth={1.5}/>
            </Button>
            <Button size="icon">
              <Trash2 size={16} strokeWidth={1.5}/>
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between [&:not(:first-child)]:border-t-2 border-t-slate-200 py-2">
          <div>
            <span>13th Jul 14:25:01</span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="font-bold mr-2">40</span>
            <Button size="icon">
              <Edit2 size={16} strokeWidth={1.5}/>
            </Button>
            <Button size="icon">
              <Trash2 size={16} strokeWidth={1.5}/>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
