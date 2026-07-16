import type { Metadata } from 'next';

export const siteName = 'LeetCode The Hard Way';
export const siteUrl = 'https://leetcodethehardway.com';
export const defaultDescription =
  'A structured resource for learning data structures and algorithms through tutorials, templates, roadmaps, and LeetCode solution explanations.';
export const defaultPreviewImage = '/img/og.png';
export const defaultPreviewImageHeight = 630;
export const defaultPreviewImageWidth = 1200;

export function absoluteUrl(pathname = '/') {
  return new URL(pathname, siteUrl).toString();
}

export function formatPageTitle(title: string) {
  return title === siteName ? siteName : `${title} | ${siteName}`;
}

export function createPageMetadata({
  description,
  pathname,
  title,
  type = 'article',
}: {
  description?: string;
  pathname: string;
  title: string;
  type?: 'article' | 'website';
}): Metadata {
  const url = absoluteUrl(pathname);
  const pageDescription = description ?? defaultDescription;
  const pageTitle = formatPageTitle(title);

  return {
    title: {
      absolute: pageTitle,
    },
    description: pageDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName,
      type,
      images: [
        {
          url: defaultPreviewImage,
          width: defaultPreviewImageWidth,
          height: defaultPreviewImageHeight,
          alt: siteName,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [defaultPreviewImage],
    },
  };
}

export function createWebSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: siteUrl,
  };
}

export function createOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: siteUrl,
    logo: absoluteUrl('/img/logo.svg'),
  };
}

export function createTechArticleJsonLd({
  description,
  pathname,
  title,
}: {
  description?: string;
  pathname: string;
  title: string;
}) {
  const pageDescription = description ?? defaultDescription;

  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: title,
    description: pageDescription,
    mainEntityOfPage: absoluteUrl(pathname),
    publisher: {
      '@type': 'Organization',
      name: siteName,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('/img/logo.svg'),
      },
    },
  };
}

export function JsonLdScript({ data, id }: { data: unknown; id: string }) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
