import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";
import churchConfig from "@/churches/config";
import { ChurchProvider } from "@/context/ChurchContext";

export const metadata: Metadata = {
  title: `${churchConfig.name} | ${churchConfig.fullName}`,
  description: churchConfig.description,
  openGraph: {
    title: `${churchConfig.name} | ${churchConfig.fullName}`,
    description: churchConfig.description,
    images: [churchConfig.og.image],
    url: churchConfig.og.url,
    siteName: churchConfig.og.siteName,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css"
        />
      </head>
      <body className="antialiased">
        <ChurchProvider config={churchConfig}>
          <Suspense>{children}</Suspense>
        </ChurchProvider>
      </body>
    </html>
  );
}
