/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/pages/studio/[[...index]].jsx` route
 */

import { defineConfig } from "sanity";
import { visionTool } from "@sanity/vision";
import { structureTool } from "sanity/structure";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { vercelDeployTool } from "sanity-plugin-vercel-deploy";
import { media } from "sanity-plugin-media";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";

export default defineConfig([
  {
    basePath: "/studio/staging",
    projectId,
    dataset: "staging",
    schema,
    title: "Staging",
    name: "staging",
    plugins: [
      structureTool({
        structure: (S, context) => {
          return S.list()
            .title("Content")
            .items([
              S.listItem().title("Pages").child(S.documentTypeList("page")),

              // orderable
              orderableDocumentListDeskItem({
                type: "photosession",
                title: "Photosession",
                S,
                context,
              }),
              orderableDocumentListDeskItem({
                type: "music-video",
                title: "Music Video",
                S,
                context,
              }),
              orderableDocumentListDeskItem({
                type: "commercial",
                title: "Commercials",
                S,
                context,
              }),
            ]);
        },
      }),
      //
      // Vision is a tool that lets you query your content with GROQ in the studio
      // https://www.sanity.io/docs/the-vision-plugin
      visionTool({ defaultApiVersion: apiVersion }),
      vercelDeployTool(),
      media(),
    ],
  },
  {
    basePath: "/studio/production",
    projectId,
    dataset,
    schema,
    title: "Production",
    name: "production",
    plugins: [
      structureTool({
        structure: (S, context) => {
          return S.list()
            .title("Content")
            .items([
              S.listItem().title("Pages").child(S.documentTypeList("page")),

              // orderable
              orderableDocumentListDeskItem({
                type: "photosession",
                title: "Photosession",
                S,
                context,
              }),
              orderableDocumentListDeskItem({
                type: "music-video",
                title: "Music Video",
                S,
                context,
              }),
              orderableDocumentListDeskItem({
                type: "commercial",
                title: "Commercials",
                S,
                context,
              }),
            ]);
        },
      }),
      //
      // Vision is a tool that lets you query your content with GROQ in the studio
      // https://www.sanity.io/docs/the-vision-plugin
      visionTool({ defaultApiVersion: apiVersion }),
      vercelDeployTool(),
      media(),
    ],
  },
]);
