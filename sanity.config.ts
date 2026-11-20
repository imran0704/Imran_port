/**
 * Sanity Studio configuration
 * If you run Sanity Studio embedded or via CLI, this defines your project settings and schemas.
 */
import { schemaTypes } from "./sanity/schemas";

export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your_project_id_here",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  title: "Imran Portfolio Studio",
  basePath: "/studio",
  schema: {
    types: schemaTypes,
  },
};

export default config;

