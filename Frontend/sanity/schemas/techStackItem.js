import { defineType, defineField } from "sanity";

export default defineType({
  name: "techStackItem",
  title: "Tech Stack Items",
  type: "document",
  fields: [
    defineField({
      name: "techName",
      title: "Tech Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "techItemLogo",
      title: "Tech Item Logo",
      type: "image",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "familiarity",
      title: "Familiarity",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "expirience",
      title: "Expirience",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "techCategory",
      title: "Tech Catergory",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
});
