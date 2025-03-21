import { Link } from "react-router-dom";
import Icon from "./Icon";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./Context/GlobalContext";
import logo from "../assets/4d3d246bcbf144faa10a2806021391bc-free.png"
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
        <Link
          className="text-2xl font-bold flex items-center gap-4 hover:text-gray-400"
          to="home"
        >
          <img className="w-16" src={logo} alt="BodyBestLogo" />
          BodyBest
        </Link>

        {/* Mobile Theme Toggle + Hamburger Menu */}
        <div className="flex items-center gap-4 lg:hidden">
          <label className="grid cursor-pointer place-items-center">
            <input
              type="checkbox"
              className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
              checked={theme === "dark"}
              onChange={toggleTheme}
            />
            <svg
              className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>

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
            My Favourites
          </Link>
        </div>

        {/* Desktop Theme Toggle & Account */}
        <div className="hidden lg:flex items-center space-x-4">
          <label className="grid cursor-pointer place-items-center">
            <input
              type="checkbox"
              className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
              checked={theme === "dark"}
              onChange={toggleTheme}
            />
            <svg
              className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>

          <Icon />
          <Link
            className="hover:text-gray-400 dark:hover:text-gray-300"
            to="login"
          >
            Login
          </Link>
          <Link
            className="hover:text-gray-400 dark:hover:text-gray-300"
            to="signIn"
          >
            Sign in
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
            to="signIn"
            onClick={() => setMenuOpen(false)}
          >
            Sign in
          </Link>
        </div>
      )}
    </nav>
  );
}
