import { FaArrowRight, FaCalendarCheck, FaFileAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/hero.css';

export default function HeroSection() {
   return (
      <section className="hero" id="hero">
         <div className="container hero-content">
            <div className="hero-badge">
               <span className="hero-badge-dot" />
               Freelance bookkeeper · USA, Canada &amp; Australia
            </div>

            <h1>
               Reliable Accounting &amp; Bookkeeping for{' '}
               <span className="highlight">US, Canadian &amp; Australian</span>{' '}
               Businesses
            </h1>

            <p className="hero-lead">
               Helping businesses save time, reduce errors, and stay tax-compliant with
               outsourced bookkeeping, payroll support, and CPA-ready reporting —{' '}
               <strong>QuickBooks</strong>, <strong>Xero</strong>, and{' '}
               <strong>Zoho Books</strong>.
            </p>

            <p className="hero-seo-line">
               Outsourced accounting from India · QuickBooks expert · US &amp; international
               client communication
            </p>

            <div className="hero-actions">
               <Link to="/contact" className="btn btn-primary">
                  <FaCalendarCheck /> Book free consultation
               </Link>
               <Link to="/contact" className="btn btn-outline">
                  Get a quote <FaArrowRight />
               </Link>
            </div>

            <div className="hero-lead-magnet">
               <FaFileAlt aria-hidden />
               <div>
                  <strong>Free 30-minute consultation</strong> — or request a{' '}
                  <Link to="/contact">sample bookkeeping report layout</Link> to see how we
                  package your files.
               </div>
            </div>

            <ul className="hero-trust-inline" aria-label="Trust highlights">
               <li>Data confidentiality assured</li>
               <li>Secure handling of financial data</li>
               <li>Timezone flexibility (US / Canada / Australia)</li>
            </ul>
         </div>

         <div className="hero-stats" aria-hidden="false">
            <div className="hero-stat-card">
               <div className="hero-stat-number">3.5+</div>
               <div className="hero-stat-label">Years US / CA / AU focus</div>
            </div>
            <div className="hero-stat-card">
               <div className="hero-stat-number">3</div>
               <div className="hero-stat-label">Regions: US · Canada · Australia</div>
            </div>
            <div className="hero-stat-card">
               <div className="hero-stat-number">24h</div>
               <div className="hero-stat-label">Typical response window</div>
            </div>
         </div>
      </section>
   );
}
