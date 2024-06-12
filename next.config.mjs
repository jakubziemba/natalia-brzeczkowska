import withPlaiceholder from "@plaiceholder/next";

export default (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    images: {
      // domains: ["cdn.sanity.io"],
      remotePatterns: [
        {
          protocol: "https",
          hostname: "cdn.sanity.io",
          port: "",
        },
      ],
    },
  };
  return withPlaiceholder(nextConfig);
};
