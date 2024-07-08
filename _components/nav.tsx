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
import useMeasure from "react-use-measure";

const links = [
  { id: 0, href: "/commercials", label: "Commercials" },
  { id: 1, href: "/music-videos", label: "Music Videos" },
  { id: 2, href: "/photos", label: "Photos" },
  { id: 3, href: "/about", label: "About" },
  { id: 4, href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [ref, bounds] = useMeasure();
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
    <div className="fixed top-1 z-20 mx-auto w-full px-4">
      <motion.nav
        ref={navRef}
        animate={isHidden ? "hidden" : "visible"}
        whileHover="visible"
        onFocusCapture={() => setIsHidden(false)}
        onClick={() => isHidden && setIsHidden(false)}
        variants={{
          hidden: {
            y: "-86%",
          },
          visible: {
            y: "0%",
          },
        }}
        transition={{ duration: 0.2 }}
        className="mx-auto flex max-w-6xl flex-col border-b border-red/5 bg-white py-4 pl-6 pr-3 font-serif text-lg 2xl:mx-auto"
        style={{ borderRadius: "36px" }}
      >
        <div className="flex flex-row items-center justify-between">
          <Link
            href="/"
            className="flex w-max font-serif text-2xl font-normal tracking-tight text-red transition-all duration-300 active:scale-[0.96]"
          >
            Nati Makeupik
          </Link>
          {isMobile ? (
            <button
              className="rounded-full bg-lightred px-4 py-1.5 tracking-normal text-red md:invisible md:hidden"
              onClick={() => setShowMenu(!showMenu)}
            >
              <span>{showMenu ? "Close" : "Menu"}</span>
            </button>
          ) : null}
          <ul className="invisible relative z-20 hidden text-lg font-normal leading-none tracking-normal text-red md:visible md:flex">
            {links.map((link, index) => {
              return (
                <li key={link.label} className="relative w-max font-[350]">
                  <NavigationLink link={link} />
                </li>
              );
            })}
          </ul>
        </div>

        <motion.div
          animate={{ height: bounds.height }}
          transition={{
            type: "spring",
            bounce: 0,
            duration: showMenu ? 0.4 : 0.3,
          }}
          className="relative inset-0 flex flex-col justify-center"
        >
          <ul className="relative flex flex-col justify-center text-xl">
            {showMenu ? (
              <div ref={ref} className="flex flex-col py-4 tracking-tighter">
                {links.map((link, index) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      ease: "easeInOut",
                      duration: 0.3,
                      delay: 0.12 + 0.03 * index,
                    }}
                    className="py-2 font-[350] text-red"
                  >
                    <Link
                      href={link.href}
                      className="flex w-full flex-col overflow-hidden py-2 font-serif text-4xl"
                      onClick={() => setShowMenu(!showMenu)}
                      scroll={false}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </div>
            ) : null}
          </ul>
        </motion.div>
      </motion.nav>
    </div>
  );
}
