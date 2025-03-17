import DeckResumeCard from "@/components/DeckResumeCard/DeckResumeCard";
import SideBar from "@/components/Sidebar/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex">
      <SideBar />
      {/* <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <DeckResumeCard
          deckTitle="Deck 1"
          deckDescription="This is a description"
          deckId="1"
        />
      </div> */}
    </div>
  );
}
