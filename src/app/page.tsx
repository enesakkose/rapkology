import Image from 'next/image'
import HeroSlider from '@/components/hero-slider'
import Trends from '@/components/trends'
import MonthlyFavorites from '@/components/monthly-favorites'
import Discover from '@/components/discover'
import { homepageMetadata, pickLatestEvent, excerpt } from '@/lib/seo'
import type { Metadata } from 'next'
import { JsonLd } from '@/components/json-ld'
import { events, tags } from '@/mocks'
import { siteConfig } from '@/config/site.config'

export async function generateMetadata(): Promise<Metadata> {
  const latest = pickLatestEvent(events)
  const title = 'Türkçe Rap – Yeni Çıkanlar, Performanslar ve Trendler'
  const description = excerpt(
    latest?.attributes?.seo?.metaDescription ||
      latest?.attributes?.desc ||
      'Rapkology: Türkçe rap sahnesinden en yeni parçalar, resmi videolar ve POOL SESSIONS performansları.'
  )
  const image = latest?.attributes?.img
  return homepageMetadata({ title, description, image, canonical: '/' })
}

export const revalidate = 60

export default function Home() {
  const websiteLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.siteUrl + '/',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.siteUrl}/search?q={query}`,
      'query-input': 'required name=query',
    },
    inLanguage: 'tr-TR',
  }

  const listLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: events.slice(0, 10).map((e, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${siteConfig.siteUrl}/${e.attributes.slug}`,
      name: e.attributes.title ?? e.attributes.seo?.metaTitle,
      image: e.attributes.img,
      datePublished: e.createdAt,
    })),
  }

  const tagsLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Etiketler',
    hasPart: tags.map((t) => ({
      '@type': 'Thing',
      name: t,
      url: `${siteConfig.siteUrl}/tag/${encodeURIComponent(t)}`,
    })),
  }

  return (
    <section>
      <JsonLd data={websiteLd} />
      <JsonLd data={listLd} />
      <JsonLd data={tagsLd} />

      <HeroSlider />
      <Image
        src='/assets/images/hero-2.png'
        alt='Rapkology'
        width={0}
        height={0}
        unoptimized
        loading='eager'
        className='w-full h-auto'
      />
      <Trends />
      <MonthlyFavorites />
      <Discover />
    </section>
  )
}
