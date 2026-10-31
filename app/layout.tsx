import type { Metadata } from "next";
import "./globals.css";
import { SpiderWebCursorTrail } from "@/components/comic/SpiderWebCursorTrail";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio with Comic Push Intro Animation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">
        {/* <SpiderWebCursorTrail /> */}
        {children}
      </body>
    </html>
  );
}

