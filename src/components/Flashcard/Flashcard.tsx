import { useState } from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface FlashcardProps {
  front: string;
  back: string;
  className?: string;
  onFlip?: () => void;
}

export function Flashcard({ front, back, className, onFlip }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    onFlip?.();
  };

  return (
    <div
      className={cn("relative h-[300px] w-full perspective-1000", className)}
    >
      <div
        className={cn(
          "relative h-full w-full transition-transform duration-500 transform-style-3d",
          isFlipped && "rotate-y-180"
        )}
      >
        {/* Front of card */}
        <Card
          className={cn(
            "absolute h-full w-full backface-hidden",
            !isFlipped ? "z-10" : "z-0"
          )}
        >
          <CardContent className="flex h-full flex-col items-center justify-center p-6 text-center">
            <p className="text-xl font-medium">{front}</p>
            <Button variant="ghost" className="mt-4" onClick={handleFlip}>
              Show Answer
            </Button>
          </CardContent>
        </Card>

        {/* Back of card */}
        <Card
          className={cn(
            "absolute h-full w-full backface-hidden rotate-y-180",
            isFlipped ? "z-10" : "z-0"
          )}
        >
          <CardContent className="flex h-full flex-col items-center justify-center p-6 text-center">
            <p className="text-xl font-medium">{back}</p>
            <Button variant="ghost" className="mt-4" onClick={handleFlip}>
              Show Question
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
