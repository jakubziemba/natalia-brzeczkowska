import { client } from "../../sanity/lib/client";
import { groq } from "next-sanity";
import { PortableText } from "@portabletext/react";
import { motion } from "framer-motion";
import Image from "next/image";

import Layout from "@/_components/layout";

const serializers = {
  block: {
    p: ({ children }) => <div className="text-lg leading-6">{children}</div>,
  },
  // block: ({ children }) => (
  //   <div className="text-lg leading-6">{children}</div>
  // ),
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
      <section className="py-16 2xl:mx-auto 2xl:max-w-screen-2xl">
        <div className="mb-20 mt-1 flex justify-center">
          <motion.h1 className="col-span-full col-start-6 font-serif text-6xl text-red">
            About me
          </motion.h1>
        </div>

        <div className="flex items-start justify-center gap-8 px-6 md:grid-cols-2">
          <Image
            src={fields?.image || ""}
            width={350}
            height={700}
            priority
            loading="eager"
            alt="Natalia Brzęczkowska"
            className="h-full w-auto flex-1"
          />
          <div className="flex flex-1 flex-col gap-4">
            <div className="font-regular space-y-4 text-pretty font-sans text-xl leading-8">
              <PortableText
                value={fields.description}
                // serializers={serializers}
                className="font-serif text-lg leading-normal"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
