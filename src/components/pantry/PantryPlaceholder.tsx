// src/components/Pantry/PantryPlaceholder.tsx
import React from 'react';

export default function PantryPlaceholder() {
  return (
    <aside className="bg-white p-6 rounded-2xl shadow-lg">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Your Pantry</h3>
        <div className="text-sm text-gray-500">Select items to get suggestions</div>
      </div>

      <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-3">
        {/* a few visual chips to show the panel */}
        {['Egg', 'Rice', 'Onion', 'Tomato', 'Bread', 'Cheese'].map((t) => (
          <div key={t} className="px-3 py-2 rounded-lg bg-amber-50 text-sm flex items-center justify-between">
            <span>{t}</span>
            <button className="ml-2 w-6 h-6 rounded-full bg-amber-300 text-white">+</button>
          </div>
        ))}
      </div>
    </aside>
  );
}
