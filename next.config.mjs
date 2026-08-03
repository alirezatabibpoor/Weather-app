import withPWA from "@ducanh2912/next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
};

export default withPWA({
  dest: "public",
  register: true,
  disable: process.env.NODE_ENV === "development",
})(nextConfig);