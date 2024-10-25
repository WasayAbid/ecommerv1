import { defineField, defineType } from "sanity";

export const Mouses = defineType({
  name: "Mouse",
  title: "Mouse",
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
