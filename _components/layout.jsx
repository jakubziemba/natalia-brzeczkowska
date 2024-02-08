import Nav from "./nav";
import { motion } from "framer-motion";
// import LenisScroller from "./LenisScroller";

export default function Layout({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0 }}
      className=""
    >
      <Nav />
      {children}
    </motion.main>
  );
}
