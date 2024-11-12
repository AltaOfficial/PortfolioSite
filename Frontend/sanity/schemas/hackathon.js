import { defineField, defineType } from "sanity";

export default defineType({
  name: "hackathon",
  title: "Hackathons",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required().max(16),
    }),
    defineField({
      name: "hackathonImages",
      title: "Hackathon Images",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "hackathonImage",
              title: "Hackathon Image",
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
      name: "startDate",
      title: "Start Date",
      type: "date",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "endDate",
      title: "end Date",
      type: "date",
      validation: (rule) => rule.min(rule.valueOfField("startDate")).required(),
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "team",
      title: "Team",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "teamMemberName",
              title: "Team Member Name",
              type: "string",
              validation: (rule) => rule.required(),
            },
            {
              name: "teamMemberAvatar",
              title: "Team Member Avatar",
              type: "image",
              validation: (rule) => rule.required(),
            },
            {
              name: "teamMemberUrl",
              title: "Team Member Url",
              type: "url",
            },
          ],
        },
      ],
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
