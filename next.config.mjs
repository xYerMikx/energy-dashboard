import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    prependData: `
      @import "./src/styles/_vars.scss";
    `,
  },
  reactStrictMode: false,
};

export default withNextIntl(nextConfig);
