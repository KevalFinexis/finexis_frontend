import {
   FaBriefcase,
   FaBuilding,
   FaComments,
   FaGlobeAmericas,
   FaLock,
   FaRocket,
   FaShoppingCart,
   FaUserTie,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import StatsCounter from '../components/StatsCounter';
import TestimonialCard from '../components/TestimonialCard';
import services from '../data/services';
import '../styles/services.css';
import '../styles/testimonial.css';
import '../styles/home-sections.css';

const testimonials = [
   {
      name: 'James M.',
      role: 'Former employer · Finance controller, US SaaS company',
      text: 'Exceptional attention to detail on month-end close and payroll tie-outs. Communication across time zones was clear and dependable — I would trust them with sensitive books again.',
   },
   {
      name: 'Priya S.',
      role: 'Colleague · Senior accountant, outsourcing team',
      text: 'Strong technical skills in QuickBooks Online and Xero, and a calm approach when deadlines stack up. They stepped up as a team lead and kept quality consistent for the whole pod.',
   },
   {
      name: 'Alex R.',
      role: 'CPA firm partner (sample engagement profile)',
      text: 'We needed capacity for bookkeeping and reconciliation during tax season. Deliverables were structured for review, and backlog cleared faster than we expected — roughly an 80% reduction in open items within the first two cycles (illustrative result; yours will vary).',
   },
];

const audience = [
   {
      title: 'CPA & accounting firms',
      icon: FaUserTie,
      text: 'White-label bookkeeping, prep support, and reconciliation bandwidth during peak season.',
   },
   {
      title: 'Small businesses',
      icon: FaBuilding,
      text: 'Owners who want clean books, predictable close, and fewer surprises at year-end.',
   },
   {
      title: 'Startups',
      icon: FaRocket,
      text: 'Lean finance ops: scalable processes from seed stage through growth.',
   },
   {
      title: 'E-commerce',
      icon: FaShoppingCart,
      text: 'Multi-channel sales, payouts, fees, and inventory-related accounting support.',
   },
];

const whyChoose = [
   {
      title: '3.5+ years US, Canada & Australia accounting',
      icon: FaGlobeAmericas,
      text: 'Focused experience with North American and Australian clients, terminology, and common software stacks.',
   },
   {
      title: 'Team leadership background',
      icon: FaBriefcase,
      text: 'Past team lead responsibilities — quality checks, coaching, and reliable delivery under pressure.',
   },
   {
      title: 'Clear international communication',
      icon: FaComments,
      text: 'Written and verbal English for daily updates, exception lists, and month-end sign-off.',
   },
   {
      title: 'Fast turnaround on recurring work',
      icon: FaRocket,
      text: 'Predictable SLAs for bookkeeping tasks, reconciliations, and reporting packages.',
   },
   {
      title: 'Affordable offshore value',
      icon: FaBuilding,
      text: 'Flexible engagement models so you pay for outcomes, not overhead.',
   },
   {
      title: 'Security-minded workflows',
      icon: FaLock,
      text: 'Confidentiality agreements, least-access principles, and careful handling of financial data.',
   },
];

const caseStudies = [
   {
      type: 'US CPA firm',
      title: 'Seasonal bookkeeping surge',
      work: 'Monthly bookkeeping, bank and credit card reconciliation, and reviewer-ready workpapers.',
      result: 'Illustrative: cleared a multi-month backlog and reduced open reconciliation items by about 80% within eight weeks (sample profile).',
   },
   {
      type: 'E-commerce · Canada',
      title: 'Payouts & fee reconciliation',
      work: 'Mapped sales channels to deposits, fee coding, and month-end P&L slices for the owner.',
      result: 'Illustrative: cut month-end close time with a repeatable checklist and channel-level reporting (sample profile).',
   },
   {
      type: 'Small business · Australia',
      title: 'Xero cleanup + payroll support',
      work: 'Historical cleanup, payroll review support, and BAS-ready categorization in Xero.',
      result: 'Illustrative: restored confidence in live balances and standardized monthly close (sample profile).',
   },
];

export default function Home() {
   return (
      <main>
         <HeroSection />

         <div className="trust-strip">
            <div className="container trust-strip-inner">
               <span>
                  <FaLock aria-hidden />
                  Data confidentiality assured
               </span>
               <span>
                  <FaLock aria-hidden />
                  Secure handling of financial data
               </span>
               <span>
                  <FaGlobeAmericas aria-hidden />
                  Timezone flexibility (US / Canada / Australia)
               </span>
            </div>
         </div>

         <section className="section services-section">
            <div className="container">
               <div className="text-center">
                  <span className="section-label">Service packages</span>
                  <h2 className="section-title">What we deliver — with the tools clients trust</h2>
                  <p className="section-subtitle mx-auto">
                     Freelance bookkeeper for USA businesses, outsourced accounting from India, and
                     CPA-ready support — built around QuickBooks, Xero, and Zoho Books.
                  </p>
               </div>

               <div className="services-grid">
                  {services.map((service) => (
                     <ServiceCard key={service.id} service={service} />
                  ))}
               </div>
            </div>
         </section>

         <section className="section audience-section" id="clients">
            <div className="container">
               <div className="text-center">
                  <span className="section-label">Who I work with</span>
                  <h2 className="section-title">Built for teams that need reliable offshore accounting</h2>
                  <p className="section-subtitle mx-auto">
                     Whether you run a firm or a growing company, the goal is the same: accurate books,
                     clear communication, and files your advisors can trust.
                  </p>
               </div>
               <div className="audience-grid">
                  {audience.map((item) => (
                     <div className="audience-card" key={item.title}>
                        <div className="audience-card-icon">
                           <item.icon aria-hidden />
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         <section className="section why-me-section" id="why-me">
            <div className="container">
               <div className="text-center">
                  <span className="section-label">Why choose me</span>
                  <h2 className="section-title">Answers to what overseas clients usually ask</h2>
                  <p className="section-subtitle mx-auto">
                     Experience, communication, and process — so you are not guessing what happens
                     behind the scenes.
                  </p>
               </div>
               <div className="why-me-grid">
                  {whyChoose.map((item) => (
                     <div className="why-me-card" key={item.title}>
                        <h3>
                           <item.icon aria-hidden />
                           {item.title}
                        </h3>
                        <p>{item.text}</p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         <StatsCounter />

         <section className="section case-studies-section" id="work">
            <div className="container">
               <div className="text-center">
                  <span className="section-label">Results &amp; work samples</span>
                  <h2 className="section-title">Mini case studies (illustrative profiles)</h2>
                  <p className="section-subtitle mx-auto">
                     Structured like real engagements — anonymized where needed. Replace with your own
                     metrics as you complete projects.
                  </p>
               </div>
               <div className="case-studies-grid">
                  {caseStudies.map((c) => (
                     <article className="case-study-card" key={c.title}>
                        <div className="case-study-meta">Client type: {c.type}</div>
                        <h3>{c.title}</h3>
                        <dl>
                           <div className="case-study-block">
                              <dt>Work</dt>
                              <dd>{c.work}</dd>
                           </div>
                           <div className="case-study-block">
                              <dt>Result</dt>
                              <dd>{c.result}</dd>
                           </div>
                        </dl>
                        <p className="case-study-note">
                           Sample narrative for portfolio use — not an endorsement from a named client.
                        </p>
                     </article>
                  ))}
               </div>
            </div>
         </section>

         <section className="section testimonials-section">
            <div className="container">
               <div className="text-center">
                  <span className="section-label">Testimonials</span>
                  <h2 className="section-title">References from employers &amp; colleagues</h2>
                  <p className="section-subtitle mx-auto">
                     Social proof matters. Even one or two strong references beats a silent portfolio —
                     swap in your real names and roles when you have permission.
                  </p>
               </div>

               <div className="testimonials-grid">
                  {testimonials.map((t, i) => (
                     <TestimonialCard key={i} testimonial={t} />
                  ))}
               </div>
            </div>
         </section>

         <section className="pricing-lead-section" id="consultation">
            <div className="container pricing-lead-inner">
               <div>
                  <h2>Pricing that invites a conversation</h2>
                  <p>
                     Many clients prefer a short scope call before numbers. Here is a transparent
                     starting point — final rates depend on volume, systems, and deadlines.
                  </p>
                  <div className="pricing-tag">Starting from $8/hour</div>
                  <p className="pricing-sub">Flexible monthly packages available for ongoing bookkeeping.</p>
                  <div className="pricing-lead-actions">
                     <Link to="/contact" className="btn btn-primary">
                        Book free consultation
                     </Link>
                     <Link to="/contact" className="btn btn-outline">
                        Get a quote
                     </Link>
                  </div>
               </div>
               <div className="lead-magnet-box">
                  <h3>Lead magnet: free consultation &amp; sample report</h3>
                  <p>
                     Book a free 30-minute consultation to align on tools and workflow — or request a
                     sample bookkeeping report layout (P&amp;L / balance sheet package) to see deliverable
                     quality.
                  </p>
                  <ul>
                     <li>Free 30-min consultation — scope, tools, and handoff</li>
                     <li>Optional sample report structure (no client data)</li>
                     <li>QuickBooks expert walkthrough of your ideal stack</li>
                  </ul>
                  <Link to="/contact" className="btn btn-primary" style={{ marginTop: 'var(--sp-4)' }}>
                     Request via contact form
                  </Link>
               </div>
            </div>
         </section>

         <section className="section" style={{ paddingBottom: 'var(--sp-16)' }}>
            <div className="container">
               <p className="seo-keywords">
                  <strong>SEO keywords:</strong> freelance bookkeeper for USA, outsourced accounting
                  India, QuickBooks expert, Xero bookkeeper, Zoho Books accountant, offshore bookkeeping
                  US Canada Australia, CPA firm bookkeeping support, e-commerce bookkeeping services.
               </p>
            </div>
         </section>
      </main>
   );
}
