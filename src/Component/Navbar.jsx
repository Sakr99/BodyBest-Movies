import { Link } from "react-router-dom";
import Icon from "./Icon";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./Context/GlobalContext";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <nav className="flex flex-wrap items-center justify-between p-4 bg-white text-black dark:bg-gray-800 dark:text-white">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        {/* Logo */}
        <Link className="text-2xl font-bold" to="home">
          BodyBest
        </Link>

        {/* Mobile Theme Toggle + Hamburger Menu */}
        <div className="flex items-center gap-4 lg:hidden">
          <button
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
            onClick={toggleTheme}
          >
            {theme === "light" ? (
              <i className="fa-solid fa-moon"></i>
            ) : (
              <i className="fa-regular fa-moon"></i>
            )}
          </button>

          {/* Hamburger Button (Mobile) */}
          <button className="text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden lg:flex space-x-4">
          <Link
            className="hover:text-gray-400 dark:hover:text-gray-300"
            to="home"
          >
            Home
          </Link>
          <Link
            className="hover:text-gray-400 dark:hover:text-gray-300"
            to="movies"
          >
            Movies
          </Link>
          <Link
            className="hover:text-gray-400 dark:hover:text-gray-300"
            to="favourites"
          >
            Favourites
          </Link>
        </div>

        {/* Desktop Theme Toggle & Account */}
        <div className="hidden lg:flex items-center space-x-4">
          <button
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
            onClick={toggleTheme}
          >
            {theme === "light" ? (
              <i className="fa-solid fa-moon"></i>
            ) : (
              <i className="fa-regular fa-moon"></i>
            )}
          </button>

          <Icon />
          <Link
            className="hover:text-gray-400 dark:hover:text-gray-300"
            to="login"
          >
            Login
          </Link>
          <Link
            className="hover:text-gray-400 dark:hover:text-gray-300"
            to="register"
          >
            Register
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="w-full flex flex-col items-center space-y-2 mt-2 lg:hidden">
          <Link
            className="hover:text-gray-400 dark:hover:text-gray-300"
            to="home"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            className="hover:text-gray-400 dark:hover:text-gray-300"
            to="movies"
            onClick={() => setMenuOpen(false)}
          >
            Movies
          </Link>
          <Link
            className="hover:text-gray-400 dark:hover:text-gray-300"
            to="favourites"
            onClick={() => setMenuOpen(false)}
          >
            Favourites
          </Link>
          <Icon />
          <Link
            className="hover:text-gray-400 dark:hover:text-gray-300"
            to="login"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>
          <Link
            className="hover:text-gray-400 dark:hover:text-gray-300"
            to="register"
            onClick={() => setMenuOpen(false)}
          >
            Register
          </Link>
        </div>
      )}
    </nav>
  );
}
