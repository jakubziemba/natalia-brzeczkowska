import { forwardRef } from "react";
import Link from "next/link";
import { tw } from "@/utils/tailwind";

type LinkButtonProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
  scroll?: boolean;
  animated?: boolean;
};

const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  (
    { children, href, className = "", scroll = true, animated = false },
    ref,
  ) => {
    return (
      <Link
        href={href}
        className={tw(
          "inline-flex w-max rounded-full border border-red bg-red px-10 py-3 font-sans text-2xl tracking-tight text-lightred transition-all duration-300 ease-out hover:bg-white hover:text-red active:scale-[0.96]",
          className,
        )}
        scroll={scroll}
        ref={ref}
      >
        {children}
      </Link>
    );
  },
);

LinkButton.displayName = "LinkButton";

export default LinkButton;
