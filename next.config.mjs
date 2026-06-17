/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Vocabulary data is bundled locally; images are decorative/SVG only.
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
