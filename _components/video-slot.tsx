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
        duration: 0.7,
        ease: [0.33, 1, 0.68, 1],
      }}
      viewport={{ margin: "-30% ", once: true }}
      className={tw(
        "h-auto w-full flex-[2] origin-top cursor-pointer overflow-hidden rounded-[36px]",
        className,
      )}
    >
      <YouTubeEmbed
        videoid={videoId}
        style="max-width: 100%; border-radius: 36px"
      />
    </motion.div>
  );
}
