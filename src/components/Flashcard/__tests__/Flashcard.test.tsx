import { render, screen, fireEvent } from "@testing-library/react";
import { Flashcard } from "../Flashcard";

describe("Flashcard", () => {
  const mockProps = {
    front: "What is React?",
    back: "A JavaScript library for building user interfaces",
  };

  it("renders the front content initially", () => {
    render(<Flashcard {...mockProps} />);
    expect(screen.getByText(mockProps.front)).toBeInTheDocument();
    expect(screen.getByText("Show Answer")).toBeInTheDocument();
  });

  it("flips to show back content when clicked", () => {
    render(<Flashcard {...mockProps} />);
    const flipButton = screen.getByText("Show Answer");
    fireEvent.click(flipButton);

    expect(screen.getByText(mockProps.back)).toBeInTheDocument();
    expect(screen.getByText("Show Question")).toBeInTheDocument();
  });

  it("calls onFlip callback when flipped", () => {
    const onFlip = jest.fn();
    render(<Flashcard {...mockProps} onFlip={onFlip} />);

    const flipButton = screen.getByText("Show Answer");
    fireEvent.click(flipButton);

    expect(onFlip).toHaveBeenCalledTimes(1);
  });

  it("applies custom className", () => {
    const customClass = "custom-class";
    render(<Flashcard {...mockProps} className={customClass} />);

    const container = screen.getByText(mockProps.front).closest("div");
    expect(container?.parentElement).toHaveClass(customClass);
  });
});
