import Link from "next/link";
import { useMediaQuery } from "usehooks-ts";

const links = [
  { href: "/commercials", label: "Commercials" },
  { href: "/music-videos", label: "Music Videos" },
  { href: "/photoshoots", label: "Photoshoots" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <nav className="sticky top-0 z-20 mx-auto grid w-full grid-cols-[1fr_auto] place-items-center gap-2 bg-transparent px-4 py-6 font-sans font-light [grid-area:nav] 2xl:mx-auto 2xl:max-w-screen-2xl 2xl:px-0">
      <Link href="/" className="mr-auto w-max font-normal text-red">
        Natalia Brzęczkowska
      </Link>
      <button className="rounded-full border border-red px-4 py-1.5 text-right text-red md:invisible md:hidden">
        Menu
      </button>
      <ul className="invisible hidden flex-nowrap items-center gap-x-4 text-sm md:visible md:flex">
        {links.map((link, index) => (
          <li key={index} className="leading-none">
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
