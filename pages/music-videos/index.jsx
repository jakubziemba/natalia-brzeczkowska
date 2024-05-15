import { client } from "../../sanity/lib/client";
import { groq } from "next-sanity";
import { useState } from "react";
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
  return (
    <Layout className="relative">
      <section className="container mx-auto pb-16 pt-8 md:py-16 2xl:mx-auto 2xl:max-w-screen-2xl">
        <div className="mb-16 flex justify-center md:mb-20">
          <h1 className="font-serif text-4xl text-red md:text-6xl">
            Music Videos
          </h1>
        </div>
        <ul className="mx-auto flex w-full flex-col gap-16 md:gap-8 md:px-0">
          {data.map((project, index) => {
            const odd = index % 2 === 0;
            return (
              <li
                key={project._id}
                className={tw(
                  "mx-auto flex w-full max-w-screen-xl gap-4 md:gap-8",
                  odd
                    ? "flex-col md:flex-row md:justify-start md:text-right"
                    : "flex-col md:flex-row-reverse md:justify-end",
                )}
              >
                <div
                  className={tw(
                    "order-1 flex w-full min-w-80 flex-1 flex-col justify-center gap-2 text-balance px-4 font-serif text-red md:order-first md:max-w-md md:items-center md:gap-4 ",
                  )}
                >
                  <h2 className="min-w-64 max-w-md text-2xl font-medium leading-[1.1] md:w-min md:text-4xl">
                    {project.videoTitle}
                  </h2>
                  <h3 className="font-regular min-w-64 max-w-md text-base leading-snug md:text-lg">
                    {project.artist}
                  </h3>
                </div>
                <VideoSlot project={project} />
                <div className="invisible hidden min-w-80 max-w-md flex-1 md:visible md:block" />
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
      className={tw(
        "relative isolate aspect-[16/9] flex-[2] cursor-pointer overflow-hidden",
        className,
      )}
      onClick={() => setShowVideo(true)}
    >
      <LiteYouTubeEmbed id={videoId} title={project.title} />
    </div>
  );
}
