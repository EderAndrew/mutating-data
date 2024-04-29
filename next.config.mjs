/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            port: '',
            pathname: '/di26olmdo/image/upload/**',
            },
        ],
    },
};

export default nextConfig;
