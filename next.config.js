/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  transpilePackages: ['sanity', 'next-sanity', '@sanity/ui', '@sanity/icons', '@sanity/logos'],
  // If you need to support SASS, Next.js supports it out of the box if 'sass' is installed.
};

module.exports = nextConfig;
