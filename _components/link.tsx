import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NavigationLink({ link }: { link: any }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link
      href={link.href}
      className="flex w-full flex-col overflow-hidden px-3 py-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative flex origin-center overflow-hidden p-0.5 [perspective:45px]">
        <motion.span
          initial={{ transform: "translate3d(0px, 0px, 0px)" }}
          animate={{
            transform: isHovered
              ? "translate3d(0px, -19px, -3px)"
              : "translate3d(0px, 0px, 0px)",
          }}
          transition={{
            duration: 0.18,
          }}
          className="relative"
        >
          {link.label}
        </motion.span>
        <motion.span
          initial={{ transform: "translate3d(0px, 19px, -3px)" }}
          animate={{
            transform: isHovered
              ? "translate3d(0px, 0px, 0px)"
              : "translate3d(0px, 19px, -3px)",
          }}
          transition={{
            duration: 0.18,
          }}
          className="absolute"
        >
          {link.label}
        </motion.span>
      </span>
    </Link>
  );
}
