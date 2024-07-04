import { memo } from "react";
import Image from "next/image";
import { blurHashToDataURL } from "@/utils/blurhashDataURL";
import { motion } from "framer-motion";

function BlurImage({ image }: { image: any }) {
  const calculateWidth =
    image.metadata.dimensions.width > 2000
      ? image.metadata.dimensions.width / 2
      : image.metadata.dimensions.width;
  const calculateHeight =
    image.metadata.dimensions.height > 2000
      ? image.metadata.dimensions.height / 2
      : image.metadata.dimensions.height;

  const blurHash = blurHashToDataURL(image.metadata.blurHash);

  return (
    <motion.div
      initial={{
        transform: "scale(1.14)",
      }}
      whileInView={{
        transform: "scale(1)",
      }}
      transition={{
        duration: 0.7,
        ease: [0.33, 1, 0.68, 1],
      }}
      viewport={{ margin: "-15% ", once: true }}
      className="relative grid h-full w-auto origin-top place-items-center overflow-hidden rounded-[36px]"
      style={{ aspectRatio: image.metadata.dimensions.aspectRatio }}
    >
      <Image
        src={image.url}
        width={calculateWidth}
        height={calculateHeight}
        quality={75}
        loading="lazy"
        placeholder="blur"
        blurDataURL={blurHash}
        alt={image.name || "photosession"}
        className="origin-top object-cover"
        style={{ aspectRatio: image.metadata.dimensions.aspectRatio }}
      />
    </motion.div>
  );
}

export default memo(BlurImage);
