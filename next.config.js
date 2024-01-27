const createNextIntlPlugin = require("next-intl/plugin");
const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "bizweb.dktcdn.net",
      "inanhungnguyet.vercel.app",
      "images.unsplash.com",
    ],
  },
};

module.exports = withNextIntl(nextConfig);
