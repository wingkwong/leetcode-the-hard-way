import type { Metadata } from 'next';

export const siteName = 'LeetCode The Hard Way';
export const siteUrl = 'https://leetcodethehardway.com';
export const defaultDescription =
  'A structured resource for learning data structures and algorithms through tutorials, templates, roadmaps, and LeetCode solution explanations.';
export const defaultPreviewImage = '/img/og.png';
export const defaultPreviewImageHeight = 630;
export const defaultPreviewImageWidth = 1200;

export function absoluteUrl(pathname = '/') {
  const url = new URL(pathname, siteUrl);
  url.pathname = formatPagePathname(url.pathname);
  return url.toString();
}

export function formatPagePathname(pathname = '/') {
  if (isExternalHref(pathname) || pathname.startsWith('#')) return pathname;

  const hashIndex = pathname.indexOf('#');
  const hash = hashIndex === -1 ? '' : pathname.slice(hashIndex);
  const pathWithSearch =
    hashIndex === -1 ? pathname : pathname.slice(0, hashIndex);
  const searchIndex = pathWithSearch.indexOf('?');
  const search = searchIndex === -1 ? '' : pathWithSearch.slice(searchIndex);
  const path =
    searchIndex === -1 ? pathWithSearch : pathWithSearch.slice(0, searchIndex);

  if (path === '' || path === '/') return `${path || '/'}${search}${hash}`;
  if (path.endsWith('/') || hasFileExtension(path)) {
    return `${path}${search}${hash}`;
  }

  return `${path}/${search}${hash}`;
}

function isExternalHref(href: string) {
  return /^[a-z][a-z\d+.-]*:/i.test(href);
}

function hasFileExtension(pathname: string) {
  const segment = pathname.split('/').at(-1) ?? '';
  return /\.[a-z0-9]+$/i.test(segment);
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
