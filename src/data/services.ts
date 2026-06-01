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
      "Budgeting & forecasting",
      "Financial planning & analysis",
      "Cash flow management",
      "KPIs & dashboards",
      "Board & investor reporting",
      "Treasury management",
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
      "Month-end close",
      "Audit preparation",
      "Financial reporting under IFRS and local GAAP",
      "Consolidation",
      "Drafting of technical accounting memorandum",
      "Transaction accounting",
      "Financial reporting",
      "Technical accounting",
      "Internal controls",
      "Chart of accounts design",
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
      "Bank reconciliations",
      "Journal entries",
      "GL maintenance",
      "Accounts payable",
      "Accounts receivable",
      "Payroll administration",
      "Inventory management",
      "Master data management",
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
      "Drafting board meeting minutes",
      "Drafting shareholder resolutions",
      "AGM/EGM documentation",
      "Circular resolutions",
      "Director appointment/resignation documents",
      "Meeting notices and agendas",
      "Convening, organizing and attending board meetings",
      "Handling of correspondence",
      "Critical analysis of documents",
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
      "Audit file preparation support",
      "Audit working paper preparation",
      "Lead schedule preparation",
      "Financial statement tie-outs",
      "Account reconciliations support",
      "Sampling and testing assistance",
      "Bank confirmation coordination",
      "Accounts payable and receivable testing",
      "Payroll audit support",
      "Fixed asset verification support",
      "Inventory audit assistance",
      "Internal audit and control reviews",
      "Risk assessment and management",
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
      "Accounting software implementation",
      "Preparation of corporate tax returns",
      "Compilation of data for tax advisors/lawyers",
      "Budgeting & forecasting models",
      "Cash flow projections",
      "Business valuation models",
      "Investment & project analysis",
      "Startup fundraising models",
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
