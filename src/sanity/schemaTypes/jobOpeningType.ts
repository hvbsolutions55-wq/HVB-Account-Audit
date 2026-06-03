import { defineArrayMember, defineField, defineType } from "sanity";

export const jobOpeningType = defineType({
  name: "jobOpening",
  title: "Job Opening",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Job Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: "e.g. Remote, Luxembourg, Hybrid",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "employmentType",
      title: "Employment Type",
      type: "string",
      options: {
        list: [
          { title: "Full-time", value: "full-time" },
          { title: "Part-time", value: "part-time" },
          { title: "Contract", value: "contract" },
          { title: "Freelance", value: "freelance" },
        ],
        layout: "radio",
      },
      initialValue: "full-time",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "department",
      title: "Department",
      type: "string",
      description: "e.g. Accounting, Audit, CFO Services",
    }),
    defineField({
      name: "excerpt",
      title: "Short Summary",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().max(220),
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "isOpen",
      title: "Accepting Applications",
      type: "boolean",
      description: "Turn off when the role is filled — it stays in Studio but hides from the website.",
      initialValue: true,
    }),
    defineField({
      name: "body",
      title: "Job Description",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  defineField({
                    name: "href",
                    title: "URL",
                    type: "url",
                  }),
                ],
              },
            ],
          },
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "applyEmail",
      title: "Apply Email",
      type: "string",
      description: "Optional. Defaults to info@hvb-solutions.com if empty.",
    }),
    defineField({
      name: "applyUrl",
      title: "Apply URL",
      type: "url",
      description: "Optional external application link (e.g. LinkedIn). Used instead of email when set.",
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "location",
      isOpen: "isOpen",
    },
    prepare({ title, subtitle, isOpen }) {
      return {
        title,
        subtitle: `${subtitle || "No location"} · ${isOpen ? "Open" : "Closed"}`,
      };
    },
  },
});
