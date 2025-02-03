'use client'

import dynamic from "next/dynamic"
import ContactForm from "./Form"

// Dynamically import Toaster with no SSR
const Toaster = dynamic(() => import("react-hot-toast").then((mod) => mod.Toaster), { ssr: false })

export default function ContactFormWrapper() {
  return (
    <>
      <ContactForm />
      <Toaster />
    </>
  )
}

