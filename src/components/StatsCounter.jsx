import useScrollReveal from '../hooks/useScrollReveal';
import '../styles/stats.css';

const stats = [
   { number: '3.5+', label: 'Years in US / CA / AU accounting' },
   { number: '100%', label: 'Confidentiality-first workflows' },
   { number: '3', label: 'Core platforms: QBO, Xero, Zoho' },
   { number: 'Fast', label: 'Turnaround on recurring close tasks' },
];

export default function StatsCounter() {
   const ref = useScrollReveal();

   return (
      <section className="stats-section" ref={ref}>
         <div className="container">
            <div className="stats-grid">
               {stats.map((stat) => (
                  <div className="stat-item" key={stat.label}>
                     <div className="stat-number">{stat.number}</div>
                     <div className="stat-label">{stat.label}</div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
