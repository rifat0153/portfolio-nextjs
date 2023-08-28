export interface Project {
  name: string;
  description: string;
  images: string[];
  links: ProjectLink[];
  tags: string[];
  skills: string[];
}

export interface ProjectLink {
  name: string;
  icon?: string;
  url: string;
}
