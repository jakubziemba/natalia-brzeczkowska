import Layout from "@/_components/layout";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

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
      <section className="py-24 2xl:mx-auto 2xl:max-w-screen-2xl">
        <div className="flex justify-center">
          <h1 className="font-serif text-6xl">Commercials</h1>
        </div>

        <div className="flex h-full flex-col gap-x-8 gap-y-24 py-24">
          {data.map((project) => {
            const { client, urls, videoPlaceholder } = project;
            const videoIDs = urls.map((url) => {
              const match = url.match(regex);
              return match ? match[1] : null;
            });
            return (
              <div
                key={project._id}
                className="grid grid-cols-2 items-center gap-8"
              >
                <h2 className="font-serif text-4xl">{client}</h2>
                {videoIDs.map((id) => (
                  <LiteYouTubeEmbed
                    key={id}
                    id={id}
                    title={client}
                    // className="w-auto h-full"
                  />
                ))}
                {/* <div>{videoPlaceholder}</div> */}
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
