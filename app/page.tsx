import { Button } from "@/components/ui/button";
import { SubmitButton } from "./SubmitButton";

export default function Home() {

  return (
    <div className="p-4 text-center">
      <div className="flex flex-col items-center">
        <span className="text-lg italic slate text-slate-500">This Year</span>
        <h1 className="font-bold text-6xl">3720</h1>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-lg italic slate text-slate-500">This month (July)</span>
        <h1  className="font-bold text-6xl">410 / 560</h1>
      </div>
      <div className="mt-4">
        <div className="flex flex-row gap-2 justify-between mb-4">
          <div className="flex flex-row gap-4">
            <Button>-1</Button>
            <Button>-5</Button>
          </div>
          <h1 className="font-bold text-4xl">20</h1>
          <div className="flex flex-row gap-4">
            <Button>+5</Button>
            <Button>+1</Button>
          </div>
        </div>
        <SubmitButton />
      </div>
    </div>
  )
}
