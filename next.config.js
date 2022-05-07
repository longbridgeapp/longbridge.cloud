const webpack = require('./config/webpack')

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack,
  reactStrictMode: true,
}

module.exports = nextConfig
