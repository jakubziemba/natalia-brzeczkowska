import { motion } from "framer-motion";

export default function PageHeading({ children }: { children: string }) {
  return (
    <div className="relative z-10 flex justify-center overflow-hidden py-16 pb-20 md:pb-24">
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
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
        className="relative inset-0 z-0 mx-auto font-serif text-6xl font-[450] text-red"
      >
        {children}
      </motion.h1>
    </div>
  );
}
