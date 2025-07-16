import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import logo from "../images/Logo.png";
import { useState } from "react";
// import { LanguageContext } from "../context/LanguageContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const [menuOpen, setMenuOpen] = useState(false);
  // const { setLanguage } = useContext(LanguageContext);

  const handleClick = () => {
    logout();
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // const handleLanguageChange = (e) => {
  //   setLanguage(e.target.value);
  //   setMenuOpen(false);
  // };

  return (
    <div className="navbar">
      {/* Logo */}
      <div className="nav-title">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="logo-image"
            style={{ width: "230px", height: "auto", cursor: "pointer" }}
          />
        </Link>
      </div>

      {/* Menu Icon for Mobile */}
      <div className="menu-icon" onClick={toggleMenu}>
        <span
          className="material-symbols-outlined"
          style={{ fontSize: "36px", cursor: "pointer" }}
          translate="no"
          aria-hidden="true"
        >
          menu
        </span>
      </div>

      {/* Desktop / Mobile Nav */}
      <nav className={`abc ${menuOpen ? "open" : ""}`}>
        <div className="nav-item">
          <Link
            to="/plant-info"
            className="nav-link plant-link"
            onClick={() => setMenuOpen(false)}
          >
            Plant Info
          </Link>
        </div>

        {!user && (
          <div className="nav-item">
            <Link
              to="/login"
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        )}

        <div className="nav-item">
          <Link
            to="/about"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>
        </div>

        {/* <select value={language} onChange={handleLanguageChange} className="language-select">
            {Object.entries(supportedLanguages).map(([code, name]) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select> */}

        {user && (
          <div className="nav-item">
            <span className="user-info">
              <span className="greetingsText">Welcome </span>
              <span className="userIdText">
                {user.email.replace(/@gmail\.com$/, "")}
              </span>
            </span>
            <button
              className="logout-button"
              onClick={() => {
                handleClick();
                setMenuOpen(false);
              }}
            >
              Log Out
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
