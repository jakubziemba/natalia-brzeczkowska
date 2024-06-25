import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { useMediaQuery } from "usehooks-ts";
import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import NavigationLink from "./link";

const links = [
  { id: 0, href: "/commercials", label: "Commercials" },
  { id: 1, href: "/music-videos", label: "Music Videos" },
  { id: 2, href: "/photos", label: "Photos" },
  { id: 3, href: "/about", label: "About" },
  { id: 4, href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [isHidden, setIsHidden] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const { scrollY } = useScroll();
  const lastYRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 0);

      lastYRef.current = y;
    }
  });

  useEffect(() => {
    // get nav height and set it as css variable
    if (navRef.current) {
      const navHeight = navRef.current.getBoundingClientRect().height;
      document.documentElement.style.setProperty(
        "--nav-height",
        `${navHeight}px`,
      );
    }
  }, []);

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showMenu]);

  return (
    <motion.nav
      ref={navRef}
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
      className="sticky top-0 z-20 mx-auto flex w-full flex-row items-center justify-between gap-2 border-b border-red/5 py-4 pl-6 pr-3 font-serif text-lg font-[450] backdrop-blur-md 2xl:mx-auto"
    >
      <Link
        href="/"
        className="flex w-max font-serif text-2xl tracking-wide text-red mix-blend-difference"
      >
        Natimakeupik
      </Link>
      {isMobile ? (
        <button
          className="px-3 py-1.5 tracking-wide text-red md:invisible md:hidden"
          onClick={() => setShowMenu(!showMenu)}
        >
          Menu
        </button>
      ) : null}
      <ul className="invisible relative z-20 hidden text-lg font-[450] leading-none tracking-wide text-red mix-blend-difference md:visible md:flex">
        {links.map((link, index) => {
          return (
            <li key={index}>
              <NavigationLink link={link} />
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
            className="absolute inset-0 z-50 flex h-screen w-full flex-row justify-center gap-2 bg-lightred px-4 py-6 font-[450]"
          >
            <button
              className="absolute right-8 top-6 z-30 size-12 px-3 py-1.5 text-lg text-red md:invisible md:hidden"
              onClick={() => setShowMenu(!showMenu)}
            >
              Close
            </button>
            <ul className="flex flex-col items-center justify-center gap-2 bg-lightred text-xl">
              {links.map((link, index) => {
                return (
                  <li key={index} className="text-red">
                    <Link
                      href={link.href}
                      className="flex w-full flex-col overflow-hidden px-3 py-2 font-serif text-4xl"
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
