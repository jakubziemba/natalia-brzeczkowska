export default {
  name: "page",
  type: "document",
  title: "Page",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      required: true,
    },
    {
      name: "slug",
      type: "slug",
      title: "slug",
      required: true,
    },
    {
      name: "fields",
      type: "array",
      title: "Fields",
      of: [
        {
          type: "object",
          title: "About",
        },
        {
          type: "object",
          title: "Contact",
        },
      ],
    },
  ],
};
