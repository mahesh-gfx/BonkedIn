export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  title: string;
  company: string;
  location: string;
  bio: string;
  skills: string[];
  experience: Experience[];
  education: Education[];
  connections: Connection[];
}

export interface Connection {
  id: string;
  userId: string;
  name: string;
  avatar: string;
  title: string;
  company: string;
  labels: Label[];
  connectedAt: Date;
}

export interface Label {
  id: string;
  name: string;
  color: string;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: {
    min: number;
    max: number;
    currency: string;
  };
  description: string;
  requirements: string[];
  type: string;
  remote: boolean;
  postedAt: Date;
  deadline: Date;
  applicants: number;
  status: 'open' | 'closed' | 'draft';
}

export interface SavedSearch {
  id: string;
  name: string;
  filters: Record<string, any>;
  createdAt: Date;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: Date;
  endDate?: Date;
  current: boolean;
  description: string;
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  field: string;
  startDate: Date;
  endDate?: Date;
  current: boolean;
}