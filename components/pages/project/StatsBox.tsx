type Props = {
  title: string
  count: number
  showTarget?: boolean
  target?: number
  showPercentage?: boolean
}

const StatsBox = ({ title, count, showTarget, target, showPercentage }: Props) => {
  const percentage = showPercentage && target && (count / target).toFixed(1)

  return (
    <div className="flex flex-col items-center justify-center border-2 border-sky-500 rounded-lg">
      <span className="text-lg italic slate text-slate-500">{title}</span>
      <h1 className="font-bold tracking-widest text-6xl">{`${count}${target && showTarget ? "/" + target : ""}`}</h1>
      {showPercentage && <h2 className="tracking-normal text-2xl text-slate-500">({percentage}%)</h2>}
    </div>
  )
}

export default StatsBox
