import type { FormData, FormErrors } from '../types/contact.types'
import React, { useState } from 'react'
import { validateForm } from '../contactFormValidation'

interface ContactFormProps {
  onSubmit: (status: 'success' | 'error') => void
}

export function ContactForm({ onSubmit }: ContactFormProps): React.JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    const { name, value } = e.target

    setFormData((prev: FormData) => ({
      ...prev,
      [name]: value,
    }))

    // Cleaning errors as user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev: FormErrors) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault()

    const validationErrors = validateForm(formData)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setIsLoading(true)

    try {
      await new Promise<void>((resolve) => {
        setTimeout(resolve, 1500)
      })
      onSubmit('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    }
    catch (error) {
      console.error('Submission error:', error)
      onSubmit('error')
    }
    finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-y-6">
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Name */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`p-3 bg-gray-900 rounded-lg text-white focus:outline-none focus:ring-2 ${
              errors.name ? 'ring-2 ring-red-500' : 'focus:ring-green-500'
            }`}
            placeholder="Your Name"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`p-3 bg-gray-900 rounded-lg text-white focus:outline-none focus:ring-2 ${
              errors.email ? 'ring-2 ring-red-500' : 'focus:ring-green-500'
            }`}
            placeholder="Your Email"
          />
        </div>

        {/* Subject */}
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={`p-3 bg-gray-900 rounded-lg text-white focus:outline-none focus:ring-2 ${
            errors.subject ? 'ring-2 ring-red-500' : 'focus:ring-green-500'
          }`}
          placeholder="Subject"
        />

        {/* Message */}
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={`p-3 bg-gray-900 rounded-lg text-white focus:outline-none focus:ring-2 ${
            errors.message ? 'ring-2 ring-red-500' : 'focus:ring-green-500'
          }`}
          rows={5}
          placeholder="Your Message"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="py-3 px-8 bg-green-500 text-black rounded-lg font-semibold hover:bg-green-600 w-full sm:w-auto"
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  )
}
