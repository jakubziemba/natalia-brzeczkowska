import Nav from "./nav";
import { motion } from "framer-motion";

export default function Layout({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <>
      <Nav />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.4 } }}
        exit={{ opacity: 0 }}
        className=""
      >
        {children}
      </motion.main>
    </>
  );
}
