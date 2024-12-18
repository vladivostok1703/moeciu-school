"use client"; // necesar pentru funcționarea componentelor Next.js
import React, { useState } from "react";
import Link from "next/link";
import "./Navbar.css"; // Importăm fișierul CSS global sau local

const Navbar: React.FC = () => {
  const [showAbout, setShowAbout] = useState(false); // state pentru a controla vizibilitatea secțiunii "Despre Noi"
  const [showContact, setShowContact] = useState(false); // state pentru a controla vizibilitatea secțiunii "Contact"
  const [showAnnouncements, setShowAnnouncements] = useState(false); // state pentru secțiunea Anunțuri
  const [selectedMonth, setSelectedMonth] = useState<number>(new Date().getMonth()); // state pentru luna selectată
  const [filteredEvents, setFilteredEvents] = useState<{ [key: string]: string }>({}); // corectăm tipul stării

  const toggleAboutSection = () => {
    setShowAbout(!showAbout);
    setShowContact(false); // Ascunde secțiunea Contact
    setShowAnnouncements(false); // Ascunde secțiunea Anunțuri
  };

  const toggleContactSection = () => {
    setShowContact(!showContact);
    setShowAbout(false); // Ascunde secțiunea About
    setShowAnnouncements(false); // Ascunde secțiunea Anunțuri
  };

  const toggleAnnouncementsSection = () => {
    setShowAnnouncements(!showAnnouncements);
    setShowAbout(false); // Ascunde secțiunea About
    setShowContact(false); // Ascunde secțiunea Contact
  };

  // Obiectul care conține evenimentele anului curent
  const currentYear = new Date().getFullYear();

  const events: { [key: string]: string } = {
    "2024-06-07": "Excursie la Muzeul de Istorie",
    "2024-06-10": "Ședința cu părinții clasei a VIII-a",
    "2024-06-15": "Premierea olimpicilor școlari",
    "2024-06-20": "Festivitatea de absolvire",
    "2024-07-10": "Cursuri de vacanță - Limba Engleză",
    "2024-09-05": "Începerea anului școlar",
    "2024-10-01": "Ziua educației",
    "2024-12-15": "Sărbători de Crăciun",
    // Poți adăuga și alte evenimente aici
  };

  // Funcție pentru formatarea datei în format YYYY-MM-DD
  const formatDate = (date: Date): string => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    return `${currentYear}-${month}-${day}`;
  };

  // Funcție pentru a filtra evenimentele pe baza lunii
  const filterEventsByMonth = (month: number) => {
    const filtered = Object.keys(events).filter((date) => {
      const eventDate = new Date(date);
      return eventDate.getMonth() === month;
    }).reduce((obj, key) => {
      obj[key] = events[key];
      return obj;
    }, {} as { [key: string]: string }); // corectăm tipul pentru obiectul returnat

    setFilteredEvents(filtered); // actualizăm starea cu evenimentele filtrate
  };

  // Se apelează când utilizatorul selectează o lună
  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedMonth = parseInt(event.target.value);
    setSelectedMonth(selectedMonth);
    filterEventsByMonth(selectedMonth);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo-ul */}
        <Link href="/" className="navbar-logo">
          MySite
        </Link>

        {/* Lista de linkuri */}
        <ul className="navbar-list">

          <li className="navbar-item">
            <button
              className="navbar-link"
              onClick={toggleAboutSection}
            >
              About
            </button>
          </li>
          <li className="navbar-item">
            <button
              className="navbar-link"
              onClick={toggleContactSection}
            >
              Contact
            </button>
          </li>

          <li className="navbar-item">
            <button className="navbar-link" onClick={toggleAnnouncementsSection}>
              Anunțuri
            </button>
          </li>
        </ul>
      </div>

      {/* Secțiunea Despre Noi */}
      {showAbout && (
        <section id="about-section">
          <div className="hero-section">
            <div>
              <h1 className="hero-title">Despre Noi</h1>
              <p className="hero-subtitle">
                O școală dedicată excelenței în educație, unde fiecare elev contează.
              </p>
            </div>
          </div>

          <section className="content-section">
            <div className="text-content">
              <h2 className="section-title">Cine Suntem?</h2>
              <p className="section-text">
                Suntem o instituție educațională cu o tradiție de peste 20 de ani,
                care oferă un mediu prietenos și inovativ pentru dezvoltarea personală și academică a elevilor noștri.
              </p>
              <p className="section-text">
                Misiunea noastră este să inspirăm elevii să își atingă potențialul maxim,
                punând accent pe creativitate, responsabilitate și cunoaștere.
              </p>
            </div>

            <div className="image-container">
              <img
                src="https://source.unsplash.com/600x400/?school,classroom"
                alt="Școala noastră"
                className="image"
              />
            </div>
          </section>

          <section className="values-section">
            <h2 className="section-title">Valorile Noastre</h2>
            <div className="values-grid">
              <div className="value-card">
                <h3 className="card-title">Excelență</h3>
                <p className="card-text">
                  Promovăm educația de cea mai înaltă calitate și excelența în toate domeniile.
                </p>
              </div>
              <div className="value-card">
                <h3 className="card-title">Responsabilitate</h3>
                <p className="card-text">
                  Învățăm să fim responsabili față de noi înșine și față de comunitate.
                </p>
              </div>
              <div className="value-card">
                <h3 className="card-title">Inovație</h3>
                <p className="card-text">
                  Adoptăm metode moderne de predare și tehnologii pentru o educație mai bună.
                </p>
              </div>
            </div>
          </section>
        </section>
      )}

      {/* Secțiunea Contact */}
      {showContact && (
        <section id="contact-section">
          <div className="contact-header">
            <h1>Contactează-ne</h1>
          </div>

          <div className="contact-content">
            <p><strong>Adresa:</strong> Strada Exemplelor nr. 25, <strong>Cod Poștal:</strong> 123456</p>
            <p><strong>Email:</strong> secretariat@mysite.com</p>
            <p><strong>Telefon Mobil:</strong> 07XXXXXXX</p>
            <p><strong>Director:</strong> Ion Popescu</p>
          </div>
        </section>
      )}

      {/* Secțiunea Anunțuri */}
      {showAnnouncements && (
        <section id="announcements-section">
          <div className="announcements-header">
            <h1>Anunțuri și Noutăți</h1>
            {/* Selector de lună */}
            <div className="announcements-filter">
              <label htmlFor="month-selector">Alege o lună:</label>
              <select
                id="month-selector"
                value={selectedMonth}
                onChange={handleMonthChange}
              >
                {["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"].map((month, index) => (
                  <option key={index} value={index}>
                    {month}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="announcements-content">
            <ul>
              {Object.keys(filteredEvents).length === 0 ? (
                <li className="announcements-empty">Nu sunt evenimente pentru luna selectată.</li>
              ) : (
                Object.keys(filteredEvents).map((date) => {
                  const eventDate = new Date(date);
                  return (
                    <li key={date}>
                      🗓️ <strong>{eventDate.toLocaleDateString()}</strong>: {filteredEvents[date]}
                    </li>
                  );
                })
              )}
            </ul>
          </div>
        </section>
      )}
    </nav>
  );
};

export default Navbar;







