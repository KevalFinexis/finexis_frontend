import { FaAward, FaLightbulb, FaUsers } from "react-icons/fa";
import "../styles/about.css";

const values = [
  {
    title: "Integrity",
    icon: <FaAward />,
    desc: "We uphold the highest ethical standards in all our financial dealings and advice.",
  },
  {
    title: "Innovation",
    icon: <FaLightbulb />,
    desc: "Leveraging modern tools and methods to provide faster, more accurate insights.",
  },
  {
    title: "Client Focus",
    icon: <FaUsers />,
    desc: "Your success is our priority. We tailor every solution to your business's specific needs.",
  },
];

export default function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="container">
          <span className="section-label">Our Story</span>
          <h1 className="section-title">Pioneering Financial Excellence</h1>
          <p className="section-subtitle">
            Deep experience supporting US, Canadian, and Australian clients with
            outsourced bookkeeping, payroll support, and CPA-ready reporting —
            combining offshore efficiency with clear communication.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-story">
          <div className="about-story-visual">
            <div className="about-story-logo">Finexis</div>
          </div>
          <div className="about-story-text">
            <h3>More than just numbers.</h3>
            <p>
              We believe that accounting is the foundation of every successful
              enterprise. Our specialists bring years of combined experience in
              tax, payroll, and financial management for US, Canadian, and
              Australian clients — so you build on solid books.
            </p>
            <p>
              Based in Mumbai, we serve clients across time zones with
              confidentiality-first workflows and tools clients already trust:
              QuickBooks, Xero, and Zoho Books.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Our Values</span>
            <h2 className="section-title">What Drives Us</h2>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div className="value-card" key={i}>
                <div className="value-icon">{v.icon}</div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Why Choose Us</span>
            <h2 className="section-title">The Finexis Advantage</h2>
          </div>
          <div className="why-grid">
            <div className="why-item">
              <div className="why-number">01</div>
              <div>
                <h4>Expert Specialists</h4>
                <p>
                  Our team consists of certified professionals with deep
                  industry knowledge.
                </p>
              </div>
            </div>
            <div className="why-item">
              <div className="why-number">02</div>
              <div>
                <h4>Advanced Technology</h4>
                <p>
                  We use state-of-the-art software for processing and security.
                </p>
              </div>
            </div>
            <div className="why-item">
              <div className="why-number">03</div>
              <div>
                <h4>Tailored Solutions</h4>
                <p>
                  No two businesses are alike; we customise our services to fit
                  your scale.
                </p>
              </div>
            </div>
            <div className="why-item">
              <div className="why-number">04</div>
              <div>
                <h4>Peace of Mind</h4>
                <p>
                  Compliance and accuracy are guaranteed so you can sleep easy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
