import { FaCheck } from 'react-icons/fa';
import services from '../data/services';
import '../styles/services.css';

export default function Services() {
   return (
      <main className="services-page">
         <section className="services-hero">
            <div className="container">
               <span className="section-label">Our Expertise</span>
               <h1 className="section-title">Professional Accounting Services</h1>
               <p className="section-subtitle">
                  Freelance bookkeeper for USA, Canada, and Australia — QuickBooks, Xero,
                  and Zoho Books. Outsourced accounting with CPA-ready deliverables.
               </p>
            </div>
         </section>

         <section className="section">
            <div className="container">
               {services.map((service) => {
                  const Icon = service.icon;
                  return (
                     <div key={service.id} className="service-detail">
                        <div className="service-detail-visual">
                           <div className="service-detail-icon">
                              <Icon />
                           </div>
                        </div>
                        <div className="service-detail-content">
                           <h3>{service.title}</h3>
                           {service.packageLabel && (
                              <p className="service-detail-package">{service.packageLabel}</p>
                           )}
                           {service.tools?.length > 0 && (
                              <ul className="service-detail-tools" aria-label="Tools">
                                 {service.tools.map((t) => (
                                    <li key={t}>{t}</li>
                                 ))}
                              </ul>
                           )}
                           <p>{service.longDesc}</p>
                           <ul className="feature-list">
                              {service.features.map((feature, idx) => (
                                 <li key={idx}>
                                    <div className="feature-check">
                                       <FaCheck />
                                    </div>
                                    {feature}
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>
                  );
               })}
            </div>
         </section>
      </main>
   );
}
