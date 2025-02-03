import WelcomeSection from "./WelcomeSection";
import ValuesSection from "./ValuesSection";
import StatsSection from "./StatsSection";
import ResourcesSection from "./ResourcesSection";
import NewsSection from "./NewsSection";
import PhotoGallery from "./PhotoGallery";

export default function Home() {
  return (
    <main>
      <section id="welcome">
          <WelcomeSection />
        </section>
        <section id="values">
          <ValuesSection />
        </section>
        <section id="stats">
          <StatsSection />
        </section>
        <section id="news">
          <NewsSection />
        </section>
        <section id="calendar">
          <PhotoGallery />
        </section>
        <section id="resources">
          <ResourcesSection />
        </section>
    </main>
  );
}
