// 'use client';
import Link from "next/link";
import Layout from "../_components/layout";
import MaskedShape from "../_components/masked-shape";
import StarAnimated from "../_components/star/star-animated";
import { motion } from "framer-motion";

const shapeSize = {
  width: 700,
  height: 700,
};

const ease = [0.17, 0, 0.55, 1];

export default function Home() {
  return (
    <Layout>
      <section className="flex min-h-[calc(100svh-var(--nav-height))] items-center justify-center overflow-hidden">
        <div className="relative -top-4 flex min-h-[calc(100svh-var(--nav-height))] w-full flex-col justify-center gap-4 overflow-hidden lg:px-32 2xl:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease }}
            className="relative top-0 z-10 mx-auto flex flex-row gap-4 lg:top-14"
          >
            <StarAnimated className="invisible hidden md:visible md:block" />
            <h1 className="flex h-full w-max flex-col justify-between gap-96 text-center font-serif text-6xl leading-[1] tracking-[-0.02em] text-red md:flex-row md:justify-center md:gap-4 lg:text-7xl xl:text-[130px]">
              <span>Natalia</span>
              <span>Brzęczkowska</span>
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 1.5,
              ease,
            }}
            className="invisible relative -left-20 top-20 z-20 hidden max-w-xs flex-row items-stretch justify-between self-center font-serif text-xl font-[450] tracking-wide text-red md:visible md:flex md:flex-col"
          >
            <span className="relative -left-8 flex flex-row gap-4">
              <StarAnimated />
              <p className="mb-8 leading-relaxed">
                Natalia specializes in makeup for music videos, commercials and
                photo sessions.
              </p>
            </span>
            <span className="relative -left-8 flex flex-row gap-4">
              <StarAnimated />
              <p className="mb-8 leading-relaxed">
                She has worked with a wide variety of artists including Monika
                Brodka, Karaś/Rogucki, Pezet and Sonar
              </p>
            </span>
            <Link
              href="/about"
              className="flex w-max rounded-full border border-red bg-red px-10 py-3 text-xl font-[500] tracking-normal text-lightred transition-all duration-300 hover:bg-lightred hover:text-red active:scale-[0.96]"
            >
              Get to know me better
            </Link>
          </motion.div>
          <motion.div className="absolute inset-0 top-[-54px] z-0 flex flex-col items-center justify-center md:visible lg:left-[45%]">
            <MaskedShape width={shapeSize.width} image={"/DariaIrena.jpeg"} />
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
