import React from 'react'
import { Button } from '../ui/Button'
import { ArrowRight, Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import Link from 'next/link'

export default function Contact() {
  const categories = [
    { label: 'HABERLER', path: '/haberler' },
    { label: 'ETKİNLİKLER', path: '/etkinlikler' },
    { label: 'MÜZIKLER', path: '/muzikler' },
    { label: 'VİDEOLAR', path: '/videolar' },
    { label: 'İLETİŞIM', path: '/iletisim' },
  ]

  return (
    <div className='flex flex-col gap-8'>
      <h2>
        GELİŞMELERDEN İLK SEN <br /> HABERDAR OL!
      </h2>

      <div className='flex items-center border-b border-gray-700 w-full max-w-md'>
        <input
          type='email'
          placeholder='EMAIL'
          className='flex-1 bg-transparent px-2 py-3 text-white placeholder:text-white focus:outline-none font-bold'
        />
        <Button
          type='submit'
          className='flex items-center gap-2 font-bold text-yellow-400 hover:text-yellow-300 transition'
        >
          GÖNDER
          <ArrowRight size={10} />
        </Button>
      </div>

      <div className='flex items-center gap-4'>
        <Button>
          <Facebook className='text-yellow-500' size={32} />
        </Button>
        <Button>
          <Instagram className='text-yellow-500' size={32} />
        </Button>
        <Button>
          <Youtube className='text-yellow-500' size={32} />
        </Button>
        <Button>
          <Twitter className='text-yellow-500' size={32} />
        </Button>
      </div>

      <div className='flex flex-wrap items-center gap-4'>
        {categories.map((item) => (
          <Link key={item.label} href={item.path}>
            {item.label}
          </Link>
        ))}
      </div>

      <p className='text-brand-black-300'>© RAPKOLOGY All Rights Are Reserved 2022.</p>
    </div>
  )
}
