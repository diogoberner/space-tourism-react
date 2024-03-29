import { Link, useLocation } from "react-router-dom";
import Logo from "../Logo";

import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <header className="header">
      <Link to="/" className="logo">
        <Logo />
      </Link>
      <div className="white-line"></div>
      <nav className="nav">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          <span>00</span> Home
        </Link>
        <Link
          to="/destination"
          className={location.pathname === "/destination" ? "active" : ""}
        >
          <span>01</span> Destination
        </Link>
        <Link
          to="/crew"
          className={location.pathname === "/crew" ? "active" : ""}
        >
          <span>02</span> Crew
        </Link>
        <Link
          to="/technology"
          className={location.pathname === "/technology" ? "active" : ""}
        >
          <span>03</span> Technology
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
