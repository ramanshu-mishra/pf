import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  //  async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/',
  //       permanent: true
  //     },
  //   ];
  // },
 eslint : {
  ignoreDuringBuilds: true,
 } 
};



export default nextConfig;
