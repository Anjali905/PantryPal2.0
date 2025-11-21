import { useCallback, useEffect, useRef, useState } from "react";

export function usePantryNavigation() {
  const [showPantry, setShowPantry] = useState(false);
  const pantryRef = useRef<HTMLDivElement | null>(null);
  function handleGo() {
    setShowPantry(true);
  }
  const handleHidePantry = useCallback(() => {
    setShowPantry(false);
  }, []);
  // when pantry becomes visible, scroll into view
  useEffect(() => {
    if (!showPantry) return;
    const id = window.requestAnimationFrame(() => {
      pantryRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    return () => window.cancelAnimationFrame(id);
  }, [showPantry]);
  return{ showPantry, pantryRef, handleGo, handleHidePantry};
}
