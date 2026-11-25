export interface SocialLink {
  platform: "github" | "linkedin" | "twitter" | "email" | "dribbble" | "website";
  url: string;
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  availableForHire: boolean;
  yearsOfExperience: number;
  avatarUrl?: string;
  resumeUrl?: string;
  socialLinks: SocialLink[];
  stats: {
    label: string;
    value: string;
  }[];
}

export interface Project {
  _id: string;
  title: string;
  slug?: string;
  tagline: string;
  description: string;
  category: "Full Stack" | "Frontend & UI" | "Design System" | "Mobile / SaaS" | "Field Service";
  coverImage?: string;
  tags: string[];
  metrics?: {
    label: string;
    value: string;
  };
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  order?: number;
}
