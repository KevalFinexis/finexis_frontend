import { create } from 'zustand';

const useAppStore = create((set) => ({
   /* ── Navigation ── */
   isMobileMenuOpen: false,
   toggleMobileMenu: () =>
      set((s) => ({ isMobileMenuOpen: !s.isMobileMenuOpen })),
   closeMobileMenu: () => set({ isMobileMenuOpen: false }),

   /* ── Contact form ── */
   contactStatus: 'idle', // 'idle' | 'sending' | 'success' | 'error'
   setContactStatus: (status) => set({ contactStatus: status }),

   submitContactForm: (formData) => {
      set({ contactStatus: 'sending' });
      // Simulate API call
      setTimeout(() => {
         console.log('Contact form submitted:', formData);
         set({ contactStatus: 'success' });
         setTimeout(() => set({ contactStatus: 'idle' }), 4000);
      }, 1500);
   },
}));

export default useAppStore;
