import Image from 'next/image'
import HeroSlider from '@/components/hero-slider'
import Trends from '@/components/trends'
import MonthlyFavorites from '@/components/monthly-favorites'
import Discover from '@/components/discover'

export default function Home() {
  return (
    <section>
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
