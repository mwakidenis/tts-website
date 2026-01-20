import { NavLink, StatItem, CompetencyItem, ServiceItem, ProjectItem, PolicyItem, ContactInfo, JobItem, BenefitItem, TestimonialItem } from './types';

export const NAV_LINKS: NavLink[] = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Project Track', path: '/projects' },
    { name: 'Policies', path: '/policies' },
    { name: 'Careers', path: '/careers' }
];

export const HERO_STATS: StatItem[] = [
    { label: 'Placements', value: '5,000+' },
    { label: 'Active Clients', value: '200+' },
    { label: 'Satisfaction', value: '98.5%' },
    { label: 'Certification', value: 'CIDB G5', isDark: true },
];

export const COMPETENCIES: CompetencyItem[] = [
    { 
        icon: 'hub', 
        color: 'electric', 
        title: 'Permanent Recruitment', 
        text: 'Rigorous vetting process to find the cultural and technical fit for your long-term organizational goals.', 
        step: '01 / Recruitment' 
    },
    { 
        icon: 'groups_3', 
        color: 'amber', 
        title: 'Managed Operations', 
        text: 'End-to-end management of specialized departments, from payroll and compliance to day-to-day oversight.', 
        step: '02 / Outsourcing' 
    },
    { 
        icon: 'security', 
        color: 'navy', 
        title: 'Safety & Compliance', 
        text: 'Certified OSHA training and on-site safety officers ensuring your projects remain fully compliant with national standards.', 
        step: '03 / Consulting' 
    }
];

export const SERVICES_LIST: ServiceItem[] = [
    { icon: 'person_search', title: 'Manpower Recruitment', color: 'electric', items: ['Vetted candidate database', 'Sector-specific interviewing', 'Fast-track mobilization'] },
    { icon: 'event_repeat', title: 'Temporary Staffing', color: 'amber', items: ['On-demand scalability', 'Reduced overhead costs', 'Daily rate management'] },
    { icon: 'handshake', title: 'Permanent Placement', color: 'emerald-600', items: ['Executive search expertise', 'Cultural fit assessment', 'Retention guarantees'] },
    { icon: 'settings_suggest', title: 'Outsourcing', color: 'navy', items: ['Payroll administration', 'Full project management', 'Operational risk transfer'] },
    { icon: 'model_training', title: 'Training & Safety', color: 'indigo-600', items: ['NIOSH/CIDB compliance', 'Soft skills development', 'On-site safety audits'] },
    { icon: 'verified', title: 'JTK Compliance', color: 'rose-600', items: ['Permit & Levy handling', 'Housing (Act 446) management', 'Regulatory reporting'] }
];

export const PROJECTS_LIST: ProjectItem[] = [
    { 
        tag: 'Data Centres', 
        title: 'Hyperscale Facility Alpha', 
        client: 'Equinix Managed Services', 
        status: 'Completed', 
        color: 'emerald-500',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPAOrcxihtkrgd6_dV-xPMBQPcuXnKBjXcWVDsdHwBfjXjBzA9DRTDHmky0Hw86-F_72QIlLg_z4C8ux8mQbX9tu12J3SRZXLTjAApUDMp1p5ifdfqw8llCT4GmHtAzKlcrIagpgWrPkCNcG2MMHdwRmOzNUAXUw8sGPImOrYMrxKOVXupvwkyD_NAUxiIQfHMxh-pY166HWK8FSNJBzBMd0tDlcY7-SaOUfcretlJecaYYwdwCQK6TS5sU0G842OnFBBtKFDib8sE' 
    },
    { 
        tag: 'Construction', 
        title: 'Central Logistic Hub Expansion', 
        client: 'Pelican Intel Logistics', 
        status: 'Ongoing', 
        color: 'amber-500',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPAOrcxihtkrgd6_dV-xPMBQPcuXnKBjXcWVDsdHwBfjXjBzA9DRTDHmky0Hw86-F_72QIlLg_z4C8ux8mQbX9tu12J3SRZXLTjAApUDMp1p5ifdfqw8llCT4GmHtAzKlcrIagpgWrPkCNcG2MMHdwRmOzNUAXUw8sGPImOrYMrxKOVXupvwkyD_NAUxiIQfHMxh-pY166HWK8FSNJBzBMd0tDlcY7-SaOUfcretlJecaYYwdwCQK6TS5sU0G842OnFBBtKFDib8sE' 
    },
    { 
        tag: 'Corporate', 
        title: 'Executive Leadership Suite', 
        client: 'Global Tech Solutions', 
        status: 'Completed', 
        color: 'emerald-500',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPAOrcxihtkrgd6_dV-xPMBQPcuXnKBjXcWVDsdHwBfjXjBzA9DRTDHmky0Hw86-F_72QIlLg_z4C8ux8mQbX9tu12J3SRZXLTjAApUDMp1p5ifdfqw8llCT4GmHtAzKlcrIagpgWrPkCNcG2MMHdwRmOzNUAXUw8sGPImOrYMrxKOVXupvwkyD_NAUxiIQfHMxh-pY166HWK8FSNJBzBMd0tDlcY7-SaOUfcretlJecaYYwdwCQK6TS5sU0G842OnFBBtKFDib8sE' 
    },
    { 
        tag: 'MEP & Engineering', 
        title: 'Solar Farm Infrastructure', 
        client: 'GreenEnergy Nasional', 
        status: 'Ongoing', 
        color: 'amber-500',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPAOrcxihtkrgd6_dV-xPMBQPcuXnKBjXcWVDsdHwBfjXjBzA9DRTDHmky0Hw86-F_72QIlLg_z4C8ux8mQbX9tu12J3SRZXLTjAApUDMp1p5ifdfqw8llCT4GmHtAzKlcrIagpgWrPkCNcG2MMHdwRmOzNUAXUw8sGPImOrYMrxKOVXupvwkyD_NAUxiIQfHMxh-pY166HWK8FSNJBzBMd0tDlcY7-SaOUfcretlJecaYYwdwCQK6TS5sU0G842OnFBBtKFDib8sE' 
    },
];

export const POLICIES_LIST: PolicyItem[] = [
    { icon: 'health_and_safety', title: 'Occupational Health & Safety', color: 'electric', text: 'We prioritize the physical and mental well-being of our workforce above all else, adhering to ISO 45001 standards.' },
    { icon: 'medical_services', title: 'Drug & Alcohol Policy', color: 'amber', text: 'TTS Victory maintains a strictly substance-free workplace to ensure all personnel are fit for duty at all times.' },
    { icon: 'gavel', title: 'Anti-Bribery & Corruption', color: 'navy', text: 'In alignment with the MACC Act 2009, we uphold a zero-tolerance stance against any form of bribery.' },
    { icon: 'do_not_disturb_on', title: 'Stop Work Authority', color: 'rose-500', text: 'Every employee is empowered to stop work immediately if they observe an unsafe condition posing imminent risk.' }
];

export const CONTACT_INFO: ContactInfo[] = [
    { icon: 'call', title: 'Call Us', lines: ['+60 7-333 8888'], sub: 'Mon - Fri: 9:00 - 18:00', color: 'blue' },
    { icon: 'alternate_email', title: 'Email Us', lines: ['solutions@ttsvictory.com.my', 'hr@ttsvictory.com.my'], color: 'amber' },
    { icon: 'location_on', title: 'Visit Us', lines: ['No. 45-01, Jalan Austin Heights 8/1,', 'Taman Mount Austin, Johor Bahru'], color: 'slate' }
];

export const JOB_LIST: JobItem[] = [
    {
        title: "Senior HR Executive",
        location: "Johor Bahru HQ",
        type: "Full-Time",
        department: "Human Resources",
        description: "Oversee talent acquisition strategies and manage employee relations for our rapidly growing southern region division.",
        posted: "2 days ago"
    },
    {
        title: "Site Safety Supervisor (SSS)",
        location: "Pengerang, Johor",
        type: "Contract (12 Months)",
        department: "Operations",
        description: "Coordinate on-site safety protocols, conduct toolbox talks, and ensure full compliance with client HSE requirements.",
        posted: "1 week ago"
    },
    {
        title: "Recruitment Consultant",
        location: "Kuala Lumpur Branch",
        type: "Full-Time",
        department: "Sales & Recruitment",
        description: "Drive business development and source high-caliber candidates for technical engineering roles in the Klang Valley.",
        posted: "2 weeks ago"
    },
    {
        title: "Payroll Specialist",
        location: "Johor Bahru HQ",
        type: "Full-Time",
        department: "Finance",
        description: "Manage end-to-end payroll processing for 500+ outsourced staff, ensuring accuracy and timely statutory contributions.",
        posted: "3 weeks ago"
    }
];

export const BENEFITS_LIST: BenefitItem[] = [
    { icon: 'trending_up', title: 'Career Growth', text: 'Structured pathways for advancement and skill development.', color: 'electric' },
    { icon: 'favorite', title: 'Comprehensive Health', text: 'Premium medical coverage for you and your immediate family.', color: 'rose-500' },
    { icon: 'payments', title: 'Competitive Rewards', text: 'Performance-based bonuses and annual salary reviews.', color: 'emerald-500' },
    { icon: 'diversity_3', title: 'Inclusive Culture', text: 'A diverse workplace that values every voice and perspective.', color: 'amber' }
];

export const TESTIMONIALS: TestimonialItem[] = [
    {
        quote: "TTS Victory provided us with exceptional workforce solutions during our critical turnaround phase. Their safety-first mindset aligns perfectly with our corporate values.",
        author: "Marcus Tan",
        position: "Plant Manager",
        company: "Pengerang Integrated Complex"
    },
    {
        quote: "The efficiency of their recruitment process is outstanding. We reduced our hiring time by 60% while improving candidate quality significantly.",
        author: "Sarah Jenkins",
        position: "HR Director",
        company: "Global Logistics Hub"
    },
    {
        quote: "Reliable, compliant, and professional. They handled all the regulatory complexities of foreign worker management, allowing us to focus on production.",
        author: "Datuk Lee Wei Hong",
        position: "Managing Director",
        company: "MegaBuild Constructions"
    }
];