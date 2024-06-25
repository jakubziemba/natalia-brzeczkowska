import { motion } from "framer-motion";
import { tw } from "@/utils/tailwind";
import { YouTubeEmbed } from "@next/third-parties/google";

export default function VideoSlot({
  className,
  project,
}: {
  className?: string;
  project: any;
}) {
  const regex =
    /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = project?.url.match(regex);
  const videoId = match ? match[1] : null;

  return (
    <motion.div
      initial={{
        transform: "scale(1.1)",
      }}
      whileInView={{
        transform: "scale(1)",
      }}
      transition={{
        type: "spring",
        bounce: 0,
        duration: 0.8,
      }}
      viewport={{ margin: "-15% ", once: true }}
      className={tw(
        "relative inset-0 isolate h-auto w-full flex-[2] origin-top cursor-pointer overflow-hidden rounded-[40px]",
        className,
      )}
    >
      <YouTubeEmbed
        videoid={videoId}
        style="max-width: 100%; border-radius: 40px"
      />
    </motion.div>
  );
}
