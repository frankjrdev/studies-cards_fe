// src/components/Dashboard/RecentCardsList.tsx
import React from "react";

const recentCards = [
  { id: 1, title: "Card 1", date: "2023-10-01" },
  { id: 2, title: "Card 2", date: "2023-10-02" },
  { id: 3, title: "Card 3", date: "2023-10-03" },
];

export default function RecentCardsList() {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Recently Created Cards</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <ul>
          {recentCards.map((card) => (
            <li key={card.id} className="border-b py-2">
              <div className="flex justify-between">
                <span className="text-gray-700">{card.title}</span>
                <span className="text-gray-500">{card.date}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
