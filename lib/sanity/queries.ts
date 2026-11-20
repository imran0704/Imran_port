/**
 * Central GROQ queries for Sanity CMS
 */

export const profileQuery = `*[_type == "profile"][0]{
  name,
  role,
  tagline,
  bio,
  location,
  email,
  availableForHire,
  yearsOfExperience,
  "avatarUrl": avatar.asset->url,
  "resumeUrl": resume.asset->url,
  socialLinks,
  stats
}`;

export const projectsQuery = `*[_type == "project"] | order(order asc, _createdAt desc){
  _id,
  title,
  "slug": slug.current,
  tagline,
  description,
  category,
  "coverImage": coverImage.asset->url,
  tags,
  metrics,
  demoUrl,
  githubUrl,
  featured,
  order
}`;
