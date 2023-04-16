/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
})

module.exports = withPWA({
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/cv',
        destination: '/assets/Mahmoud Emad Eldin - Frontend Engineer CV.pdf',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/imahmoudemad',
        permanent: true,
      },
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/in/imahmoudemad',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://github.com/iMahmoudEmad',
        permanent: true,
      },
    ]
  }
})