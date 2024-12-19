import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

import "./globals.css";
import React from "react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" type="image/png" href="./src/images/logos/GithubDp.png" sizes="32x32" />
      </head>
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
