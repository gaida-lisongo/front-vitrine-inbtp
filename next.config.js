/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        port: "",
      },
    ],
    domains: ['res.cloudinary.com', 'localhost', 'inbtp.net'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  eslint: {
    dirs: ['pages', 'components', 'lib', 'src']
  }
}

module.exports = nextConfig;
