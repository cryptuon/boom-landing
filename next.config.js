/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "", // <----- THIS IS THE ISSUE
  },
}

module.exports = nextConfig
