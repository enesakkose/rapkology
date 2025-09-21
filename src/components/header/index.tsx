'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from '../ui/Button'
import { Search, Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navigations = [
    { name: 'Haberler', href: '/haberler' },
    { name: 'Etkinlikler', href: '/etkinlikler' },
    { name: 'Müzikler', href: '/müzikler' },
    { name: 'Videolar', href: '/videolar' },
    { name: 'İletişim', href: '/iletisim' },
  ]

  return (
    <header className='h-20 bg-brand-black-600/10 backdrop-blur-md py-3 px-6 md:px-20 flex items-center justify-between z-20 relative'>
      {/* Logo */}
      <div className='md:flex items-center gap-24'>
        <Image
          src='/assets/images/brand-logo.svg'
          alt='Rapkology'
          loading='eager'
          width={180}
          height={0}
          className='md:w-auto h-auto'
        />
        <nav className='hidden md:flex'>
          {navigations.map((item) => (
            <Link key={item.name} href={item.href} className='mx-4'>
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Masaüstü menü */}
      <div className='hidden md:flex items-center gap-24'>
        <div className='flex items-center gap-9'>
          <Button>
            <Search />
          </Button>
          <Button variant='secondary'>Giriş Yap</Button>
        </div>
      </div>

      {/* Mobil hamburger */}
      <button className='block md:hidden' onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? <X size={28} /> : <Menu size={28} className='text-yellow-500' />}
      </button>

      {/* Mobil menü overlay */}
      {isOpen && (
        <div className='absolute top-20 left-0 w-full bg-yellow-400 text-black flex flex-col items-center gap-6 py-10 z-10 md:hidden'>
          <nav className='flex flex-col gap-6 text-lg font-bold'>
            {navigations.map((item) => (
              <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)}>
                {item.name}
              </Link>
            ))}
          </nav>
          <div className='flex flex-col gap-4 mt-6'>
            <Button>
              <Search />
            </Button>
            <Button variant='secondary'>Giriş Yap</Button>
          </div>
        </div>
      )}
    </header>
  )
}
