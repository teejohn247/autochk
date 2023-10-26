/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    images: {
        domains: ['storage.googleapis.com','media.autochek.africa'],
    },
    
}

module.exports = nextConfig
