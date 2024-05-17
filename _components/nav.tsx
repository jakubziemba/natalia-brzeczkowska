import { useEffect, useState } from "react";
import Link from "next/link";
import { useMediaQuery } from "usehooks-ts";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { id: 0, href: "/commercials", label: "Commercials" },
  { id: 1, href: "/music-videos", label: "Music Videos" },
  { id: 2, href: "/photos", label: "Photos" },
  { id: 3, href: "/about", label: "About" },
  { id: 4, href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  const [categoryHovered, setCategoryHovered] = useState("");
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showMenu]);

  return (
    <nav className="relative top-0 mx-auto flex w-full flex-row items-center justify-between gap-2 bg-transparent px-4 py-6 font-sans font-light 2xl:mx-auto 2xl:max-w-screen-2xl 2xl:px-0">
      <Link href="/" className="flex w-max font-normal text-red">
        Natalia Brzęczkowska
      </Link>
      {isMobile ? (
        <button
          className="px-3 py-1.5 text-red md:invisible md:hidden"
          onClick={() => setShowMenu(!showMenu)}
        >
          Menu
        </button>
      ) : null}
      <ul className="invisible hidden text-sm md:visible md:flex">
        {links.map((link, index) => {
          const isActive = categoryHovered === link.label;
          return (
            <li key={index} className="leading-none">
              <Link
                href={link.href}
                className="flex w-full flex-col overflow-hidden px-3 py-2"
                onMouseEnter={() => setCategoryHovered(link.label)}
                onMouseLeave={() => setCategoryHovered("")}
              >
                <span className="relative flex origin-center overflow-hidden p-px [perspective:45px]">
                  <motion.span
                    initial={{ y: 0 }}
                    animate={{
                      y: isActive ? -15 : 0,
                      z: isActive ? -3 : 0,
                    }}
                    transition={{
                      duration: 0.18,
                    }}
                    className="relative"
                  >
                    {link.label}
                  </motion.span>
                  <motion.span
                    initial={{ y: 15 }}
                    animate={{
                      y: isActive ? 0 : 15,
                      z: isActive ? 0 : -3,
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
            </li>
          );
        })}
      </ul>
      <AnimatePresence mode="wait">
        {showMenu ? (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{
              type: "spring",
              bounce: 0,
            }}
            className="absolute inset-0 z-30 flex h-screen w-full flex-row justify-center gap-2 bg-transparent px-4 py-6 backdrop-blur-3xl"
          >
            <button
              className="absolute right-4 top-6 z-30 size-12 px-3 py-1.5 text-lg text-red md:invisible md:hidden"
              onClick={() => setShowMenu(!showMenu)}
            >
              X
            </button>
            <ul className="flex flex-col items-center justify-center gap-2 text-xl">
              {links.map((link, index) => {
                return (
                  <li key={index} className="text-red">
                    <Link
                      href={link.href}
                      className="flex w-full flex-col overflow-hidden px-3 py-2 font-serif text-4xl font-[400]"
                      onClick={() => setShowMenu(!showMenu)}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </nav>
  );
}
