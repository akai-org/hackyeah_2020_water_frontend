const withPWA = require("next-pwa");

module.exports = withPWA({
  // reactStrictMode: true,
//   devIndicators: {
//     autoPrerender: false,
//   },
  target:"serverless",
  webpack: (config, {isServer}) => {
    if (isServer) {
      // require("./scripts/generate-sitemap");
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
/*
    "highcharts": "^8.2.0",
    "react-google-recaptcha": "^2.1.0",
    "react-icons": "^3.11.0",
    "react-use-window-localstorage": "^1.0.15","*/