'use client'

import dynamic from "next/dynamic";

// import ContactPageClient from "../components/ContactPageForm";

const ContactPageClient = dynamic(() => import("../components/ContactPageForm"), {
  ssr: false,
})

export default function Contact() {
  return (
    <ContactPageClient />
  );
}

