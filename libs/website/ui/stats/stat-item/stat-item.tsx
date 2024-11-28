import React from 'react'

interface StatsProps {
  imgUrl: string
  title: string
}

export function StatItem({ imgUrl, title }: StatsProps) {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <img
        className="w-auto h-16"
        src={imgUrl}
        loading="lazy"
        alt={`${title} icon`}
      />
      <p className="font-sans text-lg font-medium">{title}</p>
    </div>
  )
}
