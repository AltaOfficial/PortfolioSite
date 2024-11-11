import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required().max(16),
    }),
    defineField({
      name: "projectImages",
      title: "Project Images",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "projectImage",
              title: "Project Image",
              type: "image",
            },
            {
              name: "isFeatured",
              title: "Featured",
              type: "boolean",
            },
          ],
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "liveSiteLink",
      title: "Live Site Link",
      type: "string",
    }),
    defineField({
      name: "repoLink",
      title: "Repository Link",
      type: "string",
    }),
    defineField({
      name: "startDate",
      title: "Start Date",
      type: "date",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "endDate",
      title: "end Date",
      type: "date",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tags",
      title: "Tech Stack",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "techName", title: "Tech Name", type: "string" },
            { name: "isFeatured", title: "Featured", type: "boolean" },
          ],
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "shortDescription",
      title: "Sentence Explaination",
      type: "text",
      validation: (rule) => rule.required(),
    }),
  ],
});
