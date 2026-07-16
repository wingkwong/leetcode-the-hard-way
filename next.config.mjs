import { createMDX } from 'fumadocs-mdx/next';
import path from 'node:path';

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  trailingSlash: false,
  webpack(config) {
    config.resolve.alias['collections/server'] = path.resolve(
      process.cwd(),
      '.source/server.ts',
    );
    return config;
  },
  async redirects() {
    const solutionRanges = Array.from({ length: 34 }, (_, index) => {
      const start = index * 100;
      const end = start + 99;
      const folder = `${String(start).padStart(4, '0')}-${String(end).padStart(4, '0')}`;
      return {
        source: `/solutions/category/${String(start).padStart(4, '0')}---${String(end).padStart(4, '0')}`,
        destination: `/solutions/${folder}`,
        permanent: true,
      };
    });

    return [
      {
        source: '/tutorials/category/basic-topics',
        destination: '/tutorials/basic-topics',
        permanent: true,
      },
      {
        source: '/tutorials/category/sorting',
        destination: '/tutorials/basic-topics/sorting',
        permanent: true,
      },
      {
        source: '/tutorials/category/graph-theory',
        destination: '/tutorials/graph-theory',
        permanent: true,
      },
      {
        source: '/tutorials/category/math',
        destination: '/tutorials/math',
        permanent: true,
      },
      {
        source: '/tutorials/category/number-theory',
        destination: '/tutorials/math/number-theory',
        permanent: true,
      },
      {
        source: '/tutorials/category/strings',
        destination: '/tutorials/strings',
        permanent: true,
      },
      {
        source: '/solutions/tags',
        destination: '/solutions',
        permanent: false,
      },
      {
        source: '/solutions/tags/',
        destination: '/solutions',
        permanent: false,
      },
      ...solutionRanges,
    ];
  },
};

const withMDX = createMDX();

export default withMDX(config);
