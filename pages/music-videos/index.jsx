import Head from "next/head";
import { client } from "../../sanity/lib/client";
import { groq } from "next-sanity";
import { motion } from "framer-motion";
import Layout from "../../_components/layout";
import PageHeading from "@/_components/page-heading";
import VideoSlot from "@/_components/video-slot";

export async function getStaticProps() {
  const data =
    await client.fetch(groq`*[_type == "music-video"] | order(orderRank){
    ...,
    "videoPlaceholder": videoPlaceholder.asset->url
  }`);

  return {
    props: {
      data,
    },
  };
}

export default function MusicVideos({ data }) {
  return (
    <>
      <Head>
        <title>Nati Makeupik &#x2022; Music Videos</title>
      </Head>
      <Layout>
        <section className="relative px-4 pb-24 2xl:mx-auto 2xl:max-w-screen-2xl 2xl:px-0">
          <PageHeading>Music Videos</PageHeading>

          <div className="relative mx-auto flex max-w-screen-lg flex-col items-center justify-center gap-24 md:px-10">
            {data.map((project, index) => {
              return (
                <div
                  key={project._id}
                  className="w-full max-w-screen-lg overflow-hidden"
                >
                  <div className="min-h-[190px] overflow-hidden rounded-[36px] shadow-red/5 lg:min-h-[400px]">
                    <VideoSlot project={project} />
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ margin: "-10%", once: true }}
                    transition={{
                      type: "tween",
                      ease: "easeInOut",
                      duration: 0.25,
                    }}
                    className="flex w-full min-w-80 flex-1 flex-col justify-center gap-2 text-balance px-4 pt-6 font-serif font-[350] tracking-tight text-red md:gap-4 md:px-0 lg:min-w-80"
                  >
                    <h2 className="relative flex-1 font-serif text-3xl text-red md:text-5xl">
                      {project.videoTitle}
                    </h2>
                    <h3 className="min-w-64 text-xl font-normal leading-snug md:text-2xl">
                      {project.artist}
                    </h3>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </section>
      </Layout>
    </>
  );
}
