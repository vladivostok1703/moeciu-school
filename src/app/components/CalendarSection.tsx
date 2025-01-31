'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function CalendarSection() {
  const [currentDate, setCurrentDate] = useState(new Date())

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate()

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay()

  const monthNames = [
    "Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie",
    "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"
  ]

  const weekDays = [
    { short: 'L', full: 'Luni' },
    { short: 'Ma', full: 'Marți' },
    { short: 'Mi', full: 'Miercuri' },
    { short: 'J', full: 'Joi' },
    { short: 'V', full: 'Vineri' },
    { short: 'S', full: 'Sâmbătă' },
    { short: 'D', full: 'Duminică' }
  ]

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))
  }

  return (
    <section className="calendar-section">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Calendar Școlar</h2>
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            <button onClick={prevMonth} className="p-2">
              <ChevronLeft />
            </button>
            <h3 className="text-xl font-semibold">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h3>
            <button onClick={nextMonth} className="p-2">
              <ChevronRight />
            </button>
          </div>
          <div className="calendar-grid">
            {weekDays.map((day) => (
              <div key={day.full} className="calendar-header" title={day.full}>
                {day.short}
              </div>
            ))}
            {Array.from({ length: firstDayOfMonth - 1 }).map((_, index) => (
              <div key={`empty-${index}`} className="calendar-day"></div>
            ))}
            {Array.from({ length: daysInMonth }).map((_, index) => (
              <div key={`day-${index + 1}`} className="calendar-day">
                {index + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

