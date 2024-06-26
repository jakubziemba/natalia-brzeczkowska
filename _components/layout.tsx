import Nav from "./nav";
import { motion } from "framer-motion";

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
    <div className="relative pt-[var(--nav-height)]" style={style}>
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
