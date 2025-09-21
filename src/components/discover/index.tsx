import { Compass, Menu, Search, SquareMenu } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/Button'
import { trends } from '@/mocks'
import ArticleCard from '../article-card'
import Image from 'next/image'
import WantToSee from '../want-to-see'
import Contact from '../contact'

export default function Discover() {
  return (
    <div
      className='ml-4 grid grid-cols-1 gap-10 px-6
    md:ml-16 md:[grid-template-columns:1.5fr_1fr] md:gap-28 md:px-0'
    >
      <div className=''>
        <div className='flex items-center justify-between mb-16'>
          <div className='flex items-center gap-8'>
            <h1>Keşfet</h1>
            <Compass className='text-yellow-500' size={64} />
          </div>

          <div className='flex items-center gap-4'>
            <Button>
              <Search size={24} />
            </Button>
            <Button>
              <Menu size={24} />
            </Button>
            <Button>
              <SquareMenu size={24} />
            </Button>
          </div>
        </div>
        <div className='flex flex-col gap-4 items-center'>
          <div className='flex flex-col gap-12'>
            {trends.map((item) => (
              <ArticleCard key={item.id} item={item}>
                <div className='flex flex-col gap-7'>
                  <Image width={300} height={200} src={item.event} alt='event' />
                  <span className='text-brand-black-300'>{item.date}</span>
                </div>
              </ArticleCard>
            ))}
          </div>
          <Button variant='tertiary'>Devamını Gör</Button>
        </div>
      </div>

      <div className='flex flex-col gap-28'>
        <WantToSee />
        <Contact />
      </div>
    </div>
  )
}
