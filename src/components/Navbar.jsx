import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo2.png";
import textLogo from "../assets/text_logo.png";
import useAppStore from "../store/useAppStore";
import "../styles/navbar.css";

export default function Navbar() {
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useAppStore();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = ({ isActive }) => (isActive ? "active" : "");

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="container nav-bar-inner">
        <Link
          to="/"
          className="nav-logo"
          onClick={closeMobileMenu}
          aria-label="Finexis Global, home"
        >
          <img
            src={logo}
            alt=""
            className="nav-logo-icon"
            width={80}
            height={80}
          />
          <img src={textLogo} alt="" className="nav-logo-wordmark" />
        </Link>

        <div className={`nav-links${isMobileMenuOpen ? " open" : ""}`}>
          <NavLink to="/" className={linkClass} onClick={closeMobileMenu} end>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass} onClick={closeMobileMenu}>
            About
          </NavLink>
          <NavLink
            to="/services"
            className={linkClass}
            onClick={closeMobileMenu}
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={linkClass}
            onClick={closeMobileMenu}
          >
            Contact
          </NavLink>
          <Link
            to="/contact"
            className="btn btn-primary nav-cta nav-cta--menu"
            onClick={closeMobileMenu}
          >
            Book free consultation
          </Link>
        </div>

        <div className="nav-actions">
          <Link
            to="/contact"
            className="btn btn-primary nav-cta nav-cta--bar"
            onClick={closeMobileMenu}
          >
            Book free consultation
          </Link>
          <button
            className={`nav-toggle${isMobileMenuOpen ? " open" : ""}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
}
