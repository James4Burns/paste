/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  eslint: {
    dirs: ["components", "hooks", "library", "pages", "types", "utilities"],
  },
  i18n: { defaultLocale: "en-US", locales: ["en-US"] },
  reactStrictMode: true,
};

module.exports = withBundleAnalyzer(nextConfig);
