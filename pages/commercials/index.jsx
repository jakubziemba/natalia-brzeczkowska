import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import Layout from "@/_components/layout";

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
          <h1 className="font-serif text-4xl md:text-6xl">Commercials</h1>
        </div>

        <div className="flex h-full flex-col gap-x-8 gap-y-24 px-4 py-24">
          {data.map((project) => {
            const { client, urls, videoPlaceholder } = project;
            const videoIDs = urls.map((url) => {
              const match = url.match(regex);
              return match ? match[1] : null;
            });
            return (
              <div
                key={project._id}
                className="grid gap-8 md:flex md:flex-row md:items-center md:justify-around"
              >
                <h2 className="flex-1 px-4 font-serif text-3xl text-red md:px-0 md:text-4xl">
                  {client}
                </h2>
                <div className="flex aspect-[16/9] w-auto flex-1 flex-col gap-4 overflow-hidden">
                  {videoIDs.map((id) => (
                    <LiteYouTubeEmbed
                      key={id}
                      id={id}
                      title={client}
                      className="h-full min-h-[400px] w-full min-w-full"
                    />
                  ))}
                </div>
                {/* <div>{videoPlaceholder}</div> */}
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}