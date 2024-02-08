import { client } from "../../sanity/lib/client";
import { groq } from "next-sanity";
import Layout from "../../_components/layout";
import Image from "next/image";

export async function getStaticProps() {
  const data = await client.fetch(groq`*[_type == "photosession"]{
    ...,
    "imageAssets": imageAssets[].asset->url
  }`);

  return {
    props: {
      data,
    },
  };
}

export default function Photoshoots({ data }) {
  return (
    <Layout>
      <section className="relative">
        <div className="mb-4 mt-1 flex justify-center">
          <h1 className="col-span-full col-start-6 font-serif text-6xl">
            Photo Sessions
          </h1>
        </div>

        <div className="mx-auto grid grid-cols-3">
          {data.map((session, sessionIndex) => {
            return session.imageAssets.map((imageUrl, index) => (
              <div
                key={index}
                className="h-auto w-full max-w-full p-2 [&:nth-of-type(even)]:p-4 [&:nth-of-type(odd)]:p-8"
              >
                <Image
                  src={imageUrl}
                  width={1000}
                  height={500}
                  quality={80}
                  alt={session.name || "photosession"}
                  sizes="(min-width: 1024px) 70vw"
                />
              </div>
            ));
          })}
        </div>
      </section>
    </Layout>
  );
}
