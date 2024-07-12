import { motion } from "framer-motion";
import StarAnimated from "./star/star-animated";

export default function PageHeading({ children }: { children: string }) {
  return (
    <div className="relative -left-4 z-10 flex justify-center gap-2 overflow-hidden py-16 pb-20 md:pb-24 lg:-left-8 lg:gap-4">
      <StarAnimated delay={1} />
      <motion.h1
        // initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "tween",
          ease: "easeInOut",
          duration: 0.15,
          y: {
            type: "spring",
            bounce: 0.1,
            damping: 18,
          },
        }}
        className="text-5xl text-red md:text-6xl lg:text-7xl xl:text-8xl xl:tracking-[-0.04em]"
      >
        {children}
      </motion.h1>
    </div>
  );
}
