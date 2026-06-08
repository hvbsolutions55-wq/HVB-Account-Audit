export type Service = {
  id: number;
  slug: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
};

export const services: Service[] = [
  {
    id: 1,
    slug: "fractional-cfo",
    title: "Fractional CFO",
    description:
      "Strategic financial leadership without the cost of a full-time CFO.",
    icon: "LineChart",
    details: [
      "Budgeting & Forecasting",
      "Financial Planning & Analysis",
      "Cash Flow Management",
      "KPIs & Dashboards",
      "Board & Investor Reporting",
      "Treasury Management",
    ],
  },
  {
    id: 2,
    slug: "controller-accounting",
    title: "Controller & Accounting Advisory",
    description:
      "Expert support for financial reporting, controls, and accounting processes.",
    icon: "ClipboardList",
    details: [
      "Month-End Close",
      "Audit Preparation",
      "Financial Reporting Under IFRS and Local GAAP",
      "Consolidation",
      "Drafting of Technical Accounting Memorandum",
      "Transaction Accounting",
      "Technical Accounting",
      "Internal Controls",
      "Chart of Accounts Design",
    ],
  },
  {
    id: 3,
    slug: "staff-accountant",
    title: "Staff Accountant & Financial Operations",
    description:
      "Efficient accounting and operational support for your daily business needs.",
    icon: "Calculator",
    details: [
      "Bookkeeping",
      "Bank Reconciliations",
      "Journal Entries",
      "GL Maintenance",
      "Accounts Payable",
      "Accounts Receivable",
      "Payroll Administration",
      "Inventory Management",
      "Master Data Management",
    ],
  },
  {
    id: 4,
    slug: "corporate-services",
    title: "Corporate Services",
    description:
      "Professional assistance with corporate compliance and administration.",
    icon: "Building2",
    details: [
      "Drafting Board Meeting Minutes",
      "Drafting Shareholder Resolutions",
      "AGM/EGM Documentation",
      "Circular Resolutions",
      "Director Appointment/Resignation Documents",
      "Meeting Notices and Agendas",
      "Convening, Organizing and Attending Board Meetings",
      "Handling of Correspondence",
      "Critical Analysis of Documents",
    ],
  },
  {
    id: 5,
    slug: "audit-support",
    title: "Audit Support Services",
    description:
      "End-to-end support for audit preparation and compliance requirements.",
    icon: "ShieldCheck",
    details: [
      "Audit Working Paper Preparation",
      "Lead Schedule Preparation",
      "Financial Statement Tie-Outs",
      "Account Reconciliations Support",
      "Sampling and Testing Assistance",
      "Bank Confirmation Coordination",
      "Accounts Payable and Receivable Testing",
      "Payroll Audit Support",
      "Fixed Asset Verification Support",
      "Inventory Audit Assistance",
      "Internal Audit and Control Reviews",
      "Risk Assessment and Management",
      "Preparation of Audit File",
    ],
  },
  {
    id: 6,
    slug: "business-advisory-tax",
    title: "Business Advisory & Tax Consulting",
    description:
      "Strategic advice to help your business grow and stay tax compliant.",
    icon: "Briefcase",
    details: [
      "Accounting Software Implementation",
      "Preparation of Corporate Tax Returns",
      "Compilation of Data for Tax Advisors/Lawyers",
      "Budgeting & Forecasting Models",
      "Cash Flow Projections",
      "Business Valuation Models",
      "Investment & Project Analysis",
      "Startup Fundraising Models",
    ],
  },
];

export function getServiceHref(slug: string) {
  return `/services#${slug}`;
}

export const serviceNavItems = [
  { href: "/services", label: "All Services" },
  ...services.map((s) => ({
    href: getServiceHref(s.slug),
    label: s.title,
  })),
];
