/** @type {import('next').NextConfig} */
// const prefixPath = (process.env.NODE_ENV === 'production') ? '/test' : ''

const nextConfig = {
  reactStrictMode: true,
  /*
  output: 'export',
  images: {
    unoptimized: true
  },
  assetPrefix: prefixPath,
  basePath: prefixPath,
  trailingSlash: true,
  */
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(svg)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: '[name].[hash].[ext]',
            publicPath: '/_next/static/images/',
            outputPath: 'static/images/',
            esModule: false
          }
        }
      ]
    })
    return config
  }
}
module.exports = nextConfig
