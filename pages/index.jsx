import Head from "next/head";
import { motion } from "framer-motion";
import Layout from "../_components/layout";
import MaskedShape from "../_components/masked-shape";
import StarAnimated from "../_components/star/star-animated";
import ButtonLink from "@/_components/button-link";

const shapeSize = {
  width: 700,
  height: 700,
};

const ease = [0.17, 0, 0.55, 1];

export default function Home() {
  return (
    <>
      <Head>
        <title>Nati Makeupik &#x2022; Homepage</title>
      </Head>
      <Layout>
        <section className="flex min-h-[calc(100svh-var(--nav-height))] items-center justify-center overflow-hidden">
          <div className="relative -top-4 flex min-h-[calc(100svh-var(--nav-height))] w-full flex-col justify-center gap-4 overflow-hidden md:top-0 lg:px-32 2xl:items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease }}
              className="relative top-0 z-10 mx-auto flex flex-row gap-4 lg:top-14"
            >
              <StarAnimated className="invisible hidden md:visible md:block" />
              <h1 className="flex h-full w-max flex-col justify-between gap-96 text-center font-serif text-6xl font-light leading-[1] tracking-tight text-red md:flex-row md:justify-center md:gap-4 md:text-7xl lg:text-8xl 2xl:text-[130px]">
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
              className="invisible relative -left-20 top-20 z-20 hidden max-w-xs flex-row items-stretch justify-between self-center font-serif text-xl font-normal tracking-normal text-red md:visible md:-left-16 md:top-10 md:flex md:flex-col lg:top-20"
            >
              <span className="relative -left-8 flex flex-row gap-4">
                <StarAnimated />
                <p className="mb-8 leading-relaxed">
                  Creative make up artist working in industry since 2019
                </p>
              </span>
              <span className="relative -left-8 flex flex-row gap-4">
                <StarAnimated />
                <p className="mb-8 leading-relaxed">
                  Specializing in makeup for music videos, commercials and photo
                  sessions.
                </p>
              </span>
              <ButtonLink href="/about" className="text-xl" scroll={false}>
                Get to know me better
              </ButtonLink>
            </motion.div>
            <motion.div className="absolute inset-0 z-0 flex flex-col items-center justify-center md:visible md:-top-[18%] md:left-[55%] lg:top-[-54px] 2xl:left-[40%]">
              <MaskedShape width={shapeSize.width} image={"/DariaIrena.jpeg"} />
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
}
