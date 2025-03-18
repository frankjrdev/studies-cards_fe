// src/components/Dashboard/StatsCard.tsx
import React from "react";

interface StatsCardProps {
  title: string;
  value: number;
}

export default function StatsCard({ title, value }: StatsCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-600">{title}</h3>
      <p className="text-2xl font-bold text-primary">{value}</p>
    </div>
  );
}
