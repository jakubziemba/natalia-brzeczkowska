import { tw } from "@/utils/tailwind";
import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

export default function MusicVideo({
  project,
  index,
}: {
  project: any;
  index: number;
}) {
  const itemRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start 90%", "end end"],
  });
  const isInView = useInView(itemRef);

  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(0% 50% 0% 50%)", "inset(0% 0% 0% 0%)"],
  );

  return (
    <motion.li
      key={project._id}
      ref={itemRef}
      initial={{
        // clipPath: "inset(0% 30% 0% 30%)",
        scale: 0.92,
      }}
      whileInView={{
        // clipPath: "inset(0% 0% 0% 0%)",
        scale: 1,
      }}
      viewport={{ margin: "-80px", once: true }}
      transition={{
        clipPath: { type: "spring", stiffness: 300, damping: 85 },
      }}
      className={tw(
        "relative mx-auto flex w-full max-w-screen-xl origin-top flex-col gap-4 px-4 ease-in-out md:gap-8",
      )}
    >
      <motion.div
        className={tw(
          "order-1 flex w-full min-w-80 flex-1 flex-col justify-center gap-2 text-balance px-4 font-serif text-red md:gap-4 md:px-20 lg:min-w-80 ",
        )}
      >
        <h2 className="min-w-64 text-2xl font-medium leading-[1.1] md:text-5xl">
          {project.videoTitle}
        </h2>
        <h3 className="font-regular mt-4 min-w-64 text-base leading-snug md:text-2xl">
          {project.artist}
        </h3>
      </motion.div>
      <VideoSlot project={project} className="shadow-lg" />
    </motion.li>
  );
}

function VideoSlot({
  project,
  className,
}: {
  project: any;
  className?: string;
}) {
  const [showVideo, setShowVideo] = useState(false);
  const regex =
    /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = project.url.match(regex);
  const videoId = match ? match[1] : null;

  return (
    <div
      className={tw(
        "relative isolate aspect-[16/9] flex-[2] cursor-pointer overflow-hidden",
        className,
      )}
      onClick={() => setShowVideo(true)}
    >
      <LiteYouTubeEmbed id={videoId} title={project.title} />
    </div>
  );
}
