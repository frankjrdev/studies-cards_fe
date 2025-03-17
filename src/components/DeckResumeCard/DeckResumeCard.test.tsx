import React from "react";
import { render, screen } from "@testing-library/react";
import DeckResumeCard from "./DeckResumeCard";
import "@testing-library/jest-dom/extend-expect"; // Add this import

test("renders DeckResumeCard with title and description", () => {
  render(
    <DeckResumeCard
      deckTitle="Deck 1"
      deckDescription="This is a description"
      deckId="1"
    />
  );
  expect(screen.getByText(/Deck 1/i)).toBeInTheDocument();
  expect(screen.getByText(/This is a description/i)).toBeInTheDocument();
});
