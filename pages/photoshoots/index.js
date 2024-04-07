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
  console.log(data);

  return (
    <Layout>
      <section className="relative mt-24 2xl:mx-auto 2xl:max-w-screen-2xl">
        <div className="mb-4 mt-1 flex justify-center">
          <h1 className="col-span-full col-start-6 font-serif text-6xl">
            Photo Sessions
          </h1>
        </div>

        <div className="flex flex-wrap gap-6 overflow-y-scroll px-32 py-24 2xl:mx-auto 2xl:max-w-screen-2xl 2xl:px-0">
          {data.map((session) =>
            session.imageAssets.map((imageUrl, index) => (
              <div
                key={index}
                className="group relative h-max w-max max-w-full flex-shrink-0 cursor-pointer overflow-hidden"
              >
                <Image
                  src={imageUrl}
                  width={1000}
                  height={500}
                  quality={80}
                  alt={session.name || "photosession"}
                  sizes="(min-width: 1024px) 70vw"
                  className="h-auto w-auto max-w-96 transition duration-150 ease-in group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 isolate flex flex-col items-center justify-center text-white opacity-0 mix-blend-exclusion transition duration-[250ms] ease-out hover:flex hover:bg-black/70 hover:opacity-100 hover:backdrop-blur-xl">
                  <p className="scale-95 font-serif text-4xl text-white opacity-0 transition duration-150 group-hover:scale-100 group-hover:opacity-100">
                    {session.name}
                  </p>
                  <p className="scale-95 font-serif text-white opacity-0 transition duration-150 group-hover:scale-100 group-hover:opacity-100">
                    {session.photosAuthor}
                  </p>
                </div>
              </div>
            )),
          )}
        </div>
      </section>
    </Layout>
  );
}
