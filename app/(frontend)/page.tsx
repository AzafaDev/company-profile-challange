import React from 'react'
import CompanyOverview from '@/components/home/CompanyOverview'
import HeroSection from '@/components/home/HeroSection'
import ProductHighlight from '@/components/home/ProductHighlight'
import Testimonials from '@/components/home/Testimonials'

const page = () => {
  return (
    <main className='relative'>
      <HeroSection/>
      <CompanyOverview/>
      <ProductHighlight/>
      <Testimonials/>
    </main>
  )
}

export default page
