import { Link } from "react-router-dom";
import Logo from "../Logo";

import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <Logo />
      </Link>
      <div className="white-line"></div>
      <nav className="nav">
        <Link to="/">
          <span>00</span> Home
        </Link>
        <Link to="/destination">
          <span>01</span> Destination
        </Link>
        <Link to="/crew">
          <span>02</span> Crew
        </Link>
        <Link to="/technology">
          <span>03</span> Technology
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
