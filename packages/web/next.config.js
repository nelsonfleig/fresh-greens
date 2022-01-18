/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'artifice-boilerplate.s3.sa-east-1.amazonaws.com',
      'res.cloudinary.com',
      'upload.wikimedia.org',
    ],
  },
};

module.exports = nextConfig;
