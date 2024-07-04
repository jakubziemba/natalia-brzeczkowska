import Head from "next/head";
import { client } from "../../sanity/lib/client";
import { groq } from "next-sanity";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "@/_components/layout";
import Image from "next/image";
import PageHeading from "@/_components/page-heading";
import AnimatedText from "@/_components/animated-text";
import { PortableText } from "@portabletext/react";
import ButtonLink from "@/_components/button-link";

const components = {
  block: {
    normal: ({ children }) => (
      <AnimatedText>
        <p>{children}</p>
      </AnimatedText>
    ),
  },
};

export async function getStaticProps() {
  const data = await client.fetch(
    groq`*[_type == "page" && slug.current == "about"][0]{
      ...,
      "fields": fields[0]{
        ...,
        "image": image.asset->,
      },
    }`,
  );

  return {
    props: {
      data,
    },
  };
}

export default function About({ data }) {
  const fields = data.fields;

  return (
    <>
      <Head>
        <title>Nati Makeupik &#x2022; About</title>
      </Head>
      <Layout>
        <section className="pb-24 2xl:mx-auto 2xl:max-w-screen-2xl">
          <PageHeading>About me</PageHeading>

          <div className="flex flex-col items-center justify-center gap-8 px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
              className="overflow-hidden rounded-[28px] md:rounded-[36px]"
            >
              <motion.div
                initial={{
                  scale: 1.1,
                }}
                animate={{
                  scale: 1,
                }}
                transition={{
                  type: "spring",
                  bounce: 0,
                  duration: 1,
                }}
              >
                <Image
                  src={fields?.image.url || ""}
                  width={450}
                  height={700}
                  priority
                  loading="eager"
                  alt="Natalia Brzęczkowska"
                  className="h-auto w-full max-w-2xl flex-1 object-cover"
                />
              </motion.div>
            </motion.div>
            <div className="flex flex-1 flex-col gap-4 py-12">
              <div className="max-w-xl space-y-16 text-pretty text-center font-serif text-3xl font-[450] leading-normal md:max-w-2xl md:text-5xl md:leading-normal md:tracking-[-0.025em]">
                <PortableText
                  value={fields.description}
                  components={components}
                />
              </div>
            </div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ margin: "-15%", once: true }}
              transition={{
                type: "tween",
                ease: "easeInOut",
                duration: 0.5,
              }}
              className="mx-auto flex items-center justify-center py-12"
            >
              <ButtonLink href="/contact">Get in touch</ButtonLink>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
}
