export type Role = 'Administrador' | 'Programador' | 'Usuario';

export interface Project {
  id?: string;
  title: string;
  description: string;
  imgUrl?: string;
  url?: string;
  category?: string;
  participation?: string;
  technologies?: string[];
  repoUrl?: string;
  demoUrl?: string;
}

export interface Skill {
  title: string;
  level: string;
  img: string;
}

export interface ContactLink {
  label: string;
  url: string;
}

export interface AvailabilitySlot {
  day: string;
  times: string[];
}

export interface PortfolioProject extends Project {
  section: 'Académico' | 'Laboral';
}

export interface ProgrammerProfile {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  avatar: string;
  links: ContactLink[];
  availability: AvailabilitySlot[];
  projects: PortfolioProject[];
}

export interface AdvisoryRequest {
  id: string;
  programmerId: string;
  programmerName: string;
  requester: string;
  date: string;
  time: string;
  comment?: string;
  status: 'Pendiente' | 'Aprobada' | 'Rechazada';
  resolutionNote?: string;
}
