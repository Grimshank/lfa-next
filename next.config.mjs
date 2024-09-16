/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
        pathname: '/**',
     },
      {
        protocol: 'https',
        hostname: 'scontent-hou1-1.cdninstagram.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};


export default nextConfig;
