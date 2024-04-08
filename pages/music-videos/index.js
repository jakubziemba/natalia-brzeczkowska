import { client } from "../../sanity/lib/client";
import { groq } from "next-sanity";
import Image from "next/image";
import Layout from "../../_components/layout";
import { tw } from "@/utils/tailwind";

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
      <section className="container mx-auto mb-24 py-16 2xl:mx-auto 2xl:max-w-screen-2xl">
        <div className="mb-20 flex justify-center">
          <h1 className="col-span-full col-start-6 font-serif text-6xl">
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
                    "flex w-full min-w-80 max-w-md flex-1 flex-col justify-center gap-4 text-balance font-serif text-red",
                    odd ? "items-start" : "items-end",
                  )}
                >
                  <h2 className="min-w-80 max-w-md text-4xl font-medium leading-[1.1]">
                    {project.videoTitle}
                  </h2>
                  <h3 className="font-regular min-w-80 max-w-md text-lg leading-snug">
                    {project.artist}
                  </h3>
                </div>
                {project.videoPlaceholder && (
                  <div className="flex-[2] rounded-lg">
                    <Image
                      src={project.videoPlaceholder}
                      width={900}
                      height={700}
                      quality={95}
                      alt={project.videoTitle}
                      className="h-full w-full rounded-lg object-cover"
                    />
                  </div>
                )}
                <div className="min-w-80 max-w-md flex-1" />
              </li>
            );
          })}
        </ul>
      </section>
    </Layout>
  );
}
