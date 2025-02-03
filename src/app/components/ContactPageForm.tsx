'use client'

import dynamic from "next/dynamic"
import { Mail, MapPin, Phone } from "lucide-react"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import BackToTop from "@/app/components/BackToTop"
import LocationSection from "@/app/components/LocationSection"
import ContactFormWrapper from "@/app/components/ContactFormWrapper"

const PageTransition = dynamic(() => import("@/app/components/PageTransition"), {
  ssr: false,
})

export default function ContactPageClient() {
  return (
    <PageTransition variant="fade">
      <div className="flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <section id="contact-section">
            <div className="bg-[#f5f5f5] py-10 px-5 text-center shadow-[0_10px_20px_rgba(0,0,0,0.1)] mt-5 rounded-lg grid grid-cols-[3fr_4fr] gap-16 mb-8 divide-black divide-dashed">
              <div>
                <div className="contact-header">
                  <h1>Unde ne poți găsi?</h1>
                </div>
                <div className="ml-10 mt-20">
                  <div className="flex items-center gap-2 mt-2 mb-2">
                    <Phone className="w-5 h-5" />
                    <span>+40 268 236 899</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="w-5 h-5" />
                    <span>office@scoalamoeciudejos.ro</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span>Strada Principală 514, Moieciu de Jos, 507135, Braşov</span>
                  </div>
                </div>
                <div className="footer-map">
                  <LocationSection />
                </div>
              </div>

              <div className="max-w-2x2">
                <h1 className="text-[2.5rem] text-[#333] mb-20">Contactați-ne</h1>
                <ContactFormWrapper />
              </div>
            </div>
          </section>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </PageTransition>
  )
}

