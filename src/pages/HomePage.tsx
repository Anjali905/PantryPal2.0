import { AnimatePresence, motion } from "framer-motion";
import Header from "../components/Header";
import { Welcome } from "../components/Welcome";
import { usePantryNavigation } from "../hooks/usePantryNavigation";
import PantryPlaceholder from "../components/pantry/PantryPlaceholder";

const HomePage = () => {
  const { showPantry, pantryRef, handleGo} = usePantryNavigation();
  return (
    <div className="max-w-5xl mx-auto p-6 md:p-10">
         <Header/>
      <div className="mt-12">
        <AnimatePresence>
          {!showPantry && <Welcome onGo={handleGo} />}
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
  );
};

export default HomePage;
