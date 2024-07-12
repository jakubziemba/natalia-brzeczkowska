import Head from "next/head";
import { motion } from "framer-motion";
import Layout from "../_components/layout";
import MaskedShape from "../_components/masked-shape";
import StarAnimated from "../_components/star/star-animated";
import LinkButton from "@/_components/button-link";

const DELAY = 1;
const shapeSize = {
  width: 700,
  height: 700,
};
const ease = [0.17, 0, 0.55, 1];
const MotionButton = motion(LinkButton);

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
              <h1 className="flex h-full w-max flex-col justify-between gap-96 text-center text-6xl leading-[1] text-red md:flex-row md:justify-center md:gap-4 md:text-7xl lg:text-8xl 2xl:text-[130px]">
                <span>Natalia</span>
                <span>Brzęczkowska</span>
              </h1>
            </motion.div>
            <motion.div
              // initial="initial"
              // animate="animate"
              // variants={{
              //   initial: { opacity: 0 },
              //   animate: {
              //     opacity: 1,
              //     transition: {
              //       duration: 0.5,
              //       delay: DELAY,
              //       ease,
              //     },
              //   },
              // }}
              className="invisible relative -left-20 top-20 z-20 hidden max-w-xs flex-row items-stretch justify-between self-center text-xl text-red md:visible md:-left-16 md:top-10 md:flex md:flex-col lg:top-20"
            >
              <motion.span
                custom={1}
                initial="initial"
                animate="animate"
                variants={{
                  initial: { y: 20, opacity: 0 },
                  animate: (custom) => ({
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.5,
                      delay: DELAY + custom * 0.11,
                      ease,
                    },
                  }),
                }}
                className="relative -left-8 flex flex-row gap-4"
              >
                <StarAnimated />
                <p className="mb-8 leading-relaxed">
                  Creative make up artist working in industry since 2019
                </p>
              </motion.span>
              <motion.span
                custom={2}
                initial="initial"
                animate="animate"
                variants={{
                  initial: { y: 20, opacity: 0 },
                  animate: (custom) => ({
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.5,
                      delay: DELAY + custom * 0.11,
                      ease,
                    },
                  }),
                }}
                className="relative -left-8 flex flex-row gap-4"
              >
                <StarAnimated />
                <p className="mb-8 leading-relaxed">
                  Specializing in makeup for music videos, commercials and photo
                  sessions.
                </p>
              </motion.span>
              <motion.div
                custom={3}
                initial="initial"
                animate="animate"
                whileHover="whileHover"
                variants={{
                  initial: { y: 20, opacity: 0 },
                  animate: (custom) => ({
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.5,
                      delay: DELAY + custom * 0.11,
                      ease,
                    },
                  }),
                }}
              >
                <LinkButton href="/about" className="text-xl" scroll={false}>
                  Get to know me better
                </LinkButton>
              </motion.div>
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
