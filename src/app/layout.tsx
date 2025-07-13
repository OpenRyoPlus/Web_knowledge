import Script from "next/script";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "スキマ時間に学べる世界の教養",
  description: "スキマ時間で歴史・科学・哲学など世界の教養をサクッと学べる、カード形式の無料Webアプリ。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <meta
          name="google-site-verification"
          content="vDE2ReYo84_bBC_zRlqzXubVry6GQtDJWtxeC_9lieY"
        />
        {/* Google Analytics tag */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-G5D4Y3YE4H" />
        <Script
          id="ga"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-G5D4Y3YE4H');
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
