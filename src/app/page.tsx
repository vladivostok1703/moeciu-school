"use client";

import Navbar from "@/app/components/Navbar";
import MainPage from "@/app/components/MainPage";
import Footer from "@/app/components/Footer";
import BackToTop from "@/app/components/BackToTop";
import PageTransition from "./components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <MainPage />
      <Footer />
      <BackToTop />
    </div>
    </PageTransition>
  );
}
