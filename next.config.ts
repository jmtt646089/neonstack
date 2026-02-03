import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  
  devIndicators: {
    position: 'top-right',
  },

  typescript: {
    ignoreBuildErrors: false,
    tsconfigPath: 'tsconfig.json',
  },
  
};

export default nextConfig;
