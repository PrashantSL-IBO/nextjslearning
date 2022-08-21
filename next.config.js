/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "commerce.ibo.com",
      "www.ibo.com",
      "ibo.com",
      "randomuser.me",
      "https://randomuser.me",
    ],
  },
};

module.exports = nextConfig;
