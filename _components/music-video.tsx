import { tw } from "@/utils/tailwind";
import { YouTubeEmbed } from "@next/third-parties/google";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function MusicVideo({
  project,
  index,
}: {
  project: any;
  index?: number;
}) {
  return (
    <li
      key={project._id}
      className="relative isolate mx-auto flex w-full max-w-screen-lg flex-col gap-4 overflow-hidden px-4 ease-in-out md:gap-8 md:px-10"
    >
      <motion.div
        transition={{
          type: "spring",
          bounce: 0,
          duration: 1,
        }}
        viewport={{ margin: "-15% ", once: true }}
        className="relative isolate max-w-screen-lg overflow-hidden"
      >
        <VideoSlot project={project} className="shadow-lg" />
      </motion.div>
      <div className="flex w-full min-w-80 flex-1 flex-col justify-center gap-2 text-balance px-4 font-serif text-red md:gap-4 md:px-0 lg:min-w-80 ">
        <h2 className="min-w-64 text-2xl font-medium leading-[1.1] md:text-5xl">
          {project.videoTitle}
        </h2>
        <h3 className="font-regular mt-4 min-w-64 text-base leading-snug md:text-2xl">
          {project.artist}
        </h3>
      </div>
    </li>
  );
}

function VideoSlot({
  project,
  className,
}: {
  project: any;
  className?: string;
}) {
  const regex =
    /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = project.url.match(regex);
  const videoId = match ? match[1] : null;

  return (
    <motion.div
      initial={{
        transform: "translate(0px, 20px) scale(1.1)",
      }}
      whileInView={{
        transform: "translate(0px, 0px) scale(1)",
      }}
      transition={{
        type: "spring",
        bounce: 0,
        duration: 1,
      }}
      viewport={{ margin: "-15% ", once: true }}
      className={tw(
        "aspect-[16/9] flex-[2] origin-top cursor-pointer overflow-hidden",
        className,
      )}
    >
      <YouTubeEmbed videoid={videoId} style="max-width: 100%" />
    </motion.div>
  );
}
