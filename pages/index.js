// 'use client';
import Link from "next/link";
import Layout from "../_components/layout";
import MaskedShape from "../_components/masked-shape";
import Heading from "../_components/heading";
import StarAnimated from "../_components/star/star-animated";
import { motion } from "framer-motion";

const shapeSize = {
  width: 700,
  height: 700,
};

export default function Home() {
  return (
    <Layout>
      <section className="flex min-h-[90vh] items-center justify-center overflow-hidden">
        <div className="relative flex min-h-[calc(100vh-72px)] w-full flex-col justify-center gap-12 overflow-hidden px-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.17, 0, 0.55, 1] }}
            level="h1"
            className="relative z-20 flex flex-row items-center gap-4 text-nowrap text-left font-serif text-8xl leading-[1] tracking-[-0.02em] text-red lg:text-9xl xl:text-[130px]"
          >
            <StarAnimated className="mb-auto origin-center" />
            <h1>Natalia Brzęczkowska</h1>
          </motion.div>
          <div className="relative z-20 flex max-w-xs flex-row items-stretch justify-between self-center text-lg font-light text-gray">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 1.5,
                ease: [0.17, 0, 0.55, 1],
              }}
              className="flex h-full flex-col items-center justify-between"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 1.5,
                ease: [0.17, 0, 0.55, 1],
              }}
              className="row-start-2 font-sans"
            >
              <span className="flex flex-row gap-4">
                <StarAnimated />
                <p className="mb-8 leading-relaxed">
                  Natalia specializes in makeup for music videos, commercials
                  and photo sessions.
                </p>
              </span>
              <span className="flex flex-row gap-4">
                <StarAnimated />
                <p className="mb-8 leading-relaxed">
                  She has worked with a wide variety of artists including Monika
                  Brodka, Karaś/Rogucki, Pezet and Sonar
                </p>
              </span>
              <Link
                href="/about"
                className="ml-16 flex w-max rounded-full border border-red bg-red px-10 py-3 text-base text-lightred transition-all hover:bg-lightred hover:text-red"
              >
                Get to know me better
              </Link>
            </motion.div>
          </div>
          <motion.div
            // exit={{ scale: 0.5, opacity: 0, transition: { duration: 0.7 } }}
            className="absolute right-0 top-[40%] z-0 -translate-y-1/2"
          >
            <MaskedShape width={shapeSize.width} image={"/DariaIrena.jpeg"} />
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
