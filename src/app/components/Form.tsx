"use client"

import type React from "react"
import { useState, useRef } from "react"
import { toast } from "react-hot-toast"
import { submitContactForm } from "./actions/submit-contact-form"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData(event.currentTarget)
      const result = await submitContactForm(formData)

      if (result.error) {
        toast.error(result.error)
      } else if (result.success) {
        toast.success(result.success)
        formRef.current?.reset()
      }
    } catch {
      toast.error("A apărut o eroare. Vă rugăm să încercați din nou.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Nume
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 block w-1/2 mx-auto rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 block w-1/2 mx-auto rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Mesajul dumneavoastră
        </label>
        <textarea
          id="message"
          name="message"
          required
          className="mt-1 block w-1/2 mx-auto h-32 rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
        ></textarea>
      </div>
      <div className="text-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {isSubmitting ? "Se trimite..." : "Trimite mesajul"}
        </button>
      </div>
    </form>
  )
}

