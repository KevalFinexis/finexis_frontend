import { useState } from 'react';
import useAppStore from '../store/useAppStore';
import services from '../data/services';
import '../styles/contact.css';

const serviceChoices = [
   { value: '', label: 'Service required (select)' },
   ...services.map((s) => ({ value: s.id, label: s.title })),
   { value: 'other', label: 'Other / multiple services' },
];

export default function ContactForm() {
   const { contactStatus, submitContactForm } = useAppStore();
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      service: '',
      subject: '',
      message: '',
   });

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      submitContactForm(formData);
      setFormData({ name: '', email: '', service: '', subject: '', message: '' });
   };

   if (contactStatus === 'success') {
      return (
         <div className="contact-form-wrapper">
            <div className="form-success">
               <h3>Message Sent!</h3>
               <p>Thank you for reaching out. Our team will contact you shortly.</p>
            </div>
         </div>
      );
   }

   return (
      <div className="contact-form-wrapper">
         <h3>Send us a Message</h3>
         <p className="contact-form-lead">
            Name, email, and the service you need help with — we will reply with next steps.
         </p>
         <form onSubmit={handleSubmit}>
            <div className="form-row">
               <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                     type="text"
                     id="name"
                     name="name"
                     className="form-control"
                     placeholder="John Doe"
                     value={formData.name}
                     onChange={handleChange}
                     required
                  />
               </div>
               <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                     type="email"
                     id="email"
                     name="email"
                     className="form-control"
                     placeholder="john@example.com"
                     value={formData.email}
                     onChange={handleChange}
                     required
                  />
               </div>
            </div>
            <div className="form-group">
               <label htmlFor="service">Service required</label>
               <select
                  id="service"
                  name="service"
                  className="form-control form-select"
                  value={formData.service}
                  onChange={handleChange}
                  required
               >
                  {serviceChoices.map((opt) => (
                     <option key={opt.value || 'empty'} value={opt.value}>
                        {opt.label}
                     </option>
                  ))}
               </select>
            </div>
            <div className="form-group">
               <label htmlFor="subject">Subject</label>
               <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-control"
                  placeholder="e.g. Free consultation, sample report, quote"
                  value={formData.subject}
                  onChange={handleChange}
                  required
               />
            </div>
            <div className="form-group">
               <label htmlFor="message">Message</label>
               <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  placeholder="Tell us about your requirements, software (QuickBooks / Xero / Zoho), and time zone..."
                  value={formData.message}
                  onChange={handleChange}
                  required
               ></textarea>
            </div>
            <button
               type="submit"
               className="btn btn-dark form-submit"
               disabled={contactStatus === 'sending'}
            >
               {contactStatus === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
         </form>
      </div>
   );
}
