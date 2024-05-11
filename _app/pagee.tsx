"use client";
import Link from "next/link";
import MaskedShape from "../_components/masked-shape";
import StarAnimated from "../_components/star/star-animated";
import { motion } from "framer-motion";

const shapeSize = {
  width: 700,
  height: 1000,
};

export default function Home() {
  return (
    <main className="relative h-full max-h-screen min-h-screen overflow-hidden bg-lightred">
      <div className="relative top-[40%] flex h-screen w-full flex-col px-32">
        <h1 className="absolute top-[40%] z-20 flex -translate-y-1/2 flex-row gap-4 text-left font-serif text-8xl leading-[1] tracking-[-0.02em] text-red lg:text-9xl xl:text-[150px]">
          <StarAnimated className="mb-auto origin-center" />
          Natalia Brzęczkowska
        </h1>
        <div className="relative left-[30%] top-[60%] flex max-w-[320px] gap-4 text-lg font-light text-gray">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5, ease: [0.17, 0, 0.55, 1] }}
            className="ite flex flex-col justify-between"
          >
            <StarAnimated className="mb-auto origin-center" />
            <StarAnimated className="mt-auto origin-center" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5, ease: [0.17, 0, 0.55, 1] }}
            className="flex flex-col"
          >
            <p className="mb-8 leading-relaxed">
              Natalia specializes in makeup for music videos, commercials and
              photo sessions.
            </p>
            <p>
              She has worked with a wide variety of artists including Monika
              Brodka, Karaś/Rogucki, Pezet and Sonar
            </p>
            <Link
              href="/about"
              className="mt-12 w-max rounded-full border border-red bg-red px-10  py-3 text-base text-lightred transition-all hover:bg-lightred hover:text-red"
            >
              Get to know me better
            </Link>
          </motion.div>
        </div>
      </div>
      <div className="absolute right-[5%] top-[5%]">
        <MaskedShape width={shapeSize.width} image={"/DariaIrena.jpeg"} />
      </div>
    </main>
  );
}
