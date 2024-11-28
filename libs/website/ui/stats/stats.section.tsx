import React from 'react'
import { STATS_CONSTANTS } from './constants/stats.constants'
import { StatPresenter } from './stats-presenter/stats.presenter'

export function StatSection() {
  return (
    <div className="flex justify-center w-full">
      <div className="w-full max-w-screen-xl px-5 py-5 lg:px-20 lg:py-14">
        <section className="w-full">
          <StatPresenter stats={STATS_CONSTANTS.STATS} />
        </section>
      </div>
    </div>
  )
}
