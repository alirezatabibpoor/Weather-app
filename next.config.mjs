/** @type {import('next').NextConfig} */

import withPWA from "next-pwa";

const nextConfig = {
  reactCompiler: true,
};

export default withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
})(nextConfig);