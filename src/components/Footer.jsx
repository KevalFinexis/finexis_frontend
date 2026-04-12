import {
   FaFacebookF,
   FaInstagram,
   FaLinkedinIn,
   FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo2.png";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Link
              to="/"
              className="footer-logo"
              aria-label="Finexis Pvt Ltd, home"
            >
              <img
                src={logo}
                alt=""
                className="footer-logo-icon"
                width={48}
                height={48}
              />
              {/* <img src={textLogo} alt="" className="footer-logo-wordmark" /> */}
              <span className="footer-logo-text">Finexis</span>
              <span className="footer-logo-text">Global</span>
            </Link>
            <p>
              Outsourced bookkeeping and accounting for US, Canada &amp;
              Australia — QuickBooks, Xero &amp; Zoho Books. Data
              confidentiality assured.
            </p>
            <div className="footer-socials">
              <a href="#" className="footer-social-link" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="#" className="footer-social-link" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="footer-social-link" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" className="footer-social-link" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4>Services</h4>
            <Link to="/services">Bookkeeping (QBO / Xero)</Link>
            <Link to="/services">Payroll (US / CA / AU)</Link>
            <Link to="/services">Tax prep support</Link>
            <Link to="/services">Bank &amp; card reconciliation</Link>
            <Link to="/services">Financial reporting</Link>
            <Link to="/services">AR &amp; AP</Link>
          </div>

          {/* Company */}
          <div className="footer-col">
            <h4>Company</h4>
            <Link to="/about">About Us</Link>
            <Link to="/services">Our Services</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/contact">Careers</Link>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Get in Touch</h4>
            <a href="mailto:kevaljagal.finexisglobal@gmail.com">
              kevaljagal.finexisglobal@gmail.com
            </a>
            <a href="tel:+917984422579">+917984422579</a>
            <span>Ahmedabad, Gujarat, India</span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            &copy; {new Date().getFullYear()} Finexis Pvt Ltd. All rights
            reserved.
          </span>
          <div>
            <Link to="/">Privacy Policy</Link>
            &nbsp;&nbsp;·&nbsp;&nbsp;
            <Link to="/">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
