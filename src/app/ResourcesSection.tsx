import React from "react";
import { FileDown } from 'lucide-react'
import Button from './components/ui/Button'

export default function ResourcesSection() {
  const resources = [
    { name: 'Student Handbook', url: '/student-handbook.pdf' },
    { name: 'Academic Calendar', url: '/academic-calendar.pdf' },
    { name: 'Course Catalog', url: '/course-catalog.pdf' },
  ]

  return (
    <section id="resources" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Resources</h2>
        <div className="flex flex-col items-center space-y-4">
          {resources.map((resource, index) => (
            <Button key={index} asChild>
              <a href={resource.url} download>
                <FileDown className="mr-2 h-4 w-4" /> {resource.name}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}

