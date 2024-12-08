import cuHackingLogo from '@cuhacking/shared/assets/logos/cuHacking/cuhacking-logo-1.svg'
import { GlassmorphicCard } from '@cuhacking/shared/ui/src/cuHacking/components/glassmorphic-card'
import React, { useEffect, useState } from 'react'
import { ContactForm } from './ui/ContactForm'
import { ContactHero } from './ui/ContactHero'
import { StatusMessage } from './ui/StatusMessage'

export function ContactPage(): React.JSX.Element {
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  // Auto-hide status message after 3 seconds
  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => {
        setSubmitStatus(null)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [submitStatus])

  const handleSubmit = (status: 'success' | 'error') => {
    setSubmitStatus(null)
    setTimeout(() => {
      setSubmitStatus(status)
    }, 100)
  }

  return (
    <div id="contactpage" className="flex justify-center w-full bg-black text-white min-h-screen">
      <div className="w-full max-w-screen-xl px-5 py-5 lg:px-20 lg:py-14">
        <GlassmorphicCard className="flex flex-col md:flex-row gap-8 justify-between w-full h-auto p-8">
          <div className="flex flex-col gap-y-6 md:w-2/3">
            {/* Hero */}
            <ContactHero />

            {/* Status Message - Only shown when submitStatus is not null */}
            {submitStatus && (
              <div className="transition-all duration-300 ease-in-out">
                <StatusMessage type={submitStatus} />
              </div>
            )}

            {/* Form */}
            <ContactForm
              onSubmit={handleSubmit}
            />
          </div>

          {/* Logo */}
          <GlassmorphicCard className="flex items-center justify-center p-6 md:w-1/3">
            <img
              src={cuHackingLogo}
              alt="cuHacking Logo"
              className="w-48 md:w-56 lg:w-64 transition-transform duration-300 hover:scale-110"
            />
          </GlassmorphicCard>
        </GlassmorphicCard>
      </div>
    </div>
  )
}
