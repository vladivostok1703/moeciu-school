'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'

const values = [
  {
    title: "Abordare personalizată",
    description: "Fiecare elev are o poveste. Ne raportăm la toți copiii la fel, indiferent de mediul din care provin, capacitățile și abilitățile pe care le au.",
    color: "bg-red-50",
    icon: "/iconite_1_abordare-personalizata.png"
  },
  {
    title: "Gândire laterală",
    description: "Ajutăm elevii să treacă de limitele conceptuale ale gândirii clasice, impulsionându-i să vadă lucrurile în ansamblu și încurajându-i să fie creativi.",
    color: "bg-purple-50",
    icon: "/iconite_2_gandire-laterala.png"
  },
  {
    title: "Suport",
    description: "Ajutăm fiecare elev să își atingă potențialul maxim. Avem răbdare și înțelegem că lucrurile frumoase au nevoie de timp.",
    color: "bg-pink-50",
    icon: "/iconite_3_suport.png"
  },
  {
    title: "Înțelegere",
    description: "Suntem prezenți în fiecare etapă a dezvoltării elevilor și clădim împreună cu ei un viitor adult echilibrat, fericit și independent.",
    color: "bg-blue-50",
    icon: "/iconite_4_intelegere.png"
  }
]

export default function ValuesSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    const valueCards = document.querySelectorAll('.value-card')
    valueCards.forEach((card, index) => {
      card.classList.add(`delay-${index * 100}`)
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="values" className="section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title animate-on-scroll">Valorile Noastre</h2>
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-icon">
                <Image
                  src={value.icon}
                  alt={value.title}
                  width={64}
                  height={64}
                />
              </div>
              <h3 className="value-title">{value.title}</h3>
              <p className="value-description">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

