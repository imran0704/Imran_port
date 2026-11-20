export const projectSchema = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    },
    {
      name: "tagline",
      title: "Short Tagline",
      type: "string",
      description: "One-line summary for cards",
    },
    {
      name: "description",
      title: "Full Description",
      type: "text",
      rows: 3,
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Full Stack", value: "Full Stack" },
          { title: "Frontend & UI", value: "Frontend & UI" },
          { title: "Design System", value: "Design System" },
          { title: "Mobile / SaaS", value: "Mobile / SaaS" },
        ],
      },
    },
    {
      name: "coverImage",
      title: "Project Screenshot / Mockup",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "tags",
      title: "Tech Stack Tags",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    },
    {
      name: "metrics",
      title: "Impact Metric (Optional)",
      type: "object",
      fields: [
        { name: "label", type: "string", title: "Metric Label (e.g. Conversion Lift)" },
        { name: "value", type: "string", title: "Metric Value (e.g. +38%)" },
      ],
    },
    {
      name: "demoUrl",
      title: "Live Demo URL",
      type: "url",
    },
    {
      name: "githubUrl",
      title: "Source Code GitHub URL",
      type: "url",
    },
    {
      name: "featured",
      title: "Feature in Horizontal Scroll Showcase",
      type: "boolean",
      description: "If checked, this project will appear in the pinned horizontal scroll carousel.",
      initialValue: true,
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 1,
    },
  ],
};

