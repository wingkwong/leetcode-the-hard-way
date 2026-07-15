import type { Metadata } from 'next';
import Script from 'next/script';
import { RootProvider } from 'fumadocs-ui/provider/next';
import 'fumadocs-ui/style.css';
import 'katex/dist/katex.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'LeetCode The Hard Way',
  description: 'From Absolute Beginner to Quitter',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <RootProvider>{children}</RootProvider>
        <Script
          async
          crossOrigin="anonymous"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4531209581366540"
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-NY80BVQV8L"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NY80BVQV8L');
          `}
        </Script>
      </body>
    </html>
  );
}
