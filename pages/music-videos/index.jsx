import { client } from "../../sanity/lib/client";
import { groq } from "next-sanity";
import { motion } from "framer-motion";
import Layout from "../../_components/layout";
import MusicVideo from "@/_components/music-video";

export async function getStaticProps() {
  const data = await client.fetch(groq`*[_type == "music-video"]{
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
  // const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <Layout className="relative">
      <section className="mx-auto pb-16 pt-8 md:py-16 2xl:mx-auto 2xl:max-w-screen-2xl">
        <div className="mb-16 flex justify-center md:mb-20">
          <motion.h1 className="font-serif text-4xl text-red md:text-6xl">
            Music Videos
          </motion.h1>
        </div>
        <ul className="relative mx-auto flex w-full flex-col gap-16 [perspective:800px] [transform-style:preserve-3d] md:gap-32 md:px-0">
          {data.map((project, index) => {
            return (
              <MusicVideo key={project._id} project={project} index={index} />
            );
          })}
        </ul>
      </section>
    </Layout>
  );
}
