/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/projects.html',
        destination: '/#projects',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig

