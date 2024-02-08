export default {
  name: "photosession",
  type: "document",
  title: "Photosession",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "photosAuthor",
      type: "string",
      title: "Photos by:",
    },
    {
      name: "imageAssets",
      title: "Image Assets",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true, // Enables hotspot for precise cropping
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative Text",
              description: "Important for SEO and accessibility.",
              validation: (Rule) =>
                Rule.error(
                  "You have to fill out the alternative text for SEO purposes.",
                ).required(),
            },
          ],
        },
      ],
    },
  ],
};
