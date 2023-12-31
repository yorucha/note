/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  /*
  output: 'export',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  */
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(svg)$/,
      use: [
        {
          loader: '@svgr/webpack'
        }
      ]
    })
    return config
  }
}
module.exports = nextConfig
