import {
   FaClock,
   FaEnvelope,
   FaLock,
   FaMapMarkerAlt,
   FaPhoneAlt,
   FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import { SITE, whatsappHref } from "../config/site";
import "../styles/contact.css";

const consultMessage =
  "Hi, I would like to book a free consultation for bookkeeping / accounting support.";

export default function Contact() {
  const showCalendlyEmbed = Boolean(SITE.calendlyUrl);

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <span className="section-label">Connect With Us</span>
          <h1 className="section-title">Get in Touch</h1>
          <p className="section-subtitle">
            Book a free 30-minute consultation, request a quote, or message on
            WhatsApp. Average response within one business day — timezone
            flexibility for US, Canada, and Australia.
          </p>
        </div>
      </section>

      <section className="section contact-quick-actions">
        <div className="container">
          <div className="contact-action-cards">
            <a
              className="contact-action-card contact-action-whatsapp"
              href={whatsappHref(consultMessage)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp aria-hidden />
              <div>
                <h3>WhatsApp</h3>
                <p>Fast questions and scheduling — tap to chat.</p>
              </div>
            </a>
            {showCalendlyEmbed ? (
              <a
                className="contact-action-card contact-action-calendly"
                href={SITE.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaClock aria-hidden />
                <div>
                  <h3>Book a call</h3>
                  <p>Open Calendly and pick a time that works.</p>
                </div>
              </a>
            ) : (
              <div className="contact-action-card contact-action-calendly contact-action-placeholder">
                <FaClock aria-hidden />
                <div>
                  <h3>Calendly</h3>
                  <p>
                    Add your scheduling link in{" "}
                    <code className="contact-code">VITE_CALENDLY_URL</code> (see{" "}
                    <code className="contact-code">.env.example</code>) to show
                    a live button here.
                  </p>
                </div>
              </div>
            )}
            <Link
              to="/#consultation"
              className="contact-action-card contact-action-lead"
            >
              <FaLock aria-hidden />
              <div>
                <h3>Lead magnet</h3>
                <p>
                  Free consultation or sample report layout — details on the
                  homepage.
                </p>
              </div>
            </Link>
          </div>

          <ul className="contact-trust-row" aria-label="Trust">
            <li>
              <FaLock aria-hidden /> Data confidentiality assured
            </li>
            <li>
              <FaLock aria-hidden /> Secure handling of financial data
            </li>
            <li>
              <FaClock aria-hidden /> US / Canada / Australia time windows
            </li>
          </ul>
        </div>
      </section>

      {showCalendlyEmbed && (
        <section
          className="section contact-calendly-section"
          id="book-call"
          aria-label="Schedule"
        >
          <div className="container">
            <h2 className="contact-calendly-heading">Schedule with Calendly</h2>
            <p className="contact-calendly-intro">
              Pick a slot below or{" "}
              <a
                href={SITE.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                open Calendly in a new tab
              </a>
              .
            </p>
            <div className="contact-calendly-frame-wrap">
              <iframe
                title="Calendly scheduling"
                src={SITE.calendlyUrl}
                className="contact-calendly-iframe"
              />
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container contact-grid">
          <ContactForm />

          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>
              Use the form for structured enquiries (including service type). We
              treat all financial details as confidential.
            </p>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4>Our Office</h4>
                <p>123 Finance Tower, BKC, Mumbai, Maharashtra 400051</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <FaPhoneAlt />
              </div>
              <div>
                <h4>Phone Number</h4>
                <p>+917984422579</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <FaEnvelope />
              </div>
              <div>
                <h4>Email Address</h4>
                <p>kevaljagal.finexisglobal@gmail.com</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <FaClock />
              </div>
              <div>
                <h4>Working Hours</h4>
                <p>
                  Monday - Friday: 9:00 AM - 6:00 PM (IST) — flexible overlap
                  for US / CA / AU
                </p>
              </div>
            </div>

            <div className="contact-map">
              <span>[ Interactive Map Area ]</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
