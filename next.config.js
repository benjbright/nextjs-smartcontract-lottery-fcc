/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        images: {
            unoptimized: true,
            path: "/",
        },
    },
}

module.exports = nextConfig
