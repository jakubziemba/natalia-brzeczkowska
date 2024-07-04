import { motion } from "framer-motion";
import { tw } from "@/utils/tailwind";
import Nav from "./nav";

export default function Layout({
  children,
  className = "",
  style = {},
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={tw("relative pt-[var(--nav-height)]", className)}
      style={style}
    >
      <Nav />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.4 } }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.main>
    </div>
  );
}
