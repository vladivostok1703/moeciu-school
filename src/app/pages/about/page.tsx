"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import BackToTop from "@/app/components/BackToTop";
import ValuesSection from "@/app/components/ValuesSection";
import Testimonials from "@/app/components/Testimonials";
import Image from "next/image";
import PageTransition from "@/app/components/PageTransition";

export default function Despre() {
  return (
    <PageTransition variant="fade">
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex items-center justify-center">
        <div className="about-container">
            <section className="hero-section relative bg-[url('/schoolAboutPage.png')] bg-center">
                <Image
                    src="https://www.cylex.ro/images/category-images/schools.svg"
                    alt="Logo Școala Gimnazială"
                    width={100}
                    height={100}
                    className="footer-logo"
                />
                <div className="hero-content">
                    
                    <h1 className="hero-title">Despre Noi</h1>
                    <p className="hero-subtitle">„Educația este cheia succesului!”</p>
                </div>
            </section>

            {/* Content Section */}
            <section className="content-section">
                <div className="text-content">
                    <h2 className="section-title">Cine Suntem?</h2>
                    <p className="section-text">
                    Școala Gimnazială Moieciu de Jos este o instituție educațională importantă din comuna Moieciu, județul Brașov, care se remarcă prin performanțele elevilor săi și implicarea activă a cadrelor didactice. Situată în inima satului Moieciu de Jos, școala oferă educație de calitate pentru ciclul gimnazial și se află într-o zonă pitorească, cunoscută pentru peisajele sale montane.
                    <br></br><br></br>
                    În 2023, Școala Gimnazială Moieciu de Jos a obținut rezultate deosebite la Evaluarea Națională, patru elevi reușind să obțină nota maximă de 10. Aceste performanțe au fost realizate la diferite discipline, trei dintre elevi având nota 10 la matematică și unul la limba și literatura română. Aceste rezultate excepționale subliniază angajamentul școlii de a oferi un învățământ de calitate, în ciuda provocărilor specifice mediului rural.
                    <br></br><br></br>
                    Pe lângă performanțele școlare, școala se bucură și de un director activ în viața comunității. Marius Olteanu, directorul școlii, este cunoscut nu doar pentru implicarea sa în educație, dar și pentru realizările sale în domeniul sportiv. În 2023, alături de echipa României, a câștigat medalia de bronz la Campionatele Europene de Atletism Masters din Pescara, Italia, la proba de cross country, un exemplu de dedicare și excelență.
                    </p>
                    </div>
                <div className="image-container">
                    <Image
                    src="/300063406_596371548860443_7495238156915760607_n.png"
                    alt="Logo Școala Gimnazială"
                    width={800}
                    height={60}
                    className="image"
                />
                </div>
            </section>

            <ValuesSection />

            {/* Secțiunea Testimonialelor */}
            <Testimonials />
        </div>
      </main>
      <Footer />
      <BackToTop />
    </div>
    </PageTransition>
  );
}

