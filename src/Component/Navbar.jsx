import { Link } from "react-router-dom";
import Icon from "./Icon";
import { useContext, useEffect } from "react";
import { ThemeContext } from "./Context/GlobalContext";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <nav
      className="flex flex-wrap items-center justify-between p-4 bg-white text-black dark:bg-gray-800 dark:text-white"
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link className="text-2xl font-bold" to="home">
          BodyBest
        </Link>

        <div className="hidden lg:flex space-x-4">
          <Link className="hover:text-gray-400 dark:hover:text-gray-300" to="home">Home</Link>
          <Link className="hover:text-gray-400 dark:hover:text-gray-300" to="movies">Movies</Link>
          <Link className="hover:text-gray-400 dark:hover:text-gray-300" to="favourites">Favourites</Link>
        </div>

        <div className="flex items-center space-x-4">
          <button
            className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
            onClick={toggleTheme}
          >
            {theme === "light" ? (
              <i className="fa-solid fa-moon"></i>
            ) : (
              <i className="fa-regular fa-moon"></i>
            )}
          </button>

    

          <div className="hidden lg:flex space-x-4">
            <Icon />
            <Link className="hover:text-gray-400 dark:hover:text-gray-300" to="login">Login</Link>
            <Link className="hover:text-gray-400 dark:hover:text-gray-300" to="register">Register</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
