const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.joobok.or.kr",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "staticmap.kakao.com",
        pathname: "/**",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
