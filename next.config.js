/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false // it should be false by default 

}

module.exports = nextConfig

module.exports = {
  async redirects() {
    return [
      {
        source: '/Inicio',
        destination: '/',
        permanent: true,
      },
      {
        source: '/Quem%20Somos',
        destination: '/quem-somos',
        permanent: true,
      },
      {
        source: '/finanças',
        destination: '/financas',
        permanent: true,
      },
      {
        source: '/educação',
        destination: '/educacao',
        permanent: true,
      },
    ]
  },

}