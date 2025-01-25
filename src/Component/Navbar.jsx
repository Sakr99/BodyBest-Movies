import { Link } from "react-router-dom";
import Icon from "./Icon";
import { useContext } from "react";
import { ThemeContext } from "./Context/GlobalContext";
export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${theme} text-${theme} bg-${theme}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="home">
            BodyBest
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="movies">
                  Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="favourites">
                  Favourites
                </Link>
              </li>
              <button
                className="changeColor btn btn-secondary rounded-circle mx-auto"
                onClick={toggleTheme}
              >
                {theme === "light" ? (
                  <i className="fa-solid fa-moon"></i>
                ) : (
                  <i className="fa-regular fa-moon"></i>
                )}
              </button>
            </ul>
            <ul className="navbar-nav mb-lg-0">
              <div className="btn-group dropstart">
                <button
                  type="button"
                  className="btn btn-secondary dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa fa-language " aria-hidden="true"></i>
                </button>
                <ul className="dropdown-menu mx-auto">
                  <li>
                    <Link className="dropdown-item" to="home-ar">
                      Arabic
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="home-en">
                      English
                    </Link>
                  </li>
                </ul>
              </div>

              <Icon />
              <li className="nav-item">
                <Link className="nav-link" to="login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="register">
                  Register
                </Link>
              </li>
              <span className="nav-link">Logout</span>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
