export const profileSchema = {
  name: "profile",
  title: "Profile",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Full Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "role",
      title: "Primary Title / Role",
      type: "string",
      description: "e.g. Full-Stack Engineer & UI/UX Specialist",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "tagline",
      title: "Hero Headline / Tagline",
      type: "string",
      description: "Catchy punchy summary for the top of the hero section",
    },
    {
      name: "bio",
      title: "Short Bio",
      type: "text",
      rows: 4,
    },
    {
      name: "avatar",
      title: "Hero Portrait / Photo",
      type: "image",
      options: { hotspot: true },
      description: "Photo shown in the hero section photo frame",
    },
    {
      name: "availableForHire",
      title: "Available for Hire / Contract",
      type: "boolean",
      initialValue: true,
    },
    {
      name: "yearsOfExperience",
      title: "Years of Experience",
      type: "number",
      initialValue: 5,
    },
    {
      name: "location",
      title: "Location / Working Timezone",
      type: "string",
    },
    {
      name: "email",
      title: "Contact Email",
      type: "string",
    },
    {
      name: "resume",
      title: "Resume / CV File (PDF)",
      type: "file",
    },
    {
      name: "stats",
      title: "Key Metrics / Stats",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string", title: "Stat Label" },
            { name: "value", type: "string", title: "Stat Value (e.g. 5+)" },
          ],
        },
      ],
    },
    {
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "platform",
              type: "string",
              options: {
                list: ["github", "linkedin", "twitter", "email", "dribbble", "website"],
              },
            },
            { name: "url", type: "url", title: "Profile URL" },
          ],
        },
      ],
    },
  ],
};

