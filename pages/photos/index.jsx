import { client } from "../../sanity/lib/client";
import { groq } from "next-sanity";
import { useState } from "react";
import Layout from "../../_components/layout";
import Image from "next/image";
import { AnimatePresence, motion, inView } from "framer-motion";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { tw } from "@/utils/tailwind";
import { useMediaQuery, useWindowSize } from "usehooks-ts";

export async function getStaticProps() {
  const data =
    await client.fetch(groq`*[_type == "photosession" ] | order(name asc){
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
  const [showDetails, setShowDetails] = useState({
    sessionId: null,
    imageIndex: null,
  });
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <Layout>
      <section className="relative mt-16 px-4 2xl:mx-auto 2xl:max-w-screen-2xl 2xl:px-0">
        <div className="mb-4 mt-1 flex justify-center">
          <motion.h1 className="col-span-full col-start-6 font-serif text-6xl text-red">
            Photos
          </motion.h1>
        </div>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 320: 1, 768: 3 }}
          className="py-8"
        >
          <Masonry gutter="1rem">
            {data.map((session) =>
              session.imageAssets.map((imageUrl, index) => {
                const isActive =
                  showDetails.sessionId === session._id &&
                  showDetails.imageIndex === index;
                return (
                  <motion.div
                    key={imageUrl}
                    initial={{ y: 20, scale: 0.95 }}
                    whileInView={{
                      y: 0,
                      scale: 1,
                    }}
                    transition={{
                      type: "spring",
                      bounce: 0,
                      stiffness: 300,
                      damping: 35,
                    }}
                    viewport={{ margin: "-15% ", once: true }}
                    onTap={() => {
                      if (!isMobile) return;

                      if (
                        showDetails.sessionId !== null ||
                        showDetails.imageIndex !== null
                      ) {
                        setShowDetails({ sessionId: null, imageIndex: null });
                        return;
                      }

                      setShowDetails({
                        sessionId: session._id,
                        imageIndex: index,
                      });
                    }}
                    onClick={() => {
                      if (isMobile) return;

                      if (
                        showDetails.sessionId !== null ||
                        showDetails.imageIndex !== null
                      ) {
                        setShowDetails({ sessionId: null, imageIndex: null });
                        return;
                      }

                      const sessionId = session._id;
                      const imageIndex = index;
                      setShowDetails({ sessionId, imageIndex });
                    }}
                    onMouseLeave={() =>
                      setShowDetails({ sessionId: null, imageIndex: null })
                    }
                    className="group relative isolate origin-top cursor-pointer select-none overflow-hidden rounded-lg"
                  >
                    <Image
                      src={imageUrl}
                      width={1000}
                      height={500}
                      quality={80}
                      priority
                      loading="eager"
                      alt={session.name || "photosession"}
                      sizes="80vw, (min-width: 1024px) 70vw"
                      className="h-auto w-full"
                    />
                    <AnimatePresence>
                      <motion.div
                        initial={{
                          opacity: 0,
                        }}
                        animate={{
                          opacity: isActive ? 1 : 0,
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                          type: "tween",
                          duration: 0.18,
                        }}
                        className={tw(
                          "absolute inset-0 isolate z-20 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent bg-clip-text text-white",
                        )}
                      >
                        <div className="pointer-events-none relative z-20 p-6">
                          <p className="font-serif text-2xl md:text-5xl">
                            {session.name}
                          </p>
                          <p className="font-serif text-white/80 md:text-lg">
                            {session.photosAuthor}
                          </p>
                          {session.name && session.photosAuthor ? (
                            <div className="absolute bottom-0 left-0 right-0 h-[150%] w-full bg-gradient-to-t from-black/20 to-transparent mix-blend-difference" />
                          ) : null}
                        </div>
                      </motion.div>
                    </AnimatePresence>
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
