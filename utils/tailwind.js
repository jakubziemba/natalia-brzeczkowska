import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export const tw = (initial, ...args) => twMerge(clsx(initial, ...args));
