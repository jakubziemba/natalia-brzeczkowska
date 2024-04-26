import { useState } from "react";
import Link from "next/link";
import { useMediaQuery } from "usehooks-ts";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { id: 0, href: "/commercials", label: "Commercials" },
  { id: 1, href: "/music-videos", label: "Music Videos" },
  { id: 2, href: "/photoshoots", label: "Photoshoots" },
  { id: 3, href: "/projects", label: "Projects" },
  { id: 4, href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [categoryHovered, setCategoryHovered] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <nav className="sticky top-0 z-20 mx-auto grid w-full grid-cols-[1fr_auto] place-items-center gap-2 bg-transparent px-4 py-6 font-sans font-light [grid-area:nav] 2xl:mx-auto 2xl:max-w-screen-2xl 2xl:px-0">
      <Link href="/" className="mr-auto w-max font-normal text-red">
        Natalia Brzęczkowska
      </Link>
      <button className="rounded-full border border-red px-4 py-1.5 text-right text-red md:invisible md:hidden">
        Menu
      </button>
      <ul className="invisible hidden flex-nowrap items-center text-sm md:visible md:flex">
        {links.map((link, index) => {
          const isActive = categoryHovered === link.label;
          return (
            <li key={index} className="leading-none">
              <Link
                href={link.href}
                className="relative px-3 py-1.5 transition-colors duration-[150ms] hover:text-almost-white"
                onMouseEnter={() => setCategoryHovered(link.label)}
                onMouseLeave={() => setCategoryHovered("")}
              >
                {link.label}
                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      initial={{ scale: 0.75, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.75, opacity: 0 }}
                      transition={{
                        type: "spring",
                        bounce: 0.15,
                        duration: 0.35,
                      }}
                      className="absolute inset-0 -z-10 rounded-full bg-red"
                    />
                  )}
                </AnimatePresence>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
