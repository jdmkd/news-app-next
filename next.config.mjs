/** @type {import('next').NextConfig} */
import('next').NextConfig

const nextConfig = {
    images: {
        domains: ['*','fdn.gsmarena.com','www.hindustantimes.com', 'sc0.blr1.cdn.digitaloceanspaces.com','www.livemint.com',''],
    },
    async headers() {
        return [
          {
            source: '/(.*)',
            headers: [
              {
                key: 'Access-Control-Allow-Origin',
                value: '*',
              },
            ],
          },
        ];
    },
};

export default nextConfig;

// module.exports = {
//     images: {
//       remotePatterns: [
//         {
//             protocol: 'https',
//             hostname: 'fdn.gsmarena.com',
//             port: '',
//             pathname: '/account123/**',
//         },
//         {
//             protocol: 'https',
//             hostname:'assets.weforum.org',
//             port: '',
//             pathname: '/account123/**',
//         },
//       ],
//     },
//   }
