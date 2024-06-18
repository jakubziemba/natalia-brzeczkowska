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
    <div
      className={tw(
        "relative inset-0 h-auto w-full flex-[2] cursor-pointer overflow-hidden",
        className,
      )}
    >
      <YouTubeEmbed videoid={videoId} style="max-width: 100%" />
    </div>
  );
}
