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
    <nav className="grid grid-cols-12 gap-2 bg-transparent pt-6 font-sans font-light">
      <ul className="col-start-8 flex flex-col gap-1 text-sm">
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
