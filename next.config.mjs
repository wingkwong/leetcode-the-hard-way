import { createMDX } from 'fumadocs-mdx/next';
import path from 'node:path';

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
  webpack(config) {
    config.resolve.alias['collections/server'] = path.resolve(
      process.cwd(),
      '.source/server.ts',
    );
    return config;
  },
};

const withMDX = createMDX();

export default withMDX(config);
