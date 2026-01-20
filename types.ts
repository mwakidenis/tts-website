
export interface NavLink {
    name: string;
    path: string;
}

export interface StatItem {
    label: string;
    value: string;
    isDark?: boolean;
}

export interface CompetencyItem {
    icon: string;
    color: string;
    title: string;
    text: string;
    step: string;
}

export interface ServiceItem {
    icon: string;
    title: string;
    color: string;
    items: string[];
}

export interface ProjectItem {
    tag: string;
    title: string;
    client: string;
    status: string;
    color: string;
    image: string;
}

export interface PolicyItem {
    icon: string;
    title: string;
    color: string;
    text: string;
}

export interface ContactInfo {
    icon: string;
    title: string;
    lines: string[];
    sub?: string;
    color: string;
}

export interface JobItem {
    title: string;
    location: string;
    type: string;
    department: string;
    description: string;
    posted: string;
}

export interface BenefitItem {
    icon: string;
    title: string;
    text: string;
    color: string;
}

export interface TestimonialItem {
    quote: string;
    author: string;
    position: string;
    company: string;
}