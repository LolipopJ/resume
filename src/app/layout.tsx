import { Suspense, type ReactNode } from "react";
import { type Metadata } from "next";

import { GlobalProvider } from "@/contexts/global";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./global.css";

export const metadata: Metadata = {
  title: "Lolipop's Resume",
  description: "Powered by Next.js",
  icons: { icon: "./favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <Suspense fallback={null}>
          <GlobalProvider>{children}</GlobalProvider>
        </Suspense>
      </body>
    </html>
  );
}
