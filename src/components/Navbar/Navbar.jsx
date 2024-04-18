import { Link, useLocation } from "react-router-dom";
import Logo from "../Logo";
import Hamburger from "../Hamburger";
import "./Navbar.css";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <header className="header">
      <Link to="/" className="logo">
        <Logo />
      </Link>
      <div className="white-line"></div>
      <nav ref={navRef} className={isOpen === true ? "nav open-nav" : "nav"}>
        <Link
          to="/"
          onClick={() => {
            setIsOpen(false);
          }}
          className={location.pathname === "/" ? "active nav-text" : "nav-text"}
        >
          <span>00</span> Home
        </Link>
        <Link
          to="/destination"
          onClick={() => {
            setIsOpen(false);
          }}
          className={
            location.pathname === "/destination"
              ? "active nav-text"
              : "nav-text"
          }
        >
          <span>01</span> Destination
        </Link>
        <Link
          to="/crew"
          onClick={() => {
            setIsOpen(false);
          }}
          className={
            location.pathname === "/crew" ? "active nav-text" : "nav-text"
          }
        >
          <span>02</span> Crew
        </Link>
        <Link
          to="/technology"
          onClick={() => {
            setIsOpen(false);
          }}
          className={
            location.pathname === "/technology" ? "active nav-text" : "nav-text"
          }
        >
          <span>03</span> Technology
        </Link>
      </nav>
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className={isOpen === true ? "no-hamburger" : "hamburger"}
      >
        <Hamburger />
      </div>
    </header>
  );
};

export default Navbar;
