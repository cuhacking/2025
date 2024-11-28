import React from 'react'
import { FAQ_CONSTANTS } from './constants/faq.constants'
import { FAQPresenter } from './faq-presenter/faq.presenter'

export function FAQSection() {
  return (
    <section id="faq" className="flex justify-center w-full">
      <div className="w-full max-w-screen-xl px-5 py-5 lg:px-20 lg:py-14">
        <div className="w-full">
          <FAQPresenter questions={FAQ_CONSTANTS.QUESTIONS} />
        </div>
      </div>
    </section>
  )
}
