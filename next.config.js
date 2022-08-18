/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["commerce.ibo.com"],
  },
};

module.exports = nextConfig;
