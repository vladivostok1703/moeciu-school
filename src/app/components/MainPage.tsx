import WelcomeSection from "./WelcomeSection";
import ValuesSection from "./ValuesSection";
import StatsSection from "./StatsSection";
import CalendarSection from "./CalendarSection";
import LocationSection from "./LocationSection";
import ResourcesSection from "./ResourcesSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <WelcomeSection />
      <ValuesSection />
      <StatsSection />
      <CalendarSection />
      <LocationSection />
      <ResourcesSection />
    </main>
  );
}
