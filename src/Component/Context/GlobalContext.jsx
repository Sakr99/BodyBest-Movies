import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { reducer } from "./Reducer";

// Initial state for favourites
const initialState = {
  favourites: JSON.parse(localStorage.getItem("favourites")) || [],
};

// Create GlobalContext
export const GlobalContext = createContext(initialState);

// ContextProvider component
const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Save favourites to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem("favourites", JSON.stringify(state.favourites));
    } catch (error) {
      console.error("Failed to save favourites to localStorage:", error);
    }
  }, [state.favourites]);

  return (
    <GlobalContext.Provider
      value={{ favourites: state.favourites, MoviesDispatch: dispatch }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;

// Custom hook to use GlobalContext
export const useMovieContext = () => {
  return useContext(GlobalContext);
};

// Create ThemeContext
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === "dark" ? "dark" : ""}>{children}</div>
    </ThemeContext.Provider>
  );
};