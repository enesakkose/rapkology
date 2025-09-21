'use client'

import { useDragScroll } from '@/hooks/useDragScroll'
import Image from 'next/image'
import React from 'react'
import dynamic from 'next/dynamic'
import { cn } from '@/utils/cn'

const YellowWave = dynamic(() => import('../yellow-wave'), { ssr: false })

export default function MonthlyFavorites() {
  const monthlyFavorites = [
    {
      id: 1,
      coverImg: '/assets/images/cover.png',
      ranking: 'Top 10 (2. Sıra)',
      artist: '50 CENT',
      cover: 'CURTIS',
      clipPathStep: 28,
      clipPathHeight: 33,
    },
    {
      id: 2,
      coverImg: '/assets/images/cover.png',
      ranking: 'Top 10 (2. Sıra)',
      artist: '50 CENT',
      cover: 'CURTIS',
      clipPathStep: 30,
      clipPathHeight: 32,
    },
    {
      id: 4,
      coverImg: '/assets/images/cover.png',
      ranking: 'Top 10 (2. Sıra)',
      artist: '50 CENT',
      cover: 'CURTIS',
      clipPathStep: 27,
      clipPathHeight: 33,
    },
    {
      id: 5,
      coverImg: '/assets/images/cover.png',
      ranking: 'Top 10 (2. Sıra)',
      artist: '50 CENT',
      cover: 'CURTIS',
      clipPathStep: 28,
      clipPathHeight: 31,
    },
    {
      id: 6,
      coverImg: '/assets/images/cover.png',
      ranking: 'Top 10 (2. Sıra)',
      artist: '50 CENT',
      cover: 'CURTIS',
      clipPathStep: 29,
      clipPathHeight: 30,
    },
    {
      id: 7,
      coverImg: '/assets/images/cover.png',
      ranking: 'Top 10 (2. Sıra)',
      artist: '50 CENT',
      cover: 'CURTIS',
      clipPathStep: 30,
      clipPathHeight: 31,
    },
    {
      id: 8,
      coverImg: '/assets/images/cover.png',
      ranking: 'Top 10 (2. Sıra)',
      artist: '50 CENT',
      cover: 'CURTIS',
      clipPathStep: 32,
      clipPathHeight: 30,
    },
  ]

  const { ref, handlers } = useDragScroll<HTMLDivElement>()

  return (
    <div className='relative mb-24'>
      <div
        className='w-[370px] bg-white h-24 flex items-center justify-center gap-12 
            [clip-path:polygon(0_0,100%_0,90%_78%,0_100%)] 
            md:w-[37.5rem] md:h-32'
      >
        <Image
          src='/assets/images/youtube-logo.svg'
          alt='youtube'
          width={160}
          height={0}
          unoptimized
          className='w-[120px] md:w-[160px]'
        />
        <Image
          src='/assets/images/spotify-logo.svg'
          alt='spotify'
          width={160}
          height={0}
          unoptimized
          className='w-[120px] md:w-[160px]'
        />
      </div>

      <div
        className='flex flex-col items-start gap-4 
            md:flex-row md:items-center md:justify-between'
      >
        <h1 className='ml-16 mt-16'>
          AYIN <br /> FAVORİLERİ
        </h1>

        <div
          ref={ref}
          {...handlers}
          className='flex items-center gap-12 max-w-full overflow-x-auto pr-7 scrollbar-rapkology
          md:max-w-[50rem]'
        >
          {monthlyFavorites.map((item, index) => (
            <div
              key={item.id}
              className={cn(
                'mb-6 relative bg-brand-black flex items-center gap-12 px-6 py-16 pl-0 pb-4 pt-4 [clip-path:polygon(0_0,100%_0,100%_97%,0_100%)] shrink-0 user-select-none',
                index === 0 && 'ml-[4rem] md:ml-0' // sadece ilk elemana margin-left ver
              )}
            >
              <Image
                src={item.coverImg}
                alt='cover'
                width={80}
                height={0}
                unoptimized
                className='W-full h-full'
              />
              <div className='flex flex-col'>
                <span className='mb-4'>{item.ranking}</span>
                <span className='text-xl'>{item.artist}</span>
                <span className='font-bold'>{item.cover}</span>
              </div>
              <YellowWave steps={item.clipPathStep} height={item.clipPathHeight} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
