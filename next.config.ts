import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "img-src 'self' data: https:",
              "script-src 'self' 'unsafe-inline' https: https://assets.calendly.com",
              "style-src 'self' 'unsafe-inline' https:",
              "font-src 'self' https:",
              "connect-src 'self' https:",
              "frame-src 'self' https://calendly.com",
              "child-src 'self' https://calendly.com",
            ].join("; "),
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
      {
        source: "/:path*\\.(jpg|jpeg|png|gif|ico|svg|webp|woff|woff2|ttf|eot)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
