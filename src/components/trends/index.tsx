import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/Button'
import { TrendingUp } from 'lucide-react'
import ArticleCard from '../article-card'
import { trends } from '@/mocks'

export default function Trends() {
  return (
    <article className='mx-16 my-16 flex flex-col items-center md:items-start'>
      <div className='flex items-center gap-8 mb-16'>
        <h1>TRENDLER</h1>
        <TrendingUp className='text-yellow-500' size={64} />
      </div>
      <div className='flex flex-col items-center gap-20'>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
          {trends.map((item) => (
            <div key={item.id} className='flex items-start gap-16'>
              <h1 className='text-brand-black-600'>{item.id}</h1>
              <ArticleCard item={item} />
            </div>
          ))}
        </div>
        <Button variant='tertiary'>Tümünü Gör</Button>
      </div>
    </article>
  )
}
