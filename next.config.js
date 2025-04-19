/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/:pattern',
        destination: '/patterns/:pattern',
      },
    ];
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
