export type ProjectCategory = 'all' | 'distributed-systems' | 'microservices' | 'data-pipelines' | 'cloud-infra';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  type: 'Real Project' | 'Exploration' | 'Open Source';
  status?: 'Completed' | 'In Progress' | string;
  subtitle: string;
  description: string;
  fullDescription: string;
  architectureHighlights: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  technologies: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  isCurrent?: boolean;
  summary: string;
  achievements: string[];
  techStack: string[];
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
  ariaLabel: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
  _gotcha?: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
}
