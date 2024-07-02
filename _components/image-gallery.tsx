import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { tw } from "@/utils/tailwind";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 3,
  600: 1,
};

export default function ImageGallery({ data }: { data: any }) {
  const [showDetails, setShowDetails] = useState({
    sessionId: -1,
    imageIndex: -1,
  });
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="masonry-grid"
      columnClassName="masonry-grid_column"
    >
      {data.map((session: any) =>
        session.imageAssets.map((imageUrl: string, index: number) => {
          const isActive =
            showDetails.sessionId === session._id &&
            showDetails.imageIndex === index;
          return (
            <div
              key={imageUrl}
              data-index={index}
              onClick={() => {
                if (isActive) {
                  setShowDetails({ sessionId: -1, imageIndex: -1 });
                  return;
                } else {
                  setShowDetails({
                    sessionId: session._id,
                    imageIndex: index,
                  });
                }
              }}
              className="group relative isolate origin-top cursor-pointer select-none overflow-hidden rounded-[36px]"
            >
              <motion.div
                initial={{
                  transform: "scale(1.1)",
                }}
                whileInView={{ transform: "scale(1)" }}
                transition={{
                  type: "spring",
                  bounce: 0,
                  duration: 0.8,
                }}
                viewport={{ margin: "-15% ", once: true }}
                className="place-items-centerh-full grid w-auto origin-top overflow-hidden rounded-[36px]"
              >
                <Image
                  src={imageUrl}
                  width={800}
                  height={400}
                  priority
                  loading="eager"
                  alt={session.name || "photosession"}
                  className="origin-top"
                />
              </motion.div>
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
                  ease: "easeInOut",
                }}
                className={tw(
                  "absolute inset-0 isolate flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent bg-clip-text text-white backdrop-blur-xl",
                )}
              >
                <div className="pointer-events-none relative p-6">
                  <p className="font-serif text-3xl md:text-4xl lg:text-5xl">
                    {session.name}
                  </p>
                  <p className="font-serif text-white/80 md:text-sm lg:text-lg">
                    photos: {session.photosAuthor}
                  </p>
                  {session.name && session.photosAuthor ? (
                    <div className="absolute bottom-0 left-0 right-0 h-[150%] w-full bg-gradient-to-t from-black/20 to-transparent mix-blend-difference" />
                  ) : null}
                </div>
              </motion.div>
            </div>
          );
        }),
      )}
    </Masonry>
  );
}
