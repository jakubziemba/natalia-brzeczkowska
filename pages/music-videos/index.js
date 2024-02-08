import { client } from "../../sanity/lib/client";
import { groq } from "next-sanity";
import Image from "next/image";
import Layout from "../../_components/layout";

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
    <Layout>
      <section className="h-screen">
        <div className="mt-20 flex justify-center">
          <h1 className="col-span-full col-start-6 font-serif text-6xl">
            Music Videos
          </h1>
        </div>
        <ul className="flex w-full flex-row flex-nowrap overflow-x-scroll bg-slate-300 py-64">
          {data.map((project) => {
            return (
              <li key={project._id} className="flex w-full">
                <div className="flex w-full flex-row flex-nowrap items-center justify-start text-left">
                  <div className="flex min-w-[500px] flex-col items-center px-12 text-center  font-serif">
                    <h2 className="text-5xl">{project.artist}</h2>
                    <h3 className="text-3xl">{project.videoTitle}</h3>
                  </div>
                  {project.videoPlaceholder && (
                    <div className="block h-full min-w-[500px] flex-1">
                      <Image
                        src={project.videoPlaceholder}
                        width={900}
                        height={700}
                        quality={95}
                        alt={project.videoTitle}
                        className="h-full w-auto object-cover"
                      />
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </Layout>
  );
}
