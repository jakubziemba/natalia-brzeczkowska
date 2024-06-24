import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { useMediaQuery } from "usehooks-ts";
import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

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

  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);

  const isMobile = useMediaQuery("(max-width: 768px)");

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 0);

      lastYRef.current = y;
    }
  });

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showMenu]);

  return (
    <motion.nav
      animate={isHidden ? "hidden" : "visible"}
      whileHover="visible"
      onFocusCapture={() => setIsHidden(false)}
      variants={{
        hidden: {
          y: "-88%",
        },
        visible: {
          y: "0%",
        },
      }}
      transition={{ duration: 0.2 }}
      className="sticky top-0 z-20 mx-auto flex w-full flex-row items-center justify-between gap-2 border-b border-red/5 bg-lightred py-4 pl-6 pr-3 font-sans font-light 2xl:mx-auto"
    >
      <Link href="/" className="flex w-max font-sans font-medium text-red">
        Natimakeupik
      </Link>
      {isMobile ? (
        <button
          className="px-3 py-1.5 text-red md:invisible md:hidden"
          onClick={() => setShowMenu(!showMenu)}
        >
          Menu
        </button>
      ) : null}
      <ul className="invisible relative z-20 hidden text-base font-normal leading-none text-red md:visible md:flex">
        {links.map((link, index) => {
          const isActive = categoryHovered === link.label;
          return (
            <li key={index}>
              <Link
                href={link.href}
                className="flex w-full flex-col overflow-hidden px-3 py-2"
                onMouseEnter={() => setCategoryHovered(link.label)}
                onMouseLeave={() => setCategoryHovered("")}
              >
                <span className="relative flex origin-center overflow-hidden p-0.5 [perspective:45px]">
                  <motion.span
                    initial={{ transform: "translate3d(0px, 0px, 0px)" }}
                    animate={{
                      transform: isActive
                        ? "translate3d(0px, -18px, -3px)"
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
                    initial={{ transform: "translate3d(0px, 18px, -3px)" }}
                    animate={{
                      transform: isActive
                        ? "translate3d(0px, 0px, 0px)"
                        : "translate3d(0px, 18px, -3px)",
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
              duration: 0.7,
            }}
            className="absolute inset-0 z-50 flex h-screen w-full flex-row justify-center gap-2 bg-lightred px-4 py-6"
          >
            <button
              className="absolute right-4 top-6 z-30 size-12 px-3 py-1.5 text-lg text-red md:invisible md:hidden"
              onClick={() => setShowMenu(!showMenu)}
            >
              X
            </button>
            <ul className="flex flex-col items-center justify-center gap-2 bg-lightred text-xl">
              {links.map((link, index) => {
                return (
                  <li key={index} className="text-red">
                    <Link
                      href={link.href}
                      className="flex w-full flex-col overflow-hidden px-3 py-2 font-serif text-4xl font-medium"
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
    </motion.nav>
  );
}
