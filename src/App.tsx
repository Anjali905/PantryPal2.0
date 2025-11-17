// src/App.tsx
import React, { useRef, useState, useEffect } from "react";
import Header from "./components/Header";
import PantryPlaceholder from "./components/pantry/PantryPlaceholder";
import { AnimatePresence, motion } from "framer-motion";
import { Welcome } from "./components/Welcome";

export default function App() {
  const [showPantry, setShowPantry] = useState(false);
  const pantryRef = useRef<HTMLDivElement | null>(null);

  function handleGo() {
    setShowPantry(true);
  }

  // when pantry becomes visible, scroll into view
  useEffect(() => {
    if (!showPantry) return;
    // small delay to allow mounting/animation to start, but scroll once it's in the DOM
    const id = window.requestAnimationFrame(() => {
      pantryRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    return () => window.cancelAnimationFrame(id);
  }, [showPantry]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-5xl mx-auto p-6 md:p-10">
        <Header/>
        <div className="mt-12">
          <AnimatePresence>
            {!showPantry && (
              <Welcome onGo={handleGo}/>
            )}
          </AnimatePresence>
        </div>

        {/* Pantry section mounts when showPantry is true */}
        <div ref={pantryRef} className="mt-8">
          <AnimatePresence>
            {showPantry && (
              <motion.div
                key="pantry"
                initial={{ opacity: 0, y: 12, scale: 0.995 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.995 }}
                transition={{ type: "spring", stiffness: 160, damping: 18 }}
              >
                <PantryPlaceholder />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
