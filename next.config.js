const webpack = require('./config/webpack')

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack,
  assetPrefix: process.env.PUBLIC_ASSET_PATH,
  reactStrictMode: true,
}

module.exports = nextConfig
