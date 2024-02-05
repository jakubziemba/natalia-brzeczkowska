import Nav from "./nav";
import { AnimatePresence, motion } from "framer-motion";

export default function Layout({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0 }}
      className="h-screen overflow-hidden"
    >
      <Nav />
      {children}
    </motion.main>
  );
}
