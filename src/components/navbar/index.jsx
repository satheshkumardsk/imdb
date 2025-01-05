import { NavLink } from "react-router-dom";
import "./style.css";
const NavBar = () => {
  const linkList = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Watchlist",
      path: "/watchlist",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
  return (
    <nav className="navbar-container">
      <div className="nav-left-container">
        <span className="nav-title">IMDB</span>
      </div>
      <div className="nav-right-container">
        <ul className="nav-link-container">
          {linkList.map((link) => (
            <li key={link.name}>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to={link.path}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
