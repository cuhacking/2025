import type { FormData, FormErrors } from './contactFormValidation'
import cuHackingLogo from '@cuhacking/shared/assets/logos/cuHacking/cuhacking-logo-1.svg'
import { GlassmorphicCard } from '@cuhacking/shared/ui/src/cuHacking/components/glassmorphic-card'
import { TerminalText } from '@cuhacking/shared/ui/src/cuHacking/components/terminal-text'
import React, { useState } from 'react'
import { validateForm } from './contactFormValidation'

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus('idle')

    const validationErrors = validateForm(formData)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setIsLoading(false)
      return
    }

    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    }
    catch {
      setSubmitStatus('error')
    }
    finally {
      setIsLoading(false)
    }
  }

  return (
    <div id="contactpage" className="flex justify-center w-full bg-black text-white min-h-screen">
      <div className="w-full max-w-screen-xl px-5 py-5 lg:px-20 lg:py-14">
        {/* GlassmorphicCard Wrapper */}
        <GlassmorphicCard className="flex flex-col justify-between gap-8 w-full h-auto p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-3 pl-5 sm:pl-10">
              Contact Us
            </h1>
            <TerminalText>
              <p className="text-lg pl-5 sm:pl-10">
                Feel free to ask us anything! We're here to help.
              </p>
            </TerminalText>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Contact Form in a Separate Glass Card */}
            <GlassmorphicCard className="w-full md:w-2/3 p-6 h-auto">
              <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-500 bg-opacity-20 rounded-lg text-green-400">
                    Message sent successfully!
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-500 bg-opacity-20 rounded-lg text-red-400">
                    Failed to send message. Please try again.
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="flex flex-col gap-y-1">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`p-3 bg-gray-900 rounded-lg text-white focus:outline-none focus:ring-2 ${
                        errors.name ? 'ring-2 ring-red-500' : 'focus:ring-green-500'
                      } transition-all`}
                      placeholder="Your Name"
                      required
                    />
                    {errors.name && (
                      <span className="text-red-400 text-sm">{errors.name}</span>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="flex flex-col gap-y-1">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`p-3 bg-gray-900 rounded-lg text-white focus:outline-none focus:ring-2 ${
                        errors.email
                          ? 'ring-2 ring-red-500'
                          : 'focus:ring-green-500'
                      } transition-all`}
                      placeholder="Your Email"
                      required
                    />
                    {errors.email && (
                      <span className="text-red-400 text-sm">{errors.email}</span>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div className="flex flex-col gap-y-1">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`p-3 bg-gray-900 rounded-lg text-white focus:outline-none focus:ring-2 ${
                      errors.subject
                        ? 'ring-2 ring-red-500'
                        : 'focus:ring-green-500'
                    } transition-all`}
                    placeholder="Subject"
                    required
                  />
                  {errors.subject && (
                    <span className="text-red-400 text-sm">
                      {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message Field */}
                <div className="flex flex-col gap-y-1">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`p-3 bg-gray-900 rounded-lg text-white focus:outline-none focus:ring-2 ${
                      errors.message
                        ? 'ring-2 ring-red-500'
                        : 'focus:ring-green-500'
                    } resize-none transition-all`}
                    rows={5}
                    placeholder="Your Message"
                    required
                  />
                  {errors.message && (
                    <span className="text-red-400 text-sm">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="py-3 px-8 bg-green-500 text-black font-semibold tracking-wide rounded-lg hover:bg-green-600 transition-all duration-200 w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isLoading
                    ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            >
                            </circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            >
                            </path>
                          </svg>
                          Sending...
                        </>
                      )
                    : (
                        'Send Message'
                      )}
                </button>
              </form>
            </GlassmorphicCard>

            {/* Right Side: Logo */}
            <GlassmorphicCard className="p-6 flex-1 flex items-center justify-center">
              <img
                src={cuHackingLogo}
                alt="cuHacking logo"
                className="w-48 md:w-56 lg:w-64 transition-transform duration-300 hover:scale-105"
              />
            </GlassmorphicCard>
          </div>
        </GlassmorphicCard>
      </div>
    </div>
  )
}
