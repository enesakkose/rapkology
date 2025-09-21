import Image from 'next/image'
import React, { PropsWithChildren } from 'react'
import { Button } from '../ui/Button'

interface ArticleCardProps {
  item: {
    title: string
    profile: string
    username: string,
    event: string,
    date: string
  }
}

export default function ArticleCard({ item, children }: PropsWithChildren<ArticleCardProps>) {
  return (
    <div className='flex items-center gap-4'>
      {children}
      <div className='flex items-start flex-col gap-4'>
        <div className='flex items-center gap-2'>
          <Image width={32} height={32} src={item.profile} alt='profile' />
          <span>{item.username}</span>
        </div>
        <h3 className='text-xl font-bold pb-5 border-b border-brand-black-300'>
          {item.title.toUpperCase()}
        </h3>
        <Button>Daha Fazla Oku</Button>
      </div>
    </div>
  )
}
