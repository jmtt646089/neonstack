import type { NextConfig } from 'next';

console.log("Check if next.config.ts is read and executed. -------------1---------------- JM ");

const nextConfig: NextConfig = {
  
  devIndicators: {
    position: 'top-right',
  },


  
  typescript: {
    ignoreBuildErrors: false,
    tsconfigPath: 'tsconfig.json',
  },
  
};

console.log("Check if next.config.ts is read and executed. -------------2---------------- JM ");

export default nextConfig;
