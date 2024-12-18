"use client"; // necesar pentru funcționarea componentelor Next.js

import React, { useState } from "react";
import Link from "next/link";
import DespreNoi from "./DespreNoi"; // Importă secțiunea Despre Noi
import Anunturi from "./Anunturi"; // Importă secțiunea Anunțuri
import Contact from "./Contact"; // Importă secțiunea Contact

const Navbar: React.FC = () => {
  const [showAbout, setShowAbout] = useState(false); // state pentru a controla vizibilitatea secțiunii "Despre Noi"
  const [showContact, setShowContact] = useState(false); // state pentru secțiunea Contact
  const [showAnnouncements, setShowAnnouncements] = useState(false); // state pentru secțiunea Anunțuri

  const toggleAboutSection = () => {
    setShowAbout(!showAbout);
    setShowContact(false); // Ascunde secțiunea Contact
    setShowAnnouncements(false); // Ascunde secțiunea Anunțuri
  };

  const toggleContactSection = () => {
    setShowContact(!showContact);
    setShowAbout(false); // Ascunde secțiunea Despre Noi
    setShowAnnouncements(false); // Ascunde secțiunea Anunțuri
  };

  const toggleAnnouncementsSection = () => {
    setShowAnnouncements(!showAnnouncements);
    setShowAbout(false); // Ascunde secțiunea Despre Noi
    setShowContact(false); // Ascunde secțiunea Contact
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo-ul */}
        <Link href="" className="navbar-logo">
          Scoala Gimnaziala Moeciu de Jos
        </Link>

        {/* Lista de linkuri */}
        <ul className="navbar-list">
          <li className="navbar-item">
            <button className="navbar-link" onClick={toggleAboutSection}>
              Despre Noi
            </button>
          </li>
          <li className="navbar-item">
            <button className="navbar-link" onClick={toggleContactSection}>
              Contact
            </button>
          </li>
          <li className="navbar-item">
            <button
              className="navbar-link"
              onClick={toggleAnnouncementsSection}
            >
              Anunțuri
            </button>
          </li>
        </ul>
      </div>

      {/* Secțiunea Despre Noi */}
      {showAbout && <DespreNoi />}

      {/* Secțiunea Contact */}
      {showContact && <Contact />}

      {/* Secțiunea Anunțuri */}
      {showAnnouncements && <Anunturi />}
    </nav>
  );
};

export default Navbar;
