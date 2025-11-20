"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Quote() {
  const quotes = [
    "Believe you can and you're halfway there.",
    "I used to think I was indecisive, but now I'm not sure.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
  ];

  const [index, setIndex] = useState(0);

  const nextQuote = () => setIndex((prev) => (prev + 1) % quotes.length);

  return (
    <div className="mt-4 text-center">
      <p className="text-xl font-medium">{quotes[index]}</p>
      <Button variant="outline" size="sm" className="mt-2" onClick={nextQuote}>
        Show another
      </Button>
    </div>
  );
}
