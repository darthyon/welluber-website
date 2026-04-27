import type { NextConfig } from 'next'
import fs from 'fs'
import path from 'path'

function findRoot(dir: string): string {
  if (fs.existsSync(path.join(dir, 'node_modules'))) return dir
  const parent = path.dirname(dir)
  return parent === dir ? dir : findRoot(parent)
}

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: findRoot(__dirname),
  },
}

export default nextConfig
