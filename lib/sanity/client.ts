import { Profile, Project } from "./types";
import { fallbackProfile, fallbackProjects } from "./mockData";

export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01",
  useCdn: process.env.NODE_ENV === "production",
};

export const isSanityConfigured = Boolean(
  sanityConfig.projectId &&
  sanityConfig.projectId !== "your_project_id_here" &&
  sanityConfig.projectId.length >= 4
);

/**
 * Execute a GROQ query against Sanity's HTTP API with Next.js revalidation.
 * Falls back to null if Sanity is not configured or fails.
 */
export async function sanityFetch<T>(query: string, params: Record<string, string | number> = {}): Promise<T | null> {
  if (!isSanityConfigured) {
    return null;
  }

  try {
    const encodedQuery = encodeURIComponent(query);
    const searchParams = new URLSearchParams();
    searchParams.set("query", query);

    for (const [key, value] of Object.entries(params)) {
      searchParams.set(`$${key}`, JSON.stringify(value));
    }

    const endpoint = `https://${sanityConfig.projectId}.api.sanity.io/v${sanityConfig.apiVersion}/data/query/${sanityConfig.dataset}?${searchParams.toString()}`;

    const res = await fetch(endpoint, {
      next: { revalidate: 60, tags: ["sanity"] },
      headers: {
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      console.warn(`[Sanity] Query failed with status: ${res.status}`);
      return null;
    }

    const data = await res.json();
    return data.result as T;
  } catch (error) {
    console.warn("[Sanity] Network error when fetching content. Falling back to default data.", error);
    return null;
  }
}

// Data loaders with automatic fallback to high-quality mock data
export async function getProfile(): Promise<Profile> {
  const profileQuery = `*[_type == "profile"][0]{
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

  const live = await sanityFetch<Profile>(profileQuery);
  return live && live.name ? live : fallbackProfile;
}

export async function getProjects(): Promise<Project[]> {
  const projectsQuery = `*[_type == "project"] | order(order asc, _createdAt desc){
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

  const live = await sanityFetch<Project[]>(projectsQuery);
  return live && live.length > 0 ? live.slice(0, 3) : fallbackProjects;
}
