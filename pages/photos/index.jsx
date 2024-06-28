import { client } from "../../sanity/lib/client";
import { groq } from "next-sanity";
import Layout from "../../_components/layout";
import ImageGallery from "@/_components/image-gallery";
import { motion } from "framer-motion";
import PageHeading from "@/_components/page-heading";

export async function getStaticProps() {
  const data =
    await client.fetch(groq`*[_type == "photosession" ] | order(orderRank){
    ...,
     "imageAssets": imageAssets[].asset->url,
     "lqip": imageAssets[].asset->metadata.lqip,
  }`);

  return {
    props: {
      data,
    },
  };
}

export default function Photos({ data }) {
  return (
    <Layout>
      <motion.section className="relative px-4 pb-24 2xl:mx-auto 2xl:max-w-screen-2xl 2xl:px-0">
        <PageHeading>Photos</PageHeading>
        <ImageGallery data={data} />
      </motion.section>
    </Layout>
  );
}
