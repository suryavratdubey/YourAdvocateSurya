// js/config/data-store.js

export const serviceData = [
    { 
        cat: "CRIMINAL", 
        title: "Criminal Litigation", 
        points: [
            "<strong>Trial & Bail Advocacy:</strong> Meticulous representation in high-stakes NDPS and POCSO cases.",
            "<strong>Defense Strategies:</strong> Comprehensive defense handling murder, suicide, and heavy theft offenses.",
            "<strong>Procedural Mastery:</strong> Expert navigating of criminal trials, bails, and statutory cross-examinations."
        ] 
    },
    { 
        cat: "RECOVERY", 
        title: "Cheque Bounce & Recovery", 
        points: [
            "<strong>Section 138 NI Act:</strong> Deep proficiency in dealing with cheque dishonor disputes for individuals and businesses.",
            "<strong>Legal Demand Notices:</strong> Fast and legally airtight notices to settle pending liabilities.",
            "<strong>Debt Recovery:</strong> Clear strategic paths to resolve commercial financial outstanding matters efficiently."
        ] 
    },
    { 
        cat: "COMMERCIAL", 
        title: "Commercial Litigation", 
        points: [
            "<strong>Corporate Civil Suits:</strong> Formidable representation in high-value recovery suits for companies.",
            "<strong>Contractual Disputes:</strong> Robust advisory on breach of contracts and business operational standoffs.",
            "<strong>Strategic Advisory:</strong> Practical risk assessments before escalating matters to courts or tribunals."
        ] 
    },
    { 
        cat: "TAXATION", 
        title: "GST & Taxation Services", 
        points: [
            "<strong>Indirect Tax Compliance:</strong> Seamless handling of GST registrations, returns filing, and complex audits.",
            "<strong>Direct Tax Management:</strong> Precise filing of individual and corporate Income Tax Returns (ITR).",
            "<strong>Statutory Representations:</strong> Strategic replies and appearances for departmental GST notices."
        ]
    }
];

export const aboutData = { 
    cat: "ESTABLISHED", 
    title: "About Our Firm", 
    points: [
        "<strong>Foundation:</strong> Founded by Suryavrat Dubey, establishing a prestigious practice in premium legal advocacy.",
        "<strong>Vision:</strong> Delivering unyielding legal strategy and defense backed by an elite standard of courtroom preparation.",
        "<strong>Expertise:</strong> Built on a solid academic BBA-LLB foundation with expansive experience across major Delhi courts and tribunals."
    ] 
};

export const careersData = { 
    cat: "CAREERS", 
    title: "Join Our Team", 
    points: [
        "<strong>Why Join?</strong> Growth-driven work culture with direct exposure to elite litigation and tribunal practices.",
        "<strong>Hiring:</strong> We consistently seek proactive, sharp legal minds who hold a steadfast commitment to professional ethics.",
        "<strong>Key Skills:</strong> Strong legal research abilities, precision drafting of applications, and a thorough command over procedural law."
    ] 
};

export const helpCenterData = {
    cat: "SUPPORT",
    title: "Help Center",
    points: [
        "<strong>How can I schedule a consultation?</strong> You can contact us via email at suryavrat.svd@gmail.com or call our team directly at 9716752820.",
        "<strong>Where do you primarily practice?</strong> Our chamber is located at Saket Court, and we actively represent clients across all District Courts, Tribunals, and the High Court in Delhi.",
        "<strong>What documents should I provide for a cheque bounce case?</strong> Please ensure you have the original dishonored cheque, the return memo from the bank, and any relevant agreements or settlement documents.",
        "<strong>Do you handle bail matters on short notice?</strong> Yes, our criminal litigation wing specializes in rapid trial preparation and moving critical bail applications urgently.",
        "<strong>Can you handle statutory tax replies online?</strong> Absolutely. We manage complete digital compliance, including responding to GST and Income Tax notices electronically."
    ]
};

export const tosData = {
    cat: "LEGAL",
    title: "Terms of Service",
    points: [
        "<strong>Overview:</strong> Dubey Associates & Co. operates with an unyielding commitment to strategic representation and trusted advocacy.",
        "<strong>Scope of Service:</strong> Our practice covers criminal defense, commercial disputes, debt recovery under the NI Act, and taxation compliance.",
        "<strong>Client Obligations:</strong> Clients must ensure that all factual descriptions, receipts, or invoices provided to us are authentic, true, and correct.",
        "<strong>Professional Fees:</strong> Engagement fees, retainerships, and litigation expenses are pre-determined and shared clearly prior to filing matters.",
        "<strong>Liability & Strategy:</strong> While we guarantee clear strategic thinking and a powerful defense, legal outcomes are subject to judicial determinations.",
        "<strong>Confidentiality & Ethics:</strong> Every case detail, sensitive corporate record, and client communication is protected under absolute professional attorney-client privilege."
    ]
};

export const skills = [
    "Criminal Litigation", "NDPS Cases", "POCSO Cases", "Trial Court Practice", 
    "Bail Advocacy", "Section 138 NI Act", "Cheque Bounce Defense", "Legal Demand Notices", 
    "Civil Recovery Suits", "Commercial Disputes", "Breach of Contract", "GST Registration", 
    "GST Returns Filing", "GST Notice Compliance", "Income Tax Returns (ITR)", "Legal Drafting", 
    "Appellate Advocacy", "E-Filing District Courts", "High Court E-Filing", "Supreme Court E-Filing", 
    "Case-Law Research", "Written Arguments", "Cross-Examination Strategy", "DRT Practice", 
    "NCDRC Representation", "Effective Communication", "Strategic Planning"
];

export const chatbotBrain = [
    {
        keywords: ['consultation', 'appointment', 'schedule', 'book', 'meet'],
        response: "To book an appointment with Advocate Suryavrat Dubey, please reach out via email at suryavrat.svd@gmail.com or call +91 9716752820."
    },
    {
        keywords: ['contact', 'email', 'phone', 'call', 'reach', 'number'],
        response: "You can reach Dubey Associates & Co. at suryavrat.svd@gmail.com or call +91 9716752820 (Mon-Sat, 09:00AM-06:00PM)."
    },
    {
        keywords: ['cheque', 'bounce', '138', 'recovery', 'money'],
        response: "We have strong expertise in resolving Section 138 cheque bounce matters and commercial debt recovery for both companies and individuals."
    },
    {
        keywords: ['criminal', 'bail', 'ndps', 'pocso', 'arrest'],
        response: "Our criminal trial wing provides robust and fearless representation for critical bail applications and comprehensive criminal trial advocacy."
    },
    {
        keywords: ['gst', 'tax', 'itr', 'notice', 'compliance'],
        response: "We provide full-spectrum taxation support, including ITR filings, GST returns, and strategic management of statutory tax notices."
    },
    {
        keywords: ['chamber', 'address', 'court', 'location', 'office'],
        response: "Our workspace is located at Chamber No. 181, 1st Floor, Lawyers Block, Saket Court, New Delhi - 110017."
    },
    {
        keywords: ['hi', 'hello', 'hey', 'need help', 'help'],
        response: "Hello! I am Counselor Ally😊, the digital assistant for Dubey Associates & Co. How can I assist you with your legal query today?"
    },
    {
        keywords: ['how are you', 'who are you', 'who are you?'],
        response: "I am Counselor Ally, your digital guide here at Dubey Associates & Co. I'm doing well and ready to help gather your case details!"
    }
];
