/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/black-ops-four/generator',
        destination: '/black-ops/four/generator',
        permanent: true, // 301 redirect
      },
      {
        source: '/black-ops-four/zombies-generator',
        destination: '/black-ops/four/zombies-generator',
        permanent: true, // 301 redirect
      },
      {
        source: '/black-ops-four/info',
        destination: '/black-ops/four/info',
        permanent: true, // 301 redirect
      },
      {
        source: '/cold-war/generator',
        destination: '/black-ops/cold-war/generator',
        permanent: true, // 301 redirect
      },
      {
        source: '/cold-war/generator',
        destination: '/black-ops/cold-war/zombies-generator',
        permanent: true, // 301 redirect
      },
      {
        source: '/cold-war/info',
        destination: '/black-ops/cold-war/info',
        permanent: true, // 301 redirect
      },
    ];
  },
};

export default nextConfig;
