import { client } from "../../sanity/lib/client";
import { groq } from "next-sanity";
import { PortableText } from "@portabletext/react";
import { motion } from "framer-motion";
import Image from "next/image";
import PageHeading from "@/_components/page-heading";

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
      <section className="pb-24 2xl:mx-auto 2xl:max-w-screen-2xl">
        <PageHeading>About me</PageHeading>

        <div className="flex flex-col items-center justify-center gap-8 px-6">
          <Image
            src={fields?.image || ""}
            width={450}
            height={700}
            priority
            loading="eager"
            alt="Natalia Brzęczkowska"
            className="h-full w-auto flex-1"
          />
          <div className="flex flex-1 flex-col gap-4 py-12">
            <div className="max-w-2xl space-y-16 text-center font-sans text-2xl font-light leading-relaxed md:text-4xl md:tracking-[-0.015em]">
              <PortableText
                value={fields.description}
                // serializers={serializers}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
