import type { NextConfig } from 'next';

console.log("Check if next.config.ts is read and executed. -------------1---------------- JM ");

const nextConfig: NextConfig = {
  
  devIndicators: {
    position: 'top-right',
  },

  console.log("Check if next.config.ts is read and executed. ------------2----------------- JM ");
  
  typescript: {
    ignoreBuildErrors: false,
    tsconfigPath: 'tsconfig.json',
  },
  
};

export default nextConfig;
