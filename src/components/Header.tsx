import { useContext } from "react";
import { GlobalThemeContext } from "../context/ThemeContext";

export default function Header() {
    const getContentValue = useContext(GlobalThemeContext);
    console.log("Theme in Header:", getContentValue);
  return (
    <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold font-display text-orange200">
          PantryPal
        </h1>
      </div>
    </header>
  );
}
