export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
  category: 'frontend' | 'backend' | 'tools' | 'design';
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Contact {
  email: string;
  phone: string;
  location: string;
  social: {
    github: string;
    linkedin: string;
    twitter: string;
    instagram: string;
  };
}

export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}