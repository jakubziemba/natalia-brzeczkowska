import { client } from "../../sanity/lib/client";
import { groq } from "next-sanity";
import { useState } from "react";
import Image from "next/image";
import Layout from "../../_components/layout";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import { tw } from "@/utils/tailwind";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

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
  // console.log(data);

  return (
    <Layout className="relative">
      <section className="container mx-auto mb-24 py-16 2xl:mx-auto 2xl:max-w-screen-2xl">
        <div className="mb-20 flex justify-center">
          <h1 className="col-span-full col-start-6 font-serif text-6xl text-red">
            Music Videos
          </h1>
        </div>
        <ul className="container mx-auto flex w-full flex-col gap-8">
          {data.map((project, index) => {
            const odd = index % 2 === 0;
            return (
              <li
                key={project._id}
                className={tw(
                  "mx-auto flex w-full max-w-screen-xl gap-8 rounded-lg",
                  odd
                    ? "flex-row justify-start text-left"
                    : "flex-row-reverse justify-end",
                )}
              >
                <div
                  className={tw(
                    "flex w-full min-w-80 max-w-md flex-1 flex-col items-center justify-center gap-4 text-balance font-serif text-red",
                  )}
                >
                  <h2 className="w-min min-w-64 max-w-md text-4xl font-medium leading-[1.1]">
                    {project.videoTitle}
                  </h2>
                  <h3 className="font-regular min-w-64 max-w-md text-lg leading-snug">
                    {project.artist}
                  </h3>
                </div>
                <VideoSlot project={project} />
                <div className="min-w-80 max-w-md flex-1" />
              </li>
            );
          })}
        </ul>
      </section>
    </Layout>
  );
}

function VideoSlot({ project, className, children }) {
  const [showVideo, setShowVideo] = useState(false);
  const regex =
    /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = project.url.match(regex);
  const videoId = match ? match[1] : null;

  return (
    <div
      className={tw("flex-[2] cursor-pointer rounded-lg", className)}
      onClick={() => setShowVideo(true)}
    >
      <LiteYouTubeEmbed id={videoId} title={project.title} />
    </div>
  );
}
