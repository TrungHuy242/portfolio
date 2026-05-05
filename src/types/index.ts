export interface Project {
  id: string;
  title: string;
  period: string;
  role: string;
  description: string;
  tech: string[];
  highlights: string[];
  github: string;
  image: string;
  gridClass: string;
}

export interface Skill {
  name: string;
  fullName: string;
  category: 'language' | 'frontend' | 'backend' | 'tool';
}

export interface Education {
  school: string;
  major: string;
  period: string;
}

export interface Activity {
  title: string;
  organization: string;
  period: string;
  description: string;
}

export interface PersonalInfo {
  name: string;
  shortName: string;
  role: string;
  subtitle: string;
  phone: string;
  email: string;
  facebook: string;
  github: string;
  location: string;
  bio: string;
  bioVi: string;
}
