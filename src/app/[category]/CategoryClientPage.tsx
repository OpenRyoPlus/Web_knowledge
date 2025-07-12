'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Card {
  title: string;
  content: string;
}

interface CategoryClientPageProps {
  category: string;
  cards: Card[];
}

export default function CategoryClientPage({ category, cards }: CategoryClientPageProps) {
  const [selectedCard, setSelectedCard] = useState(cards[0]);

  return (
    <div className="flex h-screen">
      <aside className="w-1/4 bg-gray-100 p-4 overflow-y-auto">
        <Link href="/">
          <h2 className="text-2xl font-bold mb-4 capitalize hover:text-blue-600">{category}</h2>
        </Link>
        <ul>
          {cards.map((card, index) => (
            <li key={index} 
                className={`p-2 rounded cursor-pointer ${selectedCard && selectedCard.title === card.title ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`}
                onClick={() => setSelectedCard(card)}>
              {card.title}
            </li>
          ))}
        </ul>
      </aside>
      <main className="w-3/4 p-8 overflow-y-auto flex items-center justify-center">
       {selectedCard && (
         <div className="max-w-2xl">
          <h1 className="text-4xl font-bold mb-6 text-center">{selectedCard.title}</h1>
          <p className="text-lg whitespace-pre-wrap leading-relaxed text-left">
           {selectedCard.content}
          </p>
        </div>
        )}
      </main>

    </div>
  );
}
