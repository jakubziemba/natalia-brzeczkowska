export default {
  name: "commercial",
  type: "document",
  title: "Commercial",
  fields: [
    {
      name: "client",
      type: "string",
      title: "Client",
    },
    {
      name: "urls",
      title: "YouTube video URL",
      type: "array",
      of: [{ type: "url", name: "urlM", title: "YouTube video URL" }],
    },
    {
      name: "videoPlaceholder",
      type: "image",
      title: "Video placeholder",
    },
  ],
};
