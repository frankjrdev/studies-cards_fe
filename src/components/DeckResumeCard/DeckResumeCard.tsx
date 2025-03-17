interface DeckResumeCardProps {
  deckTitle: string;
  deckDescription: string;
  deckId: string;
}

export default function DeckResumeCard({
  deckTitle,
  deckDescription,
  deckId,
}: DeckResumeCardProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <h3 className="text-xl font-bold">{deckTitle}</h3>
      <p className="text-gray-600">{deckDescription}</p>
    </div>
  );
}
