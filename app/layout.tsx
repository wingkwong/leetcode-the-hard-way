import type { Metadata } from 'next';
import Script from 'next/script';
import { RootProvider } from 'fumadocs-ui/provider/next';
import {
  JsonLdScript,
  createOrganizationJsonLd,
  createWebSiteJsonLd,
  defaultDescription,
  defaultPreviewImage,
  siteName,
  siteUrl,
} from '../lib/seo';
import 'fumadocs-ui/style.css';
import 'katex/dist/katex.css';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  icons: {
    icon: '/img/favicon.ico',
    shortcut: '/img/favicon.ico',
  },
  openGraph: {
    title: siteName,
    description: defaultDescription,
    url: siteUrl,
    siteName,
    type: 'website',
    images: [
      {
        url: defaultPreviewImage,
        width: 1881,
        height: 535,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: defaultDescription,
    images: [defaultPreviewImage],
  },
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
        <JsonLdScript data={createWebSiteJsonLd()} id="website-json-ld" />
        <JsonLdScript
          data={createOrganizationJsonLd()}
          id="organization-json-ld"
        />
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
