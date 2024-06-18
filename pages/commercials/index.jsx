import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { motion } from "framer-motion";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import Layout from "@/_components/layout";
import VideoSlot from "@/_components/video-slot";

const regex =
  /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

export async function getStaticProps() {
  const data = await client.fetch(groq`*[_type == "commercial"]{
    ...,
    "videoPlaceholder": videoPlaceholder.asset->url,
  }`);

  return {
    props: {
      data,
    },
  };
}

export default function Commercials({ data }) {
  return (
    <Layout>
      <section className="pb-16 pt-8 2xl:mx-auto 2xl:max-w-screen-2xl">
        <div className="flex justify-center">
          <motion.h1 className="font-serif text-4xl md:text-6xl">
            Commercials
          </motion.h1>
        </div>

        <div className="mx-auto flex max-w-5xl flex-col gap-x-8 gap-y-24 px-4 py-24 md:px-10">
          {data.map((project) => {
            const { client, videoPlaceholder } = project;
            return (
              <motion.div
                key={project._id}
                initial={{ y: 30 }}
                whileInView={{ y: 0 }}
                viewport={{ margin: "-15%", once: true }}
                transition={{
                  type: "spring",
                  bounce: 0,
                  duration: 0.8,
                }}
                className="max-w-screen-lg overflow-hidden"
              >
                <motion.div
                  initial={{ scale: 1.15 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    bounce: 0,
                    duration: 1,
                  }}
                  viewport={{ margin: "-15% ", once: true }}
                  className="overflow-hidden shadow-lg shadow-red/5"
                >
                  <VideoSlot project={project} />
                </motion.div>
                <h2 className="flex-1 pt-6 font-serif text-3xl text-red md:pt-8 md:text-4xl">
                  {client}
                </h2>
              </motion.div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
