import Head from "next/head";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Layout from "@/_components/layout";
import PageHeading from "@/_components/page-heading";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (copied) return;

    navigator.clipboard.writeText("nbrzeczkowska@gmail.com");
    setCopied(true);
  };

  useEffect(() => {
    if (!copied) return;

    const timer = setTimeout(() => {
      setCopied(false);
    }, 2000);

    return () => clearTimeout(timer);
  });

  return (
    <>
      <Head>
        <title>Nati Makeupik &#x2022; Contact</title>
      </Head>
      <Layout>
        <section className="min-h-[calc(100vh-var(--nav-height))] px-4 2xl:mx-auto 2xl:max-w-screen-2xl 2xl:px-0">
          <PageHeading>Get in touch</PageHeading>

          <div className="flex flex-1 flex-col gap-20 text-center font-serif text-3xl font-[350] lg:text-6xl">
            <div className="flex flex-col gap-4">
              <AnimatePresence mode="wait">
                <motion.p
                  key={copied ? "copied" : "not-copied"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    type: "tween",
                    ease: "easeInOut",
                    duration: 0.3,
                    delay: 0.05,
                  }}
                  className="text-xl"
                >
                  {copied ? (
                    <span>(email copied!)</span>
                  ) : (
                    <span>(click to copy e-mail to clipboard!)</span>
                  )}
                </motion.p>
              </AnimatePresence>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  type: "tween",
                  ease: "easeInOut",
                  duration: 0.3,
                  delay: 0.07,
                }}
                onClick={() => handleCopyEmail()}
                className="group relative mx-auto block w-max cursor-pointer overflow-hidden py-4 transition-all duration-[200ms] hover:font-[450] active:scale-[0.98]"
              >
                nbrzeczkowska@gmail.com
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                type: "tween",
                ease: "easeInOut",
                duration: 0.34,
                delay: 0.12,
              }}
              className="flex flex-col gap-10 text-4xl lg:text-5xl"
            >
              <h3>Social:</h3>
              <ul className="flex flex-col gap-4">
                <li className="cursor-pointer bg-clip-text transition-all duration-[200ms] hover:font-[450]">
                  <a href="https://www.instagram.com/nati.makeupik/">
                    Instagram
                  </a>
                </li>
                <li className="cursor-pointer transition-all duration-150 hover:font-[450]">
                  <a href="https://filmpolski.pl/fp/index.php?osoba=11194834">
                    Film Polski
                  </a>
                </li>
                <li className="cursor-not-allowed text-red/40">LinkedIn</li>
              </ul>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
}
