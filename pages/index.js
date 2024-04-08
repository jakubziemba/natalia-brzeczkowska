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
      <section className="h-screen">
        <div className="isolate grid w-full auto-rows-auto grid-cols-12 place-items-center px-32">
          <Heading
            level="h1"
            className="relative z-20 col-span-full row-start-1 flex flex-row gap-4 text-nowrap text-left font-serif text-8xl leading-[1] tracking-[-0.02em] text-red lg:text-9xl xl:text-[150px]"
          >
            <StarAnimated className="mb-auto origin-center" />
            Natalia Brzęczkowska
          </Heading>
          <div className="relative z-20 col-start-5 col-end-8 row-start-1 grid grid-cols-[0.2fr_1fr] gap-4 text-lg font-light text-gray">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 1.5,
                ease: [0.17, 0, 0.55, 1],
              }}
              className="flex h-full flex-col items-center justify-between"
            >
              <StarAnimated />
              <StarAnimated />
            </motion.div>
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
          <motion.div
            // exit={{ scale: 0.5, opacity: 0, transition: { duration: 0.7 } }}
            className="relative left-20 z-0 col-span-full col-start-7 -mt-80 "
          >
            <MaskedShape width={shapeSize.width} image={"/DariaIrena.jpeg"} />
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
