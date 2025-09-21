// /lib/seo.ts
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site.config';

type EventItem = typeof import('@/mocks').events[number];

export function excerpt(s?: string, max = 160) {
  const txt = (s ?? '').replace(/\s+/g, ' ').trim();
  return txt.length > max ? txt.slice(0, max - 1) + '…' : txt;
}

// events içinden en günceli al
export function pickLatestEvent(events: EventItem[]) {
  return [...events].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )[0];
}

export function homepageMetadata({
  title,
  description,
  image,
  canonical = '/',
}: {
  title: string;
  description: string;
  image?: string;
  canonical?: string;
}): Metadata {
  const metadataBase = new URL(siteConfig.siteUrl);
  return {
    metadataBase,
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    alternates: {
      canonical,
      languages: { 'tr-TR': canonical },
    },
    openGraph: {
      locale: siteConfig.locale,
      type: 'website',
      url: canonical,
      siteName: siteConfig.name,
      title,
      description,
      images: image
        ? [{ url: image, width: 1200, height: 630, alt: title }]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      site: siteConfig.twitter || undefined,
      title,
      description,
      images: image ? [image] : undefined,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}