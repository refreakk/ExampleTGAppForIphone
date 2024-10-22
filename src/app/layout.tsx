"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Script from "next/script";
import Providers from "./providers/providers";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  
  return (
    <html lang="ru">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, viewport-fit=cover, minimum-scale=1.0, maximum-scale=1.0"
        />
        <meta name="color-scheme" content="light" />
        <meta name="format-detection" content="telephone=no"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="MobileOptimized" content="176"/>
        <meta name="HandheldFriendly" content="True"/>
        <meta name="robots" content="noindex,nofollow"/>
        <Script src="https://telegram.org/js/telegram-web-app.js" strategy="beforeInteractive" />
      </head>
      <body className={clsx("bg-gradient-to-tr from-orange-800 to-orange-600 text-white p-2", inter.className, {
        "h-full w-full overflow-hidden": pathname === '/hidden'
      })}>
        {pathname === "/hidden" ? (
          <div className="overflow-y-scroll h-screen">
            <Providers>
              {children}
            </Providers>
          </div>
        ) : (
          <Providers>
            {children}
          </Providers>
        )}
      </body>
    </html>
  );
}
