"use client";

import StarIcon from "./star-icon";
import { motion } from "framer-motion";

type StarAnimatedProps = {
  className?: string;
  delay?: number;
};

export default function StarAnimated({
  className,
  delay = 1.5,
}: StarAnimatedProps) {
  return (
    <motion.div
      whileInView={{
        rotate: "360deg",
        transition: {
          type: "spring",
          bounce: 0,
          duration: 3,
          repeat: Infinity,
          delay: delay,
        },
      }}
      className={`${className || ""} h-full w-max origin-center`}
    >
      <StarIcon />
    </motion.div>
  );
}
