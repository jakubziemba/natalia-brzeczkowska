import { client } from "../../sanity/lib/client";
import { groq } from "next-sanity";
import { useState } from "react";
import Layout from "../../_components/layout";
import ImageGallery from "@/_components/image-gallery";
import { motion } from "framer-motion";

export async function getStaticProps() {
  const data =
    await client.fetch(groq`*[_type == "photosession" ] | order(name asc){
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

export default function Photoshoots({ data }) {
  const [showDetails, setShowDetails] = useState({
    sessionId: null,
    imageIndex: null,
  });

  return (
    <Layout>
      <section className="relative mt-16 px-4 2xl:mx-auto 2xl:max-w-screen-2xl 2xl:px-0">
        <div className="mb-4 mt-1 flex justify-center">
          <motion.h1 className="col-span-full col-start-6 font-serif text-6xl text-red">
            Photos
          </motion.h1>
        </div>
        <ImageGallery
          data={data}
          showDetails={showDetails}
          setShowDetails={setShowDetails}
        />
      </section>
    </Layout>
  );
}
