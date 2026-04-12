/* eslint-disable react/prop-types -- testimonial objects are inline on Home */
import '../styles/testimonial.css';

export default function TestimonialCard({ testimonial }) {
   return (
      <div className="testimonial-card">
         <div className="testimonial-quote">“</div>
         <p>{testimonial.text}</p>
         <div className="testimonial-author">
            <div className="testimonial-avatar">
               {testimonial.name.charAt(0)}
            </div>
            <div>
               <h4>{testimonial.name}</h4>
               <span>{testimonial.role}</span>
            </div>
         </div>
      </div>
   );
}
