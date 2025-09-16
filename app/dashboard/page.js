import ActivePolls from '@/components/layout/ActivePolls'
import HeroSection from '@/components/layout/HeroSection'
import TrendingPolls from '@/components/layout/TrendingPolls'
import React from 'react'

const page = () => {
  return (
    <main className='flex-grow'>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <HeroSection />
      {/* Other dashboard content can go here */}
      <TrendingPolls />
      <ActivePolls />
    </div>
    </main>
  )
}

export default page