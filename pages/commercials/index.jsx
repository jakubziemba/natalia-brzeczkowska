import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { motion } from "framer-motion";
import Layout from "@/_components/layout";
import PageHeading from "@/_components/page-heading";
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
      <section className="relative px-4 pb-24 2xl:mx-auto 2xl:max-w-screen-2xl 2xl:px-0">
        <PageHeading>Commercials</PageHeading>

        <div className="relative mx-auto flex max-w-screen-lg flex-col items-center justify-center gap-24 md:px-10">
          {data.map((project) => {
            return (
              <motion.div
                key={project._id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ margin: "-15%", once: true }}
                transition={{
                  type: "tween",
                  ease: "easeInOut",
                  duration: 0.3,
                }}
                className="w-full max-w-screen-lg overflow-hidden"
              >
                <div className="min-h-[190px] overflow-hidden rounded-[40px] shadow-red/5 lg:min-h-[400px]">
                  <VideoSlot project={project} />
                </div>
                <div>
                  <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ margin: "-10%", once: true }}
                    transition={{
                      type: "tween",
                      ease: "easeInOut",
                      duration: 0.3,
                    }}
                    className="relative flex-1 pt-6 font-serif text-3xl font-[450] text-red md:pt-8 md:text-4xl"
                  >
                    {/* {client.split(" ").map((word, index) => (
                      <span key={word}>
                        {word.split("").map((letter, letterIndex) => (
                          <motion.span
                            key={letterIndex}
                            initial={{
                              opacity: 0,
                              // filter: "blur(2px)"
                            }}
                            whileInView={{
                              opacity: 1,
                              //  filter: "blur(0px)"
                            }}
                            transition={{
                              type: "spring",
                              bounce: 0,
                              duration: 0.8,
                              delay: letterIndex * 0.02,
                            }}
                            // viewport={{ once: true }}
                          >
                            {letter}
                          </motion.span>
                        ))}{" "}
                      </span>
                    ))} */}
                    {project.client}
                  </motion.h2>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
