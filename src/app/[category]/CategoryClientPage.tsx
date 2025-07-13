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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleCardSelect = (card: Card) => {
    setSelectedCard(card);
    // Close sidebar on selection in mobile view
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="relative flex h-screen overflow-hidden">
      {/* Hamburger Menu Button (Mobile Only) */}
      <button
        className="md:hidden fixed top-4 left-4 z-30 p-2 bg-gray-200 rounded-md"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        aria-label="Toggle Menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-3/4 max-w-xs bg-gray-100 p-4 overflow-y-auto z-20 transition-transform transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:relative md:translate-x-0 md:w-1/4 md:max-w-none`}
      >
        <Link href="/">
          <h2 className="text-2xl font-bold mb-4 capitalize hover:text-blue-600">{category}</h2>
        </Link>
        <ul>
          {cards.map((card, index) => (
            <li
              key={index}
              className={`p-2 rounded cursor-pointer ${selectedCard && selectedCard.title === card.title ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`}
              onClick={() => handleCardSelect(card)}
            >
              {card.title}
            </li>
          ))}
        </ul>
      </aside>

      {/* Overlay (Mobile Only) */}
      {isSidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black opacity-50 z-10"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <main className="w-full p-6 pt-20 md:pt-8 md:p-8 overflow-y-auto flex items-center justify-center md:w-3/4">
        {selectedCard && (
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-center">{selectedCard.title}</h1>
            <p className="text-lg md:text-2xl whitespace-pre-wrap leading-relaxed text-left">
              {selectedCard.content}
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
