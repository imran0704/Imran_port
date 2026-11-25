import { Profile, Project } from "./types";

export const fallbackProfile: Profile = {
  name: "Imran Ansari",
  role: "Software Developer",
  tagline: "Architecting high-performance digital products where technical rigor meets architectural design simplicity.",
  bio: "I'm a software Developer and designer with over 5 years of experience turning complex product visions into clean, performant, and accessible software. I specialize in the modern React and Next.js ecosystem, headless content architectures with Sanity, robust TypeScript backends, and design systems that scale across enterprise teams.",
  location: "Available Globally (Remote)",
  email: "hello@imran.dev",
  availableForHire: true,
  yearsOfExperience: 1,
  resumeUrl: "#contact",
  socialLinks: [
    { platform: "github", url: "https://github.com" },
    { platform: "linkedin", url: "https://linkedin.com" },
    { platform: "twitter", url: "https://twitter.com" },
    { platform: "email", url: "mailto:hello@imran.dev" },
  ],
  stats: [
    { label: "Years Experience", value: "1+" },
    { label: "Shipped Projects", value: "32+" },
    { label: "Client Satisfaction", value: "100%" },
    { label: "Active Users Served", value: "50k+" },
  ],
};

export const fallbackProjects: Project[] = [
  {
    _id: "timebank",
    title: "TimeBank",
    slug: "timebank",
    tagline: "A skill-sharing platform powered by community credits",
    description: "Learn skills from others with credits, and earn credits by teaching your own skills.",
    category: "Full Stack",
    tags: [],
    featured: true,
    order: 1,
  },
  {
    _id: "employee-management-system",
    title: "Employee Management System",
    slug: "employee-management-system",
    tagline: "Role-based employee and admin management",
    description: "Manage employee records with role-based logins and full CRUD operations for staff and admins.",
    category: "Full Stack",
    tags: [],
    featured: true,
    order: 2,
  },
  {
    _id: "hill-solution",
    title: "Hill Solution",
    slug: "hill-solution",
    tagline: "Field service and client management for the energy sector",
    description: "A field service and client management solution built for an energy sector company.",
    category: "Field Service",
    tags: [],
    featured: true,
    order: 3,
  },
];
