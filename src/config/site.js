/**
 * Update these values for your live site (or use Vite env vars).
 * VITE_WHATSAPP_PHONE: country + number, no + or spaces, e.g. 919876543210
 * VITE_CALENDLY_URL: full Calendly scheduling link
 */
export const SITE = {
   whatsappPhone:
      import.meta.env.VITE_WHATSAPP_PHONE?.replace(/\D/g, '') || '911234567890',
   /** Full scheduling URL, e.g. https://calendly.com/your-name/30min */
   calendlyUrl: import.meta.env.VITE_CALENDLY_URL?.trim() || '',
};

export function whatsappHref(message = '') {
   const text = encodeURIComponent(message);
   return `https://wa.me/${SITE.whatsappPhone}${text ? `?text=${text}` : ''}`;
}
