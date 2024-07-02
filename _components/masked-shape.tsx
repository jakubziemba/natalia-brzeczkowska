"use client";

import { motion } from "framer-motion";
import { useWindowSize } from "usehooks-ts";

const initialPath =
  "M173.672 36.6782C205.404 26.9262 233.41 74.3913 266.148 83.4188C301.37 93.1312 339.899 71.3933 372.304 91.4514C404.563 111.419 437.993 149.144 440.621 191.414C443.624 239.712 406.27 275.009 386.249 315.716C374.438 339.729 354.86 357.032 346.347 383.089C338.057 408.461 349.777 441.119 337.766 464.114C325.735 487.147 297.067 488.817 281.071 508.053C253.56 541.136 249.149 632.144 210.203 617.517C165.07 600.565 193.986 500.057 158.406 461.981C134.602 436.508 88.7921 489.874 65.9657 463.161C44.6791 438.251 76.2954 395.945 72.5286 361.485C69.4548 333.365 41.5462 309.604 46.1946 282.288C50.9289 254.467 85.1107 249.06 95.9093 224.089C108.096 195.908 99.8672 159.327 111.665 130.895C126.732 94.5822 140.393 46.9056 173.672 36.6782Z";

const finalPath =
  "M238.136 30.0048C303.665 50.3851 304.255 64.2111 328.46 50.055C346.17 40.6207 382.438 44.2467 418.193 74.7319C453.786 105.079 494.328 156.73 489.626 208.704C484.253 268.089 425.278 272.398 418.193 326.068C413.833 359.097 403.434 425.746 372.379 425.746C330.821 425.746 361.314 522.058 342.369 547.821C323.393 573.625 302.484 561.387 286.285 582.618C253.435 625.672 209.417 629.533 164.673 604.439C112.818 575.359 164.748 539.736 128.493 486.713C104.237 451.24 38.4048 507.676 15.5723 470.877C-5.71991 436.56 40.7386 390.941 42.5921 348.266C44.1045 313.443 14.5242 279.288 25.3007 246.887C36.2763 213.887 78.9609 213.689 96.7967 185.294C116.926 153.248 91.3819 137.345 111.21 64.2111C123.681 18.209 175.558 10.5425 238.136 30.0048Z";

const paths = [initialPath, finalPath];

export default function MaskedShape({ width, image }: MaskedShapeProps) {
  const { height } = useWindowSize();
  return (
    <motion.svg
      width={width}
      height={700}
      viewBox="0 0 500 640"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{
        opacity: 0,
        transform: "rotate(-8.2deg)",
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1.2,
        delay: 0,
        ease: [0.14, 0.18, 0.21, 0.72],
      }}
      className="h-auto max-w-sm md:max-w-lg lg:max-w-2xl"
      style={
        {
          // transform: "rotate(-8.2deg)",
        }
      }
    >
      <defs>
        <mask id="shape-mask">
          <motion.path
            fillRule="evenodd"
            clipRule="evenodd"
            fill="white"
            initial={{ scale: 0.8 }}
            animate={{
              d: [...paths, paths[0]],
              scale: 1,
              transition: {
                d: {
                  duration: 13,
                  delay: 0.1,
                  repeat: Infinity,
                  repeatType: "loop",
                  // ease: [0.3, 0.1, 0.6, 0.1],
                  ease: "easeInOut",
                },
                scale: {
                  duration: 1.5,
                  // ease: [0.3, 0.1, 0.6, 0.8],
                  ease: "easeOut",
                },
              },
            }}
            style={
              {
                // transform: "rotate(-8.2deg)",
              }
            }
          />
        </mask>

        <image
          id="image"
          href={image}
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </defs>

      <use xlinkHref="#image" mask="url(#shape-mask)" className="w-full" />
    </motion.svg>
  );
}

type MaskedShapeProps = {
  width: number | string;
  image: string;
};
