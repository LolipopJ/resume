import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const isGithubActions = process.env.GITHUB_ACTIONS || false;
let assetPrefix = "";
let basePath = "";

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: { unoptimized: true },
  assetPrefix,
  basePath,
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
