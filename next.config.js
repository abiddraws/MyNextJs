const withNextIntl = require("next-intl/plugin")(
    // This is the default (also the `src` folder is supported out of the box)
    "./i18n.ts",
  );

/** @type {import('next').NextConfig} */
/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      ppr: true,
    },
    images: {
      formats: ["image/avif", "image/webp"],
    },
    headers() {
      return [
        {
          source: "/(.*)",
          headers: securityHeaders,
        },
      ];
    },
  };

  const securityHeaders = [
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
    // {
    //   key: "Content-Security-Policy",
    //   value: ContentSecurityPolicy.replace(/\n/g, ""),
    // },
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
    {
      key: "Referrer-Policy",
      value: "origin-when-cross-origin",
    },
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
    {
      key: "X-Frame-Options",
      value: "DENY",
    },
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
    {
      key: "X-Content-Type-Options",
      value: "nosniff",
    },
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
    {
      key: "X-DNS-Prefetch-Control",
      value: "on",
    },
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
    {
      key: "Strict-Transport-Security",
      value: "max-age=31536000; includeSubDomains; preload",
    },
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
    {
      key: "Permissions-Policy",
      value: "camera=(), microphone=(), geolocation=()",
    },
  ];

module.exports = withNextIntl({...nextConfig})
