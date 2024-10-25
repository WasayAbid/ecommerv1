import { defineField, defineType } from "sanity";

export const GamingLaptop = defineType({
  name: "GamingLaptop",
  title: "GamingLaptop",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "text",
    }),

    defineField({
      name: "price",
      type: "number",
    }),
    defineField({
      name: "rating",
      type: "number",
    }),
    defineField({
      name: "image",
      type: "image",
    }),
  ],
});
