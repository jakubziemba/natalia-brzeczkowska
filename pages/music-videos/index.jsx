import { client } from "../../sanity/lib/client";
import { groq } from "next-sanity";
import Layout from "../../_components/layout";
import PageHeading from "@/_components/page-heading";
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
  return (
    <Layout className="relative">
      <section className="mx-auto 2xl:mx-auto 2xl:max-w-screen-2xl">
        <PageHeading>Music Videos</PageHeading>
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
