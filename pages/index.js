// 'use client';
import Link from "next/link";
import MaskedShape from "../_components/masked-shape";
import Heading from "../_components/heading";
import StarAnimated from "../_components/star/star-animated";
import { motion } from "framer-motion";

const shapeSize = {
  width: 700,
  height: 1000,
};

export default function Home() {
  return (
    <>
      <div className="h-full overflow-hidden">
        <div className="grid h-full w-full grid-cols-12 grid-rows-[150px_400px_auto] px-32">
          <Heading
            level="h1"
            className="relative z-20 col-start-1 col-end-13 row-start-1 row-end-2 flex h-min flex-row gap-4 text-left font-serif text-8xl leading-[1] tracking-[-0.02em] text-red lg:text-9xl xl:text-[150px]"
          >
            <StarAnimated className="mb-auto origin-center" />
            Natalia Brzęczkowska
          </Heading>
          <div className="relative z-20 col-start-5 col-end-8 grid grid-cols-[0.2fr_1fr] gap-4 text-lg font-light text-gray">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 1.5,
                ease: [0.17, 0, 0.55, 1],
              }}
              className="flex h-full flex-col justify-between"
            >
              <StarAnimated className="origin-center" />
              <StarAnimated className="origin-center" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 1.5,
                ease: [0.17, 0, 0.55, 1],
              }}
              className="font-sans"
            >
              <p className="mb-8 leading-relaxed">
                Natalia specializes in makeup for music videos, commercials and
                photo sessions.
              </p>
              <p className="mb-8 leading-relaxed">
                She has worked with a wide variety of artists including Monika
                Brodka, Karaś/Rogucki, Pezet and Sonar
              </p>
              <Link
                href="/about"
                className="mt-auto flex w-max rounded-full border border-red bg-red px-10 py-3 text-base text-lightred transition-all hover:bg-lightred hover:text-red"
              >
                Get to know me better
              </Link>
            </motion.div>
          </div>
          <div className="relative z-0 col-span-full col-start-7 row-start-1 h-full">
            <MaskedShape width={shapeSize.width} image={"/DariaIrena.jpeg"} />
          </div>
        </div>
      </div>
    </>
  );
}
