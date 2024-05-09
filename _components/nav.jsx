import { useState } from "react";
import Link from "next/link";
import { useMediaQuery } from "usehooks-ts";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { id: 0, href: "/commercials", label: "Commercials" },
  { id: 1, href: "/music-videos", label: "Music Videos" },
  { id: 2, href: "/photoshoots", label: "Photoshoots" },
  { id: 3, href: "/about", label: "About" },
  { id: 4, href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [categoryHovered, setCategoryHovered] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <nav className="relative top-0 z-20 mx-auto flex w-full flex-row justify-between gap-2 bg-transparent px-4 py-6 font-sans font-light 2xl:mx-auto 2xl:max-w-screen-2xl 2xl:px-0">
      <Link href="/" className="flex w-max font-normal text-red">
        Natalia Brzęczkowska
      </Link>
      <button className="rounded-full border border-red px-4 py-1.5 text-right text-red md:invisible md:hidden">
        Menu
      </button>
      <ul className="invisible hidden text-sm md:visible md:flex">
        {links.map((link, index) => {
          const isActive = categoryHovered === link.label;
          return (
            <li key={index} className="leading-none">
              <Link
                href={link.href}
                className="flex w-full flex-col overflow-hidden px-3 py-1.5"
                onMouseEnter={() => setCategoryHovered(link.label)}
                onMouseLeave={() => setCategoryHovered("")}
              >
                <span className="relative flex overflow-hidden">
                  <motion.span
                    initial={{ y: 0 }}
                    animate={{ y: isActive ? -15 : 0 }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="relative"
                  >
                    {link.label}
                  </motion.span>
                  <motion.span
                    initial={{ y: 15 }}
                    animate={{ y: isActive ? 0 : 15 }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="absolute"
                  >
                    {link.label}
                  </motion.span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
