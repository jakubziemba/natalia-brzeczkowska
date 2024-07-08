import Link from "next/link";
import { tw } from "@/utils/tailwind";

export default function ButtonLink({
  children,
  href,
  className = "",
  scroll = true,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
  scroll?: boolean;
}) {
  return (
    <Link
      href={href}
      className={tw(
        "flex w-max rounded-full border border-red bg-red px-10 py-3 font-serif text-2xl tracking-normal text-lightred transition-all duration-300 hover:bg-white hover:text-red active:scale-[0.96]",
        className,
      )}
      scroll={scroll}
    >
      {children}
    </Link>
  );
}
