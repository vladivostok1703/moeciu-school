"use client"

import type React from "react"
import { useState, useRef } from "react"
import dynamic from "next/dynamic"
import { submitContactForm } from "@/app/components/actions/submit-contact-form"

// Dynamically import Toaster with no SSR
const Toaster = dynamic(() => import("react-hot-toast").then((mod) => mod.Toaster), { ssr: false })

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    const formData = new FormData(event.currentTarget)
    const result = await submitContactForm(formData)

    setIsSubmitting(false)

    if (result.error) {
      setMessage({ type: "error", text: result.error })
    } else if (result.success) {
      setMessage({ type: "success", text: result.success })
      formRef.current?.reset()
    }
  }

  return (
    <>
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
            className="mt-1 block w-1/2 mx-auto rounded-md border-gray-300 shadow-sm"
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
            className="mt-1 block w-1/2 mx-auto rounded-md border-gray-300 shadow-sm"
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
            className="mt-1 block w-1/2 mx-auto h-32 rounded-md border-gray-300 shadow-sm"
          ></textarea>
        </div>
        {message && (
          <div className={`text-center ${message.type === "success" ? "text-green-600" : "text-red-600"}`}>
            {message.text}
          </div>
        )}
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          {isSubmitting ? "Se trimite..." : "Trimite mesajul"}
        </button>
      </form>
      <Toaster />
    </>
  )
}

