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
    <html
      lang="id"
      className="h-full w-full antialiased overflow-hidden select-none"
      style={{ overflow: "hidden", scrollbarWidth: "none" }}
    >
      <body
        className="h-full w-full overflow-hidden flex flex-col font-sans bg-black select-none"
        style={{ overflow: "hidden", scrollbarWidth: "none", margin: 0 }}
      >
        {children}
      </body>
    </html>
  );
}

