import { client } from "../../sanity/lib/client";
import { groq } from "next-sanity";
import { PortableText } from "@portabletext/react";
import { motion } from "framer-motion";
import Image from "next/image";
import PageHeading from "@/_components/page-heading";

import Layout from "@/_components/layout";

const components = {
  block: {
    normal: ({ children }) => (
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ margin: "-15%", once: true }}
        transition={{
          type: "tween",
          ease: "easeInOut",
          duration: 0.5,
        }}
      >
        {children}
      </motion.p>
    ),
  },
};

export async function getStaticProps() {
  const data = await client.fetch(
    groq`*[_type == "page" && slug.current == "about"][0]{
      ...,
      "fields": fields[0]{
        ...,
        "image": image.asset->url,
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
    <Layout>
      <section className="pb-24 2xl:mx-auto 2xl:max-w-screen-2xl">
        <PageHeading>About me</PageHeading>

        <div className="flex flex-col items-center justify-center gap-8 px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
            className="overflow-hidden rounded-[40px]"
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
                src={fields?.image || ""}
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
            <div className="max-w-2xl space-y-16 text-center font-serif text-2xl font-[420] md:text-4xl md:leading-normal md:tracking-[-0.015em]">
              <PortableText
                value={fields.description}
                components={components}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
