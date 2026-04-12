import {
   FaBookOpen,
   FaChartLine,
   FaFileInvoiceDollar,
   FaHandshake,
   FaMoneyCheckAlt,
   FaUniversity,
} from 'react-icons/fa';

const services = [
   {
      id: 'bookkeeping',
      title: 'Bookkeeping',
      packageLabel: 'QuickBooks, Xero & Zoho Books',
      icon: FaBookOpen,
      shortDesc:
         'Day-to-day books, clean categorization, and month-end close — on the software you already use.',
      longDesc:
         'We maintain your general ledger in QuickBooks, Xero, or Zoho Books: bank feeds, categorization, adjustments, and reconciliations so your numbers stay audit-ready. You get consistent monthly close and clear communication with your CPA.',
      tools: ['QuickBooks', 'Xero', 'Zoho Books'],
      features: [
         'Chart of accounts & cleanup',
         'Transaction coding & journal entries',
         'Month-end close support',
         'Documented processes for handoff',
         'CPA-ready file exports',
      ],
   },
   {
      id: 'payroll',
      title: 'Payroll Processing',
      packageLabel: 'United States · Canada · Australia',
      icon: FaMoneyCheckAlt,
      shortDesc:
         'Multi-country payroll support with compliance-focused workflows for US, Canada, and Australia.',
      longDesc:
         'We support payroll preparation, tax withholding awareness, and pay-run documentation aligned with your provider and local rules. Ideal for firms that need reliable offshore support with clear checklists and deadlines.',
      tools: ['QuickBooks Payroll', 'Xero Payroll', 'Leading payroll platforms'],
      features: [
         'Pay-run preparation & review',
         'Deductions & benefits tracking',
         'Payslip & register checks',
         'Compliance calendar alignment',
         'US / Canada / Australia workflows',
      ],
   },
   {
      id: 'tax-preparation',
      title: 'Tax Preparation Support',
      packageLabel: 'Outsourced prep for firms & businesses',
      icon: FaFileInvoiceDollar,
      shortDesc:
         'Organized workpapers, reconciliations, and schedules so tax season runs smoothly.',
      longDesc:
         'We prepare supporting schedules, tie-outs, and year-end packages — ideal for CPA firms and businesses that need extra capacity without sacrificing quality. We work to your review process and filing calendar.',
      tools: ['QuickBooks', 'Xero', 'Excel / Google Sheets'],
      features: [
         'Year-end tie-outs & adjustments',
         'Sales / GST documentation support',
         'Workpaper preparation',
         'Prior-year variance notes',
         'Reviewer-friendly packaging',
      ],
   },
   {
      id: 'bank-reconciliation',
      title: 'Bank & Credit Card Reconciliation',
      packageLabel: 'Multi-account, high volume',
      icon: FaUniversity,
      shortDesc:
         'Fast, accurate matching for bank and card accounts — including high transaction volume.',
      longDesc:
         'We reconcile all operating and card accounts, resolve uncleared items, and flag anomalies early. You receive clear exception lists and month-end sign-off packages.',
      tools: ['QuickBooks', 'Xero', 'Zoho Books'],
      features: [
         'Bank & credit card matching',
         'Outstanding item tracking',
         'Duplicate & anomaly review',
         'Month-end reconciliation reports',
         'Multi-entity & multi-currency aware',
      ],
   },
   {
      id: 'financial-reporting',
      title: 'Financial Reporting',
      packageLabel: 'P&L, Balance Sheet, Cash flow views',
      icon: FaChartLine,
      shortDesc:
         'Management-ready P&L, balance sheet, and custom views for owners and advisors.',
      longDesc:
         'We produce accurate period reports, class or location splits where needed, and commentary-friendly layouts so leadership and CPAs can act quickly.',
      tools: ['QuickBooks', 'Xero', 'Zoho Books', 'Excel'],
      features: [
         'P&L and balance sheet packages',
         'Comparative & budget vs actual',
         'Class / department reporting',
         'Cash flow summaries',
         'Board or investor-ready exports',
      ],
   },
   {
      id: 'ar-ap',
      title: 'AR & AP Specialist',
      packageLabel: 'Cash flow operations',
      icon: FaHandshake,
      shortDesc:
         'Invoices, vendor bills, payment runs, and ageing — so cash stays predictable.',
      longDesc:
         'End-to-end accounts receivable and payable: invoicing, collections touchpoints, bill entry, payment scheduling, and ageing analysis. We align with your approval workflow.',
      tools: ['QuickBooks', 'Xero', 'Zoho Books'],
      features: [
         'Invoice creation & dispatch',
         'Vendor bill entry & 3-way match',
         'Payment batch preparation',
         'AR / AP ageing reports',
         'Vendor & customer statement support',
      ],
   },
];

export default services;
