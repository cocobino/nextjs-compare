import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
const withVanillaExtract = createVanillaExtractPlugin({
  identifiers: "debug",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
};

export default withVanillaExtract(nextConfig);
