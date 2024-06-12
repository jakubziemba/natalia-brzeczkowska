import { client } from "../../sanity/lib/client";
import { groq } from "next-sanity";
import Layout from "../../_components/layout";
import Image from "next/image";
import { motion } from "framer-motion";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export async function getStaticProps() {
  const data = await client.fetch(groq`*[_type == "photosession"]{
    ...,
     "imageAssets": imageAssets[].asset->url,
     "lqip": imageAssets[].asset->metadata.lqip,
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
      <section className="relative mt-16 px-4 2xl:mx-auto 2xl:max-w-screen-2xl 2xl:px-0">
        <div className="mb-4 mt-1 flex justify-center">
          <h1 className="col-span-full col-start-6 font-serif text-6xl text-red">
            Photos
          </h1>
        </div>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 320: 1, 768: 3 }}
          className="py-8"
        >
          <Masonry gutter="1rem">
            {data.map((session, sessionIndex) =>
              session.imageAssets.map((imageUrl) => {
                return (
                  <motion.div
                    key={imageUrl}
                    className="group relative origin-top overflow-hidden"
                    initial={{ y: 20, scale: 0.98 }}
                    whileInView={{
                      y: 0,
                      scale: 1,
                    }}
                    transition={{
                      bounce: 0,
                      stiffness: 500,
                      damping: 250,
                      delay: sessionIndex < 8 ? sessionIndex * 0.05 : 0.05,
                    }}
                    viewport={{ margin: "-60px", once: true }}
                  >
                    <Image
                      src={imageUrl}
                      width={1000}
                      height={500}
                      quality={80}
                      priority={sessionIndex < 6 ? true : false}
                      alt={session.name || "photosession"}
                      sizes="(min-width: 1024px) 70vw"
                      className="h-auto w-full transition duration-150 ease-in group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 isolate flex flex-col justify-end bg-clip-text text-white opacity-0 transition duration-[250ms] ease-[0.22,1.0,0.68,1.00] hover:flex hover:bg-gradient-to-t hover:from-black/70 hover:to-transparent hover:opacity-100 hover:backdrop-blur-xl">
                      <div className="relative p-6">
                        <p className="scale-95 font-serif text-2xl opacity-0 transition duration-150 group-hover:scale-100 group-hover:opacity-100 md:text-5xl">
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
                  </motion.div>
                );
              }),
            )}
          </Masonry>
        </ResponsiveMasonry>
      </section>
    </Layout>
  );
}
