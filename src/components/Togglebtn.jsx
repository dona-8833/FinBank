import React from "react";
import { FaMoon } from "react-icons/fa"; // Import FaMoon icon
import { MdWbSunny } from "react-icons/md"; // Import MdWbSunny icon
import { useDarkMode } from "../context/ThemeContext"; // Import custom hook

function Togglebtn() {
  const { darkMode, setDarkMode } = useDarkMode(); // Access darkMode and setDarkMode from context

  return (
    <button
      onClick={() => setDarkMode(!darkMode)} // Toggle darkMode on click
      className="p-2 rounded-full"
    >
      {darkMode ? (
        <FaMoon className="text-2xl" style={{ color: "#1a677b" }} />
      ) : (
        <MdWbSunny className="text-2xl" style={{ color: "#1a677b" }} />
      )}
    </button>
  );
}

export default Togglebtn;
