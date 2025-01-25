import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { reducer } from "./Reducer";
const initialStete = {
  favourites: localStorage.getItem("favourites")
    ? JSON.parse(localStorage.getItem("favourites"))
    : [],
};

export const GlobalContext = createContext(initialStete);
const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialStete);
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(state.favourites));
  }, [state]);
  return (
    <GlobalContext.Provider
      value={{ favourites: state.favourites, MoviesDispatch: dispatch }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default ContextProvider;
export const useMovieContext = () => {
  return useContext(GlobalContext);
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(`${"dark"}`);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        className={`bg-${theme} text-${theme === "dark" ? "light" : "dark"}`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
