"use client";

import StarIcon from "./star-icon";
import { motion } from "framer-motion";

type StarAnimatedProps = {
  className?: string;
};

export default function StarAnimated({ className }: StarAnimatedProps) {
  return (
    <motion.div
      animate={{
        rotate: "360deg",
        transition: {
          type: "spring",
          bounce: 0,
          duration: 3,
          repeat: Infinity,
          delay: 2,
        },
      }}
      className={`${className || ""} h-full w-max origin-center`}
    >
      <StarIcon />
    </motion.div>
  );
}
