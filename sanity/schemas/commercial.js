import { orderRankField } from "@sanity/orderable-document-list";

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
      name: "url",
      title: "YouTube video URL",
      type: "string",
    },
    {
      name: "videoPlaceholder",
      type: "image",
      title: "Video placeholder",
    },
    orderRankField({
      type: "string",
      hidden: true,
    }),
  ],
};
