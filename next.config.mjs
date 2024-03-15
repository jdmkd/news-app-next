/**
 * @type {import('next').NextConfig}
 **/

// import('next').NextConfig

// import('dotenv').config();

const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'fdn.gsmarena.com',
          port: '',
          // pathname: '',
        },
        {
          protocol: 'https',
          hostname:'assets.weforum.org',
          port: '',
          pathname: '',
        },
        {
          protocol: 'https',
          hostname:'www.hindustantimes.com',
          port: '',
          pathname: '',
        },
        {
          protocol: 'https',
          hostname:'sc0.blr1.cdn.digitaloceanspaces.com',
          port: '',
          pathname: '',
        },
        {
          protocol: 'https',
          hostname:'www.livemint.com',
          port: '',
          pathname: '',
        },
        // '*','fdn.gsmarena.com','www.hindustantimes.com', 'sc0.blr1.cdn.digitaloceanspaces.com','www.livemint.com',''
      ],
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
    // env: {
    //   API_KEY: process.env.API_KEY,
    // },
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
