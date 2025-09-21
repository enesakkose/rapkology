import React from 'react'
import { tags } from '@/mocks'
import { Button } from '../ui/Button'

export default function WantToSee() {
  return (
    <div className='flex flex-col gap-4'>
      <h2>NE GÖRMEK İSTERSİN?</h2>
      <div className='flex flex-wrap gap-4'>
        {tags.map((tag) => (
          <Button key={tag} variant='outline'>
            {tag}
          </Button>
        ))}
      </div>
    </div>
  )
}
