/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/apis/:path*',
        destination: `${process.env.REST_API_URL}/apis/:path*`,
      },
    ]
  },

  images:
    {
      remotePatterns: [
  {
    protocol: 'http',
    hostname: 'placekitten.com',
    port: '',
    pathname: '/**/**',
  },
]
    }
}

module.exports = nextConfig
