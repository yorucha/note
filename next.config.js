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
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: {
                      cleanupIds: false
                    }
                  }
                }]
            }
          }
        }
      ]
    })
    return config
  }
}
module.exports = nextConfig
