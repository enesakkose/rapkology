import type { Metadata } from 'next'
import { Geist, Geist_Mono, Saira_Condensed } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import { siteConfig } from '@/config/site.config'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const sairaCondensed = Saira_Condensed({
  variable: '--font-saira-condensed',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.tagline,
  openGraph: {
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: 'website',
  },
  alternates: { canonical: '/' },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='tr' className='scrollbar-rapkology'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sairaCondensed.variable} antialiased scrollbar-rapkology`}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}
