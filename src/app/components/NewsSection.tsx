'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'

const news = [
  {
    title: 'Patru elevi ai Școlii Gimnaziale din Moieciu de Jos, note de 10 la Evaluarea Națională.',
    date: '7 Iulie 2023',
    content: 'Elevii de 10 ai Școlii Gimnaziale Moieciu de Jos sunt: Drăgan Doina, Albușoiu Ștefania, Mânjină Sonia și Cioban Radu.',
    image: '/elevi-de-10-1024x1024.png'
  },
  {
    title: 'Directorul Școlii Gimnaziale Moieciu de Jos, o nouă performanță sportivă de marcă',
    date: '27 Iunie 2023',
    content: 'Duminică 25.06.2023 la Cocorăști Mislii s-a desfășurat Campionatul Național de Alergare Montană Masters, unde profesorul Marius Olteanu, director la Școala Gimnazială Moieciu de Jos, legitimat la CSM Brașov, a obținut o nouă performanță remarcabilă prin clasarea pe cea mai înaltă treaptă a podiumului, devenind Campion Național la categoria M45!',
    image: '/marius-olteanu.png'
  },
  {
    title: 'Școala Gimnazială Moieciu de Jos i-a comemorat pe eroii neamului',
    date: '18 Mai 2018',
    content: 'Evenimentul a fost organizat de Școala Gimnazială Moieciu de Jos, în fața Monumentului ridicat în cinstea eroilor care s-au jerfit pentru patria noastră.',
    image: '/elevi-moeciu-comemorare-eroi.png'
  }
]

export default function NewsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll')
          }
        })
      },
      { threshold: 0.1 }
    )

    const cards = document.querySelectorAll('.news-card')
    cards.forEach(card => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="section">
      <div className="container">
        <h2 className="section-title">Noutăți și Evenimente</h2>
        <div className="news-grid">
          {news.map((item, index) => (
            <article 
              key={index} 
              className="news-card"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={200}
                className="news-image"
              />
              <div className="news-content">
                <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.content}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

