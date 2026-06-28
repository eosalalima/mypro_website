export type CompanyProfile = {
    companyName: string;
    brandName: string;
    tagline: string;
    description: string;
    mission: string;
    vision: string;
    values: string[];
    logo: string;
    address: string;
    email: string;
    phoneNumbers: string[];
    website: string;
    socialLinks: string[];
};
export type Service = {
    title: string;
    slug: string;
    shortDescription: string;
    fullDescription: string;
    icon: string;
    benefits: string[];
    isFeatured: boolean;
    displayOrder: number;
    imageUrl: string;
};
export type Expertise = {
    title: string;
    slug: string;
    description: string;
    category: string;
    icon: string;
    displayOrder: number;
};
export type ProductLine = {
    title: string;
    slug: string;
    category: string;
    description: string;
    partnerBrands: string[];
    image: string;
    isFeatured: boolean;
    displayOrder: number;
};
export type Project = {
    title: string;
    slug: string;
    clientType: string;
    category: string;
    description: string;
    challenge: string;
    solution: string;
    result: string;
    servicesUsed: string[];
    image: string;
    isFeatured: boolean;
};
export type BlogPost = {
    title: string;
    slug: string;
    summary: string;
    content: string;
    author: string;
    category: string;
    publishedDate: string;
    status: string;
    featuredImage: string;
};
export type Testimonial = {
    clientName: string;
    clientPosition: string;
    company: string;
    message: string;
    photo: string;
    rating: number;
    isFeatured: boolean;
};

export const company: CompanyProfile = {
    companyName: "Myprofessional Solutions, Inc.",
    brandName: "MyPro Solutions",
    tagline: "Making IT Simple",
    description:
        "MyPro is a specialized Information Technology firm with extensive experience in consultancy and systems integration. We provide integrated IT solutions across infrastructure, cybersecurity, computing devices, managed services, and digital transformation.",
    mission:
        "To deliver reliable, innovative, and cost-effective IT solutions that simplify technology for businesses of all sizes.",
    vision: "To become a trusted technology partner for enterprises, SMEs, small offices, home offices, and retail customers by providing integrated IT solutions that adapt to changing business needs.",
    values: [
        "Simplicity",
        "Reliability",
        "Innovation",
        "Cost effectiveness",
        "Customer partnership",
    ],
    logo: "MYPRO",
    address: "Philippines",
    email: "sales.myprosolinc@gmail.com",
    phoneNumbers: ["+632 9177936188", "+632 9992297632"],
    website: "www.myprosol.com",
    socialLinks: ["LinkedIn", "Facebook", "YouTube"],
};
export const services: Service[] = [
    {
        title: "IT Infrastructure",
        slug: "it-infrastructure",
        shortDescription:
            "Network, server, cabling, storage, backup, and data center foundations.",
        fullDescription:
            "Design, strategize, and construct IT infrastructure required to support modern business operations.",
        icon: "◇",
        benefits: [
            "Network infrastructure",
            "Server infrastructure",
            "Data center setup",
            "Structured cabling",
            "LAN/WAN and wireless networks",
            "Storage and backup infrastructure",
        ],
        isFeatured: true,
        displayOrder: 1,
        imageUrl: "/Solution - IT Infrastructure.png",
    },
    {
        title: "Cybersecurity",
        slug: "cybersecurity",
        shortDescription:
            "Protection for critical IT resources from external threats and internal risk.",
        fullDescription:
            "Provide cybersecurity solutions that protect IT resources from cyber threats and internal vulnerabilities.",
        icon: "◈",
        benefits: [
            "Firewall solutions",
            "Antivirus",
            "Security appliances",
            "Intrusion prevention",
            "Web security",
            "Email security",
            "Managed security services",
            "Hybrid SOC services",
        ],
        isFeatured: true,
        displayOrder: 2,
        imageUrl: "/Solution - Cybersecurity.png",
    },
    {
        title: "Computing Devices",
        slug: "computing-devices",
        shortDescription:
            "Complete endpoint, server, printer, storage, and accessory solutions.",
        fullDescription:
            "Deliver and implement complete computing solutions including computers, mobile devices, hardware accessories, storage systems, servers, and printers.",
        icon: "▣",
        benefits: [
            "PCs and laptops",
            "Servers and storage",
            "Printers",
            "Hardware accessories",
            "Mobile devices",
            "Enterprise computing equipment",
        ],
        isFeatured: true,
        displayOrder: 3,
        imageUrl: "/Solution - Computing Devices.png",
    },
    {
        title: "Managed Services",
        slug: "managed-services",
        shortDescription:
            "Consultative support and IT experts that reduce operational burden.",
        fullDescription:
            "Provide IT consultative services and deploy IT subject matter experts to lower expenses, improve service quality, and reduce the burden on internal resources.",
        icon: "◎",
        benefits: [
            "IT helpdesk support",
            "Network administration",
            "Preventive maintenance",
            "Technical support",
            "Training and technical briefing",
            "Staff augmentation",
            "Software developers and engineers",
            "Project consultants",
            "Network and systems administrators",
        ],
        isFeatured: true,
        displayOrder: 4,
        imageUrl: "/Solution - Managed Services.png",
    },
    {
        title: "Digital Transformation",
        slug: "digital-transformation",
        shortDescription:
            "Automation, applications, workflows, and technology consulting.",
        fullDescription:
            "Help organizations improve business processes, organizational culture, and customer experience through automation and innovative technology solutions.",
        icon: "✦",
        benefits: [
            "Business process improvement",
            "Automation",
            "Application development",
            "Digital workflow solutions",
            "Customer experience improvement",
            "Technology consulting",
        ],
        isFeatured: true,
        displayOrder: 5,
        imageUrl: "/Solution - Digital Transformation.png",
    },
];
const expertiseTitles = [
    "Structured cabling design and installation",
    "Voice, data, and video traffic integration",
    "LAN/WAN and wireless network solutions",
    "Network and information security",
    "Business and personal data protection",
    "PC, server, network, and communication asset protection",
    "Hardware components",
    "Software licensing",
    "Desktop and server operating systems",
    "Productivity tools",
    "Antivirus solutions",
    "Database servers",
    "IT helpdesk services",
    "Preventive maintenance",
    "Technical briefing and training",
    "Executive search and staff augmentation",
    "Data center infrastructure design, installation, and setup",
    "Server, network equipment, workstation, telecom, and storage assembly",
    "Backup power supply, environmental controls, and security devices",
];
export const expertise: Expertise[] = expertiseTitles.map((title, i) => ({
    title,
    slug: title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, ""),
    description: `Practical expertise in ${title.toLowerCase()} for reliable, secure, and scalable IT operations.`,
    category:
        i < 6
            ? "Infrastructure & Security"
            : i < 12
              ? "Hardware & Software"
              : "Managed & Data Center Services",
    icon: "•",
    displayOrder: i + 1,
}));
export const productLines: ProductLine[] = [
    [
        "Solar Energy Sustainable Solutions",
        "Strategic Partners",
        "Leading industry partner in solar energy sustainable solutions, including smart energy home and sustainable solar technology solutions.",
        ["Huawei FusionSolar"],
        true,
    ],
    [
        "Huawei Enterprise Business",
        "Strategic Partners",
        "Enterprise digital infrastructure solutions that help enable intelligent transformation across industries.",
        ["Huawei Enterprise Business"],
        true,
    ],
    [
        "Managed Security Services",
        "Security",
        "Hybrid Security Operations Center or SOC managed security services in partnership with Sophos and Secureworks.",
        ["Sophos", "Secureworks"],
        true,
    ],
    [
        "Network Infrastructure and Connectivity",
        "Infrastructure",
        "Infrastructure and connectivity solutions known for high-quality products and continuous innovation.",
        ["Panduit"],
        true,
    ],
    [
        "Enterprise HCM Software",
        "Business Applications",
        "Next-generation HR technology that helps enterprises manage employees from hire to rehire.",
        ["ZingHR"],
        true,
    ],
    [
        "Cybersecurity Products",
        "Security",
        "Endpoint, network, and cloud security products for business protection.",
        ["Sophos", "CrowdStrike", "Kaspersky", "Bitdefender"],
        false,
    ],
    [
        "Cabling, Network, and Communication",
        "Infrastructure",
        "Reliable cabling, network, and communications product ecosystem.",
        [
            "FiberCore",
            "Huawei",
            "Cisco",
            "FiberHome",
            "CommScope",
            "Belden",
            "Alantek",
            "Avaya",
        ],
        false,
    ],
    [
        "Servers and Storage",
        "Computing",
        "Enterprise server and storage platforms for business workloads.",
        [
            "Lenovo",
            "Huawei",
            "Dell EMC",
            "Hewlett Packard Enterprise",
            "Synology",
        ],
        false,
    ],
    [
        "PC and Laptop",
        "Computing",
        "Business-ready devices for office, remote, and enterprise users.",
        [
            "ASUS",
            "Hewlett Packard Enterprise",
            "Dell EMC",
            "Lenovo",
            "Acer",
            "NComputing",
        ],
        false,
    ],
    [
        "Software Licensing",
        "Software",
        "Productivity, design, virtualization, and application delivery licensing.",
        ["Microsoft", "Adobe", "Citrix NetScaler"],
        false,
    ],
    [
        "CCTV / Surveillance",
        "Security",
        "Surveillance systems for facilities, offices, and operations.",
        ["Huawei", "Hikvision", "Dahua Technology"],
        false,
    ],
    [
        "UPS / Power",
        "Power",
        "Backup power and power continuity products.",
        ["Huawei", "APC"],
        false,
    ],
    [
        "Printers",
        "Peripherals",
        "Printers and imaging solutions for office productivity.",
        [
            "Brother",
            "Epson",
            "Hewlett Packard Enterprise",
            "Fuji Xerox",
            "Canon",
        ],
        false,
    ],
].map(([title, category, description, partnerBrands, isFeatured], i) => ({
    title: title as string,
    slug: (title as string)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, ""),
    category: category as string,
    description: description as string,
    partnerBrands: partnerBrands as string[],
    image: "Logo placeholder",
    isFeatured: isFeatured as boolean,
    displayOrder: i + 1,
}));
export const projects: Project[] = [
    "Enterprise Network Infrastructure Deployment",
    "Structured Cabling and Connectivity Upgrade",
    "Managed Cybersecurity Implementation",
    "Data Center Infrastructure Setup",
    "Business Process Automation Solution",
    "Enterprise Hardware and Software Licensing Rollout",
    "Solar Energy Technology Deployment",
    "HR Technology Implementation with HCM Software",
].map((title, i) => ({
    title,
    slug: title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, ""),
    clientType: ["Enterprise", "SME", "Corporate", "Retail"][i % 4],
    category: [
        "Infrastructure",
        "Cybersecurity",
        "Data Center",
        "Digital Transformation",
    ][i % 4],
    description: `A sample CMS-managed project placeholder for ${title.toLowerCase()}.`,
    challenge:
        "The client needed a dependable technology solution with minimal disruption to daily operations.",
    solution:
        "MyPro assessed requirements, designed the technical approach, supplied compatible products, and implemented the solution with documentation and support.",
    result: "The organization improved reliability, operational visibility, and readiness for future growth.",
    servicesUsed: [services[i % services.length].title, "Technical Support"],
    image: "Project image placeholder",
    isFeatured: i < 3,
}));
export const blogPosts: BlogPost[] = [
    "Why IT Infrastructure Matters for Business Growth",
    "How Managed Services Reduce IT Operational Cost",
    "Basic Cybersecurity Practices for Growing Businesses",
    "The Role of Digital Transformation in Modern Enterprises",
    "Choosing the Right Computing Devices for Your Organization",
].map((title, i) => ({
    title,
    slug: title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, ""),
    summary: `Practical insights from MyPro Solutions on ${title.toLowerCase()}.`,
    content:
        "Use this CMS-managed article space to publish helpful technology guidance, company news, and solution updates for customers.",
    author: "MyPro Solutions",
    category: [
        "Infrastructure",
        "Managed Services",
        "Cybersecurity",
        "Digital Transformation",
        "Computing",
    ][i],
    publishedDate: `2026-0${i + 1}-15`,
    status: "Published",
    featuredImage: "Blog image placeholder",
}));
export const testimonials: Testimonial[] = [
    {
        clientName: "Sample Client",
        clientPosition: "IT Manager",
        company: "Growing Enterprise",
        message:
            "MyPro Solutions helped us simplify our IT requirements with responsive support and practical recommendations.",
        photo: "Photo placeholder",
        rating: 5,
        isFeatured: true,
    },
];
export const cmsCollections = {
    company: [company],
    services,
    expertise,
    products: productLines,
    projects,
    blog: blogPosts,
    testimonials,
};
