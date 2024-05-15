import { client } from "../../sanity/lib/client";
import { groq } from "next-sanity";
import Layout from "../../_components/layout";
import Image from "next/image";
import { motion } from "framer-motion";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

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
      <section className="relative mt-24 px-4 2xl:mx-auto 2xl:max-w-screen-2xl 2xl:px-0">
        <div className="mb-4 mt-1 flex justify-center">
          <h1 className="col-span-full col-start-6 font-serif text-6xl text-red">
            Photos
          </h1>
        </div>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 320: 2, 768: 3 }}
          className="py-8"
        >
          <Masonry gutter="1rem">
            {data.map((session) =>
              session.imageAssets.map((imageUrl, index) => (
                <div key={imageUrl} className="group relative overflow-hidden">
                  <Image
                    src={imageUrl}
                    width={1000}
                    height={500}
                    quality={80}
                    priority={index < 6}
                    alt={session.name || "photosession"}
                    sizes="(min-width: 1024px) 70vw"
                    className="h-auto w-full transition duration-150 ease-in group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 isolate flex flex-col justify-end bg-clip-text text-white opacity-0 transition duration-[250ms] ease-[0.22,1.0,0.68,1.00] hover:flex hover:bg-gradient-to-t hover:from-black/70 hover:to-transparent hover:opacity-100 hover:backdrop-blur-xl">
                    <div className="relative p-6">
                      <p className="scale-95 font-serif text-3xl opacity-0 transition duration-150 group-hover:scale-100 group-hover:opacity-100 md:text-5xl">
                        {session.name}
                      </p>
                      <p className="scale-95 font-serif text-white/80 opacity-0 transition duration-150 group-hover:scale-100 group-hover:opacity-100 md:text-lg">
                        {session.photosAuthor}
                      </p>
                      {session.name && session.photosAuthor ? (
                        <div className="absolute bottom-0 left-0 right-0 -z-0 h-[150%] w-full bg-gradient-to-t from-black/20 to-transparent mix-blend-difference" />
                      ) : null}
                    </div>
                  </div>
                </div>
              )),
            )}
          </Masonry>
        </ResponsiveMasonry>
      </section>
    </Layout>
  );
}
