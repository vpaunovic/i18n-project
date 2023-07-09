const { i18n } = require("./i18n");

/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects() {
    return [
      {
        source: "/",
        destination: `/${i18n.defaultLocale}`,
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
