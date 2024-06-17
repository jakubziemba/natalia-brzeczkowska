/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/pages/studio/[[...index]].jsx` route
 */

import { defineConfig } from "sanity";
import { visionTool } from "@sanity/vision";
import { structureTool } from "sanity/structure";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  // schema: {
  //   types: (previousTypes) => {
  //     console.log(previousTypes);
  //     return [
  //       ...previousTypes,
  //       // {
  //       //   name: "photosession",
  //       //   title: "Photosession",
  //       //   type: "document",
  //       //   // Optional: The plugin also exports a set of 'orderings' for use in other Document Lists
  //       //   // https://www.sanity.io/docs/sort-orders
  //       //   orderings: [orderRankOrdering],
  //       //   fields: [
  //       //     // Minimum required configuration
  //       //     // orderRankField({
  //       //     //   type: "document",
  //       //     //   title: "Photosession",
  //       //     // }),
  //       //     // OR placing new documents on top
  //       //     orderRankField({ type: "category", newItemPosition: "before" }),
  //       //     // OR you can override _some_ of the field settings
  //       //     // orderRankField({ type: "category", hidden: false }),
  //       //     // ...all other fields
  //       //   ],
  //       // },
  //       // {
  //       //   name: "music-video",
  //       //   type: "document",
  //       //   title: "Music Video",
  //       //   orderings: [orderRankOrdering],
  //       //   fields: [
  //       //     // Minimum required configuration
  //       //     // orderRankField({
  //       //     //   type: "document",
  //       //     //   title: "Photosession",
  //       //     // }),
  //       //     // OR placing new documents on top
  //       //     orderRankField({
  //       //       name: "photosession",
  //       //       type: "document",
  //       //       newItemPosition: "before",
  //       //     }),
  //       //     // OR you can override _some_ of the field settings
  //       //     // orderRankField({ type: "category", hidden: false }),
  //       //     // ...all other fields
  //       //   ],
  //       // },
  //     ];
  //   },
  // },
  plugins: [
    structureTool({
      structure: (S, context) => {
        console.log(S);
        return S.list()
          .title("Content")
          .items([
            S.listItem().title("Pages").child(S.documentTypeList("page")),
            S.listItem()
              .title("Photosessions")
              .child(
                S.documentTypeList("photosession"),
                orderableDocumentListDeskItem({
                  type: "document",
                  title: "orderRank",
                  S,
                  context,
                }),
              ),
            S.listItem()
              .title("Music Videos")
              .child(S.documentTypeList("music-video")),
            S.listItem()
              .title("Commercials")
              .child(S.documentTypeList("commercial")),
          ]);
        // .items([
        //   // Minimum required configuration
        //   // orderableDocumentListDeskItem({ type: "document", S, context }),
        //   orderableDocumentListDeskItem({
        //     type: "string",
        //     title: "orderRank",
        //     // Required if using multiple lists of the same 'type'
        //     id: "orderable-en-photosessions",
        //     // menuItems: [], // allow an array of `S.menuItem()` to be injected to orderable document list menu
        //     // pass from the structure callback params above
        //     S,
        //     context,
        //   }),
        // orderableDocumentListDeskItem({
        //   type: "document",
        //   title: "Music Video",
        //   // Required if using multiple lists of the same 'type'
        //   id: "orderable-en-music-videos",
        //   // menuItems: [], // allow an array of `S.menuItem()` to be injected to orderable document list menu
        //   // pass from the structure callback params above
        //   S,
        //   context,
        // }),
        // ... all other desk items
        // ]);
      },
    }),
    //
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  // schema: {
  //   types: (previousTypes) => {
  //     console.log(previousTypes);
  //     return [
  //       ...previousTypes,
  //       // {
  //       //   name: "photosession",
  //       //   title: "Photosession",
  //       //   type: "document",
  //       //   // Optional: The plugin also exports a set of 'orderings' for use in other Document Lists
  //       //   // https://www.sanity.io/docs/sort-orders
  //       //   orderings: [orderRankOrdering],
  //       //   fields: [
  //       //     // Minimum required configuration
  //       //     // orderRankField({
  //       //     //   type: "document",
  //       //     //   title: "Photosession",
  //       //     // }),
  //       //     // OR placing new documents on top
  //       //     orderRankField({ type: "category", newItemPosition: "before" }),
  //       //     // OR you can override _some_ of the field settings
  //       //     // orderRankField({ type: "category", hidden: false }),
  //       //     // ...all other fields
  //       //   ],
  //       // },
  //       // {
  //       //   name: "music-video",
  //       //   type: "document",
  //       //   title: "Music Video",
  //       //   orderings: [orderRankOrdering],
  //       //   fields: [
  //       //     // Minimum required configuration
  //       //     // orderRankField({
  //       //     //   type: "document",
  //       //     //   title: "Photosession",
  //       //     // }),
  //       //     // OR placing new documents on top
  //       //     orderRankField({
  //       //       name: "photosession",
  //       //       type: "document",
  //       //       newItemPosition: "before",
  //       //     }),
  //       //     // OR you can override _some_ of the field settings
  //       //     // orderRankField({ type: "category", hidden: false }),
  //       //     // ...all other fields
  //       //   ],
  //       // },
  //     ];
  //   },
  // },
});
