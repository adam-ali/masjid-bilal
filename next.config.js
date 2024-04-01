/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // swcMinify: true

  // disableStaticImages: true
  // formats: []
}

module.exports = nextConfig
