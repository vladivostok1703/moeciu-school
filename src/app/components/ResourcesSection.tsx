'use client'

import { FileText, Book, Calendar, Download } from 'lucide-react'


const resources = [
  {
    title: 'Orar Școlar',
    icon: Calendar,
    description: 'Descarcă orarul actualizat al claselor',
    url: '/ORAR_SEM_1_IESC_rev_16.pdf'
  },
  {
    title: 'Manuale Digitale',
    icon: Book,
    description: 'Acces la manualele digitale',
    url: 'https://www.unitbv.ro/biblioteca/264-resurse-electronice/1359-carti-online.html',
    target: '_blank'
    
  },
  {
    title: 'Regulament Intern',
    icon: FileText,
    description: 'Regulamentul școlar intern',
    url: '/Regulament_activitate_profesionala_studenti_2024-2025_30.09.2024.pdf'
  }
]

export default function ResourcesSection() {
  return (
    <section className="section bg-gray-100">
      <div className="container">
        <h2 className="section-title">Resurse Educaționale</h2>
        <div className="resources-grid">
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.url}
              className="resource-card"
              download
              target={resource.target || '_self'}
            >
              <resource.icon className="w-12 h-12 mx-auto mb-4 text-primary-color" />
              <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <Download className="w-6 h-6 mx-auto text-gray-400" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

