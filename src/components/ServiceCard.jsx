/* eslint-disable react/prop-types -- data shape from static services config */
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';

export default function ServiceCard({ service }) {
   const ref = useScrollReveal();
   const Icon = service.icon;

   return (
      <div className="service-card reveal" ref={ref}>
         <div className="service-card-icon">
            <Icon />
         </div>
         <h3>{service.title}</h3>
         {service.packageLabel && (
            <p className="service-card-package">{service.packageLabel}</p>
         )}
         <p>{service.shortDesc}</p>
         {service.tools?.length > 0 && (
            <ul className="service-card-tools" aria-label="Software and tools">
               {service.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
               ))}
            </ul>
         )}
         <Link to="/services" className="service-card-link">
            Learn more <FaArrowRight />
         </Link>
      </div>
   );
}
