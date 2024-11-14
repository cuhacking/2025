interface StatsProps {
  imgUrl: string
  title: string
}
function Stat({ imgUrl, title }: StatsProps) {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <img
        src={imgUrl}
        loading="lazy"
        alt={`${title} icon`}
      />
      <p className="font-sans text-lg font-medium">{title}</p>
    </div>
  )
}

export default Stat
