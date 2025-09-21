'use client'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '../ui/Button'
import { cn } from '@/utils/cn'
import Image from 'next/image'

type HeroItem = {
  id: number
  title: string
  description: string
  img: string
  className?: string
}

export default function HeroSlider() {
  const heroEvents: HeroItem[] = [
    {
      id: 1,
      title: 'Dünya Rap Trendlerini Konuşuyoruz.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
      img: '/assets/images/first-rapper.png',
    },
    {
      id: 2,
      title: 'Türkçe Rap ve Dünya Müzik Haberlerini Takip Et.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
      className: 'text-white',
      img: '/assets/images/second-rapper.png',
    },
  ]

  const bindPagination = (swiper: any, index: number) => {
    const currentSlide: HTMLElement | null =
      swiper.slides[swiper.activeIndex]?.querySelector('[data-pagination]')
    if (!currentSlide) return
    swiper.params.pagination.el = currentSlide
    swiper.pagination.destroy()
    swiper.pagination.init()
    swiper.pagination.render()
    swiper.pagination.update()
  }

  return (
    <div className='mt-[-5rem] h-[100vh] relative'>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop
        pagination={{ clickable: true }}
        navigation={{
          prevEl: '#hero-prev',
          nextEl: '#hero-next',
        }}
        onInit={(swiper) => bindPagination(swiper, swiper.realIndex)}
        onSlideChange={(swiper) => bindPagination(swiper, swiper.realIndex)}
        className='w-full h-full'
      >
        {heroEvents.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className='w-full h-[90vh] bg-cover bg-center p-0 flex items-start justify-center
              md:justify-end md:pr-36 md:items-center'
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <div className='flex flex-col gap-6 items-center justify-center p-4 mt-20 absolute md:mt-0 md:items-start'>
                <h1
                  className={cn(
                    'text-brand-black-800 text-center max-w-[15rem] md:max-w-[28.125rem] md:text-start',
                    item.className
                  )}
                >
                  {item.title}
                </h1>
                <p
                  className={cn(
                    'text-brand-black-800 text-center max-w-[15rem]  md:max-w-[28.125rem] md:text-start',
                    item.className
                  )}
                >
                  {item.description}
                </p>

                <Button variant='tertiary'>Devamını Oku</Button>

                <div data-pagination className='mt-4 flex justify-start' />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Button
        id='hero-prev'
        className='hidden md:inline-flex absolute top-1/2 left-6 -translate-y-1/2 bg-transparent text-white hover:bg-transparent p-2 z-20'
        aria-label='Previous'
      >
        <ArrowLeft width={36} />
      </Button>

      <Button
        id='hero-next'
        className='hidden md:inline-flex absolute top-1/2 right-6 -translate-y-1/2 bg-transparent text-white hover:bg-transparent p-2 z-20'
        aria-label='Next'
      >
        <ArrowRight width={36} />
      </Button>

      <Image
        src='/assets/images/hero-bottom-bar.svg'
        alt='Rapkology'
        width={0}
        height={0}
        className='w-full bottom-0 z-30 absolute'
      />
    </div>
  )
}
