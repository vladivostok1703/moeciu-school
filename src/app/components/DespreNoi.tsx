// src/app/despre-noi/page.tsx

import React, { useState } from "react";

export default function DespreNoi() {
    return (
        <div className="about-container">
            <nav className="navbar">
                <ul>
                    <li>
                        <button className="navbar-link">Despre Noi</button>
                    </li>
                </ul>
            </nav>

            {/* Hero Section cu logo și citat */}
            <section className="hero-section">
                <div className="hero-content">
                    <img
                        src="/path/to/logo.png"
                        alt="Logo"
                        className="hero-logo"
                    />
                    <h1 className="hero-title">Despre Noi</h1>
                    <p className="hero-subtitle">„Educația este cheia succesului!”</p>
                </div>
            </section>

            {/* Content Section */}
            <section className="content-section">
                <div className="text-content">
                    <h2 className="section-title">Cine Suntem?</h2>
                    <p className="section-text">
                        Suntem o instituție educațională cu o tradiție de peste 20 de ani, care oferă un mediu prietenos și inovativ pentru dezvoltarea personală și academică a elevilor noștri.
                    </p>
                    <p className="section-text">
                        Misiunea noastră este să inspirăm elevii să își atingă potențialul maxim, punând accent pe creativitate, responsabilitate și cunoaștere.
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

            {/* Valorile Noastre cu animații pe carduri */}
            <section className="values-section">
                <h2 className="section-title">Valorile Noastre</h2>
                <div className="values-grid">
                    <div className="value-card">
                        <h3 className="card-title">Excelență</h3>
                        <p className="card-text">Promovăm educația de cea mai înaltă calitate și excelența în toate domeniile.</p>
                    </div>
                    <div className="value-card">
                        <h3 className="card-title">Responsabilitate</h3>
                        <p className="card-text">Învățăm să fim responsabili față de noi înșine și față de comunitate.</p>
                    </div>
                    <div className="value-card">
                        <h3 className="card-title">Inovație</h3>
                        <p className="card-text">Adoptăm metode moderne de predare și tehnologii pentru o educație mai bună.</p>
                    </div>
                </div>
            </section>

            {/* Secțiunea Testimonialelor */}
            <section className="testimonials-section">
                <h2 className="section-title">Ce spun elevii noștri?</h2>
                <div className="testimonials">
                    <div className="testimonial">
                        <p className="testimonial-text">„Această școală m-a ajutat să cresc atât pe plan personal cât și profesional.”</p>
                        <p className="testimonial-author">Maria, Elevă</p>
                    </div>
                    <div className="testimonial">
                        <p className="testimonial-text">„În fiecare zi învăț ceva nou și provocator, iar profesorii sunt minunati!”</p>
                        <p className="testimonial-author">Alex, Elev</p>
                    </div>
                    <div className="testimonial">
                        <p className="testimonial-text">„Atmosfera școlii este foarte primitoare și educația de calitate mă ajută să mă dezvolt continuu.”</p>
                        <p className="testimonial-author">Ioana, Elevă</p>
                    </div>
                </div>
            </section>
        </div>
    );
}



