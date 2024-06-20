import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { tw } from "@/utils/tailwind";
import { Suspense } from "react";
import { useMediaQuery } from "usehooks-ts";

export default function ImageGallery({
  data,
  showDetails,
  setShowDetails,
}: {
  data: any;
  showDetails: any;
  setShowDetails: any;
}) {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{ 320: 1, 768: 3 }}
      className="py-8"
    >
      <Masonry gutter="1rem">
        {data.map((session: any) =>
          session.imageAssets.map((imageUrl: string, index: number) => {
            const isActive =
              showDetails.sessionId === session._id &&
              showDetails.imageIndex === index;
            return (
              <motion.div
                key={imageUrl}
                initial={{ y: 20 }}
                whileInView={{
                  y: 0,
                }}
                transition={{
                  type: "spring",
                  bounce: 0,
                  duration: 0.8,
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
                className="group relative isolate origin-top cursor-pointer select-none overflow-hidden "
              >
                <motion.div
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    bounce: 0,
                    duration: 1,
                  }}
                  viewport={{ margin: "-15% ", once: true }}
                  className="place-items-centerh-full grid w-auto"
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
                    className="origin-top"
                  />
                </motion.div>
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
                      "absolute inset-0 isolate flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent bg-clip-text text-white backdrop-blur-lg",
                    )}
                  >
                    <div className="pointer-events-none relative p-6">
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
  );
}
