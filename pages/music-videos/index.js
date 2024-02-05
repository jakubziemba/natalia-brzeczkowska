import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "../../sanity/lib/client";
import Layout from "../../_components/layout";

export async function getStaticProps() {
  const data = await client.fetch(`*[_type == "music-video"]{
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
      <section>
        <div className="mt-20 flex justify-center">
          <h1 className="col-span-full col-start-6 font-serif text-6xl">
            Music Videos
          </h1>
        </div>
        <div className="flex">
          <ul>
            {data.map((project) => {
              return (
                <li key={project._id}>
                  <span>{project.artist}</span> -{" "}
                  <span>{project.videoTitle}</span>
                  {project.videoPlaceholder && (
                    <Image
                      src={project.videoPlaceholder}
                      width={400}
                      height={300}
                      alt="video cover"
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </Layout>
  );
}
