export default {
  title: "About",
  name: "about",
  type: "object",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      title: "Description",
      name: "description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "Image",
      name: "image",
      type: "image",
    },
  ],
};
