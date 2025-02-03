import type { NextConfig } from "next";
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const nextConfig: NextConfig = {
  webpack(config) {
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    return config;
  },
  // Alte configurații Next.js (dacă este necesar)
};

export default nextConfig;
