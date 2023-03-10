/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: [
      path.join(__dirname, 'app/frontend/styles/scss'),
      path.join(__dirname, 'app/backend/styles/scss'),
    ],
  },
};

module.exports = nextConfig;
