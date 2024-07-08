import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { tw } from "@/utils/tailwind";
import { YouTubeEmbed } from "@next/third-parties/google";
import VideoSlot from "./video-slot";

export default function MusicVideo({
  project,
  index,
}: {
  project: any;
  index?: number;
}) {
  return (
    <div className="mx-auto flex w-full max-w-screen-lg flex-col gap-2 overflow-hidden md:gap-8 md:px-10">
      <div className="relative w-full max-w-screen-lg overflow-hidden">
        <VideoSlot project={project} />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ margin: "-10%", once: true }}
        transition={{
          type: "tween",
          ease: "easeInOut",
          duration: 0.3,
        }}
        className="flex w-full min-w-80 flex-1 flex-col justify-center text-balance px-4 font-serif tracking-tight text-red md:gap-4 md:px-0 lg:min-w-80 "
      >
        <h2 className="min-w-64 text-2xl font-medium leading-[1.1] md:text-5xl">
          {project.videoTitle}
        </h2>
        <h3 className="mt-4 min-w-64 text-base font-normal leading-snug md:text-2xl">
          {project.artist}
        </h3>
      </motion.div>
    </div>
  );
}
