// js/config/data-store.js

export const serviceData = [
    { 
        cat: "FINANCE", 
        title: "Specialized Logistics-Finance", 
        points: [
            "<strong>Freight Billing & Accuracy:</strong> Billing services for cargo operations ensuring precision.",
            "<strong>Remittance:</strong> Financial transfers necessary for international trade.",
            "<strong>Credit Control:</strong> Tailored measures for the freight industry."
        ] 
    },
    { 
        cat: "OPS", 
        title: "Business Operations", 
        points: [
            "<strong>Dual-Flow Docs:</strong> Delivery orders for air/sea shipments.",
            "<strong>Inventory:</strong> Material and asset management.",
            "<strong>Compliance:</strong> TDS/GST compliance for international trade."
        ] 
    },
    { 
        cat: "CARGO", 
        title: "Execution & Tracking", 
        points: [
            "<strong>Monitoring:</strong> Real-time status updates and handovers.",
            "<strong>IATA/HAWB:</strong> Specialized MAWB bunching and HAWB dispatch.",
            "<strong>Odd-Dimension:</strong> Arranging vehicles for specialized transport."
        ] 
    },
    { 
        cat: "TRUST", 
        title: "Reporting & Controls", 
        points: [
            "<strong>General Ledger:</strong> Record maintenance on Tally Prime.",
            "<strong>Health Reporting:</strong> Cash flow and reconciliation reports.",
            "<strong>Internal Control:</strong> Designing systems for audit readiness."
        ] 
    }
];

export const aboutData = { 
    cat: "ESTABLISHED", 
    title: "About Our Firm", 
    points: [
        "<strong>Foundation:</strong> Satyavrat & Neha Dubey bridging logistics and finance.",
        "<strong>Vision:</strong> High standards in shipment and rupee management.",
        "<strong>Expertise:</strong> M.Com foundation with deep cargo solutions experience."
    ] 
};

export const careersData = { 
    cat: "CAREERS", 
    title: "Join Our Team", 
    points: [
        "<strong>Why Join?</strong> Growth-oriented culture and diverse logistics/finance exposure.",
        "<strong>Hiring:</strong> We value standard of excellence and proactive communication.",
        "<strong>Key Skills:</strong> Software proficiency (Tally/MS-Office) and problem solving."
    ] 
};

export const helpCenterData = {
    cat: "SUPPORT",
    title: "Help Center",
    points: [
        "<strong>How do I track my shipment status?</strong> We provide real-time updates on airline handovers, departures, and delivery timelines.",
        "<strong>What documents are needed for customs?</strong> We guide you through the specific paperwork required for customs, airfreight, and delivery pricing.",
        "<strong>How is billing accuracy ensured?</strong> Every bill is raised based strictly on the services provided and verified daily through our DSR process.",
        "<strong>Can you handle specialized cargo?</strong> Yes, we coordinate and arrange vehicles specifically for odd-dimension shipments.",
        "<strong>What is the process for international payments?</strong> We manage all inward and outward remittances to ensure smooth global trade transactions."
    ]
};

export const tosData = {
    cat: "LEGAL",
    title: "Terms of Service",
    points: [
        "<strong>Overview:</strong> We operate with a commitment to achieving high standards and implementing robust internal controls across all business operations.",
        "<strong>Scope of Service:</strong> Our expertise covers comprehensive accounting on Tally, payroll management, and the arrangement of air and sea shipping documents.",
        "<strong>Client Obligations:</strong> Clients are responsible for providing truthful and correct information. All data must be supported by documentary evidence upon request.",
        "<strong>Payment & Credit Terms:</strong> Protocols for bill payables, receivables, and credit control are shared via email prior to the commencement of work.",
        "<strong>Liability & Accuracy:</strong> While we prioritize tracking, our liability is limited to the coordination of services provided by third-party carriers.",
        "<strong>Confidentiality & Ethics:</strong> We are committed to protecting sensitive financial reporting and personal information with professional integrity."
    ]
};

export const skills = [
    "Icegate Registration", "DGFT Registration", "AD Code Registration", "Port Registration", 
    "Shipment Tracking", "Billing Accuracy", "Accounts Receivable", "Accounts Payable", 
    "TDS and GST Compliance", "Cost Accounting", "Bookkeeping", "Expense Tracking", 
    "Invoice Processing", "Time Management", "MS-Office", "Year-end Close", 
    "General Ledger Maintenance", "Internal Auditing", "Fixed Asset Management", 
    "Purchase Order Management", "Cash Flow Management", "Account Reconciliation", 
    "Financial Reporting", "Effective Communication", "Problem Solving", 
    "Team Collaboration", "Internal Controls Implementation"
];

export const chatbotBrain = [
    {
        keywords: ['track', 'shipment', 'status', 'where'],
        response: "You can track your cargo in real-time. We provide updates on airline handovers, departures, and delivery timelines."
    },
    {
        keywords: ['contact', 'email', 'phone', 'call', 'reach'],
        response: "Contact us at shubhshreeaccounts@gmail.com or call +91 8802017810 (Mon-Fri, 10AM-7PM)."
    },
    {
        keywords: ['billing', 'accuracy', 'invoice', 'dsr'],
        response: "Every bill is verified daily through our DSR process to ensure 100% accuracy based on services provided."
    },
    {
        keywords: ['gst', 'tax', 'compliance', 'tds'],
        response: "We manage complete TDS and GST compliance for all international trade transactions."
    },
    {
        keywords: ['cargo', 'special', 'odd', 'dimension', 'vehicle'],
        response: "Yes, we specialize in coordinating vehicles for odd-dimension and specialized cargo."
    },
    {
        keywords: ['payment', 'remittance', 'international', 'inward', 'outward'],
        response: "We manage all inward and outward remittances to ensure smooth global trade payments."
    },
    {
        keywords: ['hi', 'hello', 'hey', 'need help', 'help'],
        response: "Hello, I am a 24x7 Assistant here to help answer your queries to the best of my knowledge."
    },
    {
        keywords: ['how are you', 'who are you', 'who are you?'],
        response: "I am doing well. How may I help you today?"
    }
];