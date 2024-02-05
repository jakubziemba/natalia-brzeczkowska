import Link from "next/link";

const links = [
  { href: "/commercials", label: "Commercials" },
  { href: "/music-videos", label: "Music Videos" },
  { href: "/photoshoots", label: "Photoshoots" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <nav className="fixed top-0 z-20 grid w-full grid-cols-12 gap-2 bg-transparent px-32 py-6 font-sans font-light">
      <Link href="/" className="col-start-1 font-normal text-red">
        NB
      </Link>
      <ul className="col-span-full col-start-8 flex gap-4 text-sm">
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
