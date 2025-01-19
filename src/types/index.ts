export interface NavItem {
  title: string;
  path: string;
  dropdown?: NavItem[];
}

export interface ServiceCard {
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
}