/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ["components", "hooks", "library", "pages", "types", "utilities"],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
