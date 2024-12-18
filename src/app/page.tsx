"use client";

import { useEffect, useState } from "react";
import Navbar from "@/app/components/Navbar";
import MainPage from "@/app/components/MainPage";
import Footer from "@/app/components/Footer";

export default function Home() {
  const [data, setData] = useState<any[]>([]);

  // Exemplu: Fetch date (comentat momentan)
  // useEffect(() => {
  //   fetch("/api/data")
  //     .then((response) => response.json())
  //     .then((data) => setData(data))
  //     .catch((error) => console.error("Eroare la fetch:", error));
  // }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar-ul fix sus */}
      <Navbar />

      {/* Secțiunea principală a paginii */}
      <MainPage />

      {/* Footer-ul fix jos */}
      <Footer />
    </div>
  );
}
