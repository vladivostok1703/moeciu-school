"use client";

// page.tsx
import { useEffect, useState } from "react";

import Navbar from "./Navbar"; // acest import rămâne neschimbat
import Welcome from "./Welcome.tsx";
import ValuesSection from "./ValuesSection.tsx";
import StatsSection from "./StatsSection.tsx";
import NewsSection from "./NewsSection.tsx";
import Footer from "./Footer.tsx";
import CalendarSection from "./CalendarSection.tsx";
import PhotoGallery from "./PhotoGallery.tsx";
import LocationSection from "./LocationSection.tsx";
import ResourcesSection from "./ResourcesSection.tsx";

export default function Home() {
  const [data, setData] = useState<any[]>([]);

  // useEffect(() => {
  //   // Exemplu: Fetch date dintr-un API
  //   fetch("/api/data")
  //     .then((response) => response.json())
  //     .then((data) => setData(data))
  //     .catch((error) => console.error("Eroare la fetch:", error));
  // }, []);

  return (
    <div>
      {/* Navbar-ul modernizat */}
      <Navbar />
      <Welcome />
      <ValuesSection />
      <StatsSection />
      {/* <NewsSection/> */}
      <CalendarSection />
      {/* <PhotoGallery/> */}
      <LocationSection />
      <ResourcesSection />
      <Footer />
      {/*     <ul>
          {data.map((item: any, index: number) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul> */}
    </div>
  );
}
