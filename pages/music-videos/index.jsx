import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { client } from "../../sanity/lib/client";
import { groq } from "next-sanity";
import { motion } from "framer-motion";
import Layout from "../../_components/layout";
import PageHeading from "@/_components/page-heading";
import { YouTubeEmbed } from "@next/third-parties/google";

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
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const listItemRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const center = window.innerHeight / 2;
      let closestIndex = 0;
      let closestDistance = Infinity;

      listItemRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const distance = Math.abs(rect.top + rect.height / 8 - center);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }

          // Calculate opacity based on distance from center
          // const maxDistance = window.innerHeight / 2;
          // const opacity = Math.max(0, Math.min(1, 1 - distance / maxDistance));
          // ref.style.opacity = opacity.toString();
        }
      });

      setActiveVideoIndex(closestIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Nati Makeupik &#x2022; Music Videos</title>
      </Head>
      <Layout>
        <section className="relative px-4 pb-24 2xl:mx-auto 2xl:max-w-screen-2xl 2xl:px-0">
          <PageHeading>Music Videos</PageHeading>

          <div className="relative mx-auto flex max-w-screen-xl flex-col items-center justify-between gap-12 md:px-10">
            <div className="sticky top-24 z-10 w-full max-w-4xl ">
              <div className="aspect-video w-full overflow-hidden rounded-[36px]">
                {data.map((project, index) => (
                  <div
                    key={project._id}
                    className="absolute inset-0 rounded-[36px] transition-opacity duration-300"
                    style={{
                      opacity: index === activeVideoIndex ? 1 : 0,
                      pointerEvents:
                        index === activeVideoIndex ? "auto" : "none",
                    }}
                  >
                    <YouTubeEmbed
                      videoid={getVideoId(project.url)}
                      style="border-radius: 36px; max-width: 100%"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full max-w-2xl">
              <ul>
                {data.map((project, index) => (
                  <li
                    key={project._id}
                    ref={(el) => (listItemRefs.current[index] = el)}
                    className="flex flex-col gap-4 py-[20vh] transition-opacity duration-300 first:pt-[25vh] last:pb-[10vh]"
                  >
                    <h2 className="font-serif text-3xl text-red lg:text-5xl">
                      {project.videoTitle}
                    </h2>
                    <h3 className="min-w-64 text-xl font-normal leading-snug md:text-2xl">
                      {project.artist}
                    </h3>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

function getVideoId(url) {
  const regex =
    /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url?.match(regex);
  return match ? match[1] : null;
}
