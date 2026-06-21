export interface PersonalDetails {
  fullName: string;
  jobTitle: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  linkedin: string;
  github: string;
  summary: string;
}

export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  location: string;
  description?: string;
}

export interface ProjectEntry {
  id: string;
  name: string;
  role: string;
  url: string;
  technologies: string;
  description: string;
}

export interface ResumeData {
  personal: PersonalDetails;
  experience: WorkExperience[];
  education: Education[];
  projects: ProjectEntry[];
  skills: string[];
}

export type ResumeTemplateType = "minimal" | "executive" | "creative";

export interface ContactMessage {
  fullName: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
}
