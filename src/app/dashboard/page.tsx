import ChartsSection from "@/components/ChartsSection/ChartsSection";
import RecentCardsList from "@/components/RecentCardsList/RecentCardsList";
import StatsCard from "@/components/StatsCard/StatsCard";

export default function Dashboard() {
  const totalDecks = 17; // Ejemplo de datos
  const totalProjects = 8; // Ejemplo de datos
  const totalCards = 120; // Ejemplo de datos

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard title="Total Decks" value={totalDecks} />
        <StatsCard title="Total Projects" value={totalProjects} />
        <StatsCard title="Total Cards" value={totalCards} />
      </div>

      <ChartsSection />
      <RecentCardsList />
    </div>
  );
}
