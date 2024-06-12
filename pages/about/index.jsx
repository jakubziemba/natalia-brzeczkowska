import { client } from "../../sanity/lib/client";
import { groq } from "next-sanity";
import { PortableText } from "@portabletext/react";

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
    groq`*[_type == "page" && slug.current == "about"][0]`,
  );

  return {
    props: {
      data,
    },
  };
}

export default function About({ data }) {
  // console.log(data);

  const fields = data.fields[0];

  console.log(fields.description);

  return (
    <Layout>
      <section className="py-24 2xl:mx-auto 2xl:max-w-screen-2xl">
        <div className="flex flex-col items-center justify-center gap-8 px-6">
          <h1 className="font-serif text-6xl">{fields.heading}</h1>
          <div className="text-lg leading-6">
            <PortableText
              value={fields.description}
              // serializers={serializers}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
