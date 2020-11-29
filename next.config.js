const withPWA = require("next-pwa");

module.exports = withPWA({
  // reactStrictMode: true,
  devIndicators: {
    autoPrerender: false,
  },
  target:"serverless",
  webpack: (config, {isServer}) => {
    if (isServer) {
      require("./scripts/build-manifest");
      require("./scripts/google-fonts");
    }
    return config;
  },
  pwa: {
    disable: process.env.NODE_ENV === "development",
    dest: "public",
  },
});