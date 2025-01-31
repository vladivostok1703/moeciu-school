import WelcomeSection from "./WelcomeSection";
import ValuesSection from "./ValuesSection";
import StatsSection from "./StatsSection";
import CalendarSection from "./CalendarSection";
import LocationSection from "./LocationSection";
import ResourcesSection from "./ResourcesSection";
import NewsSection from "./NewsSection";

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
          <CalendarSection />
        </section>
        <section id="resources">
          <ResourcesSection />
        </section>
    </main>
  );
}
