'use client'

import Image from 'next/image'
import { Facebook, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div>
            <Image
              src="https://www.cylex.ro/images/category-images/schools.svg"
              alt="Logo Școala Gimnazială"
              width={100}
              height={100}
              className="footer-logo"
            />
            <p>Școala Gimnazială Moieciu de Jos</p>
              <div className="footer-contact">
              <div className="flex items-center gap-2 mb-2">
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
          </div>
          
          <div className="footer-links">
          <h3>Informații Utile</h3>
          <ul>
            <li><a href="/about">Despre Noi</a></li>
            <li><a href="/announcements">Anunturi</a></li>
            <li><a href="/teachers">Profesorii Noștri</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          </div>
        </div>
        
        
        
        <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Școala Gimnazială Moeciu de Jos. Toate drepturile rezervate.</p>
          <div className="social-links justify-center">
            <a href="https://www.facebook.com/people/%C8%98coala-Gimnazial%C4%83-Moieciu-de-Jos/100054628082330/" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
