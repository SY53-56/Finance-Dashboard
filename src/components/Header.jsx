import { MoonIcon, SunIcon } from "lucide-react";
import RoleSwitcher from "./RoleSwitcher";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Button from "./Button";

function Header() {
  const { theme, handleTheme } = useContext(ThemeContext);

  return (
   <div className="flex justify-between items-center mb-6">
  <h1 className="text-2xl font-bold dark:text-white">Dashboard</h1>

  <div className="flex items-center gap-4">
    <button
      onClick={handleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition"
    >
      {theme === "light" ? (
        <MoonIcon className="text-black" />
      ) : (
        <SunIcon className="text-yellow-400" />
      )}
    </button>

    <RoleSwitcher />
  </div>
</div>
  );
}

export default Header;