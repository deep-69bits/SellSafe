'use client'
import Contact from '@/components/Contact'
import Feature from '@/components/Feature'
import Faq from '@/components/Faq'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import Categories from '@/components/Categories'
import StoreSection from '@/components/StoreSection'
import Footer from '@/components/Layout/Footer'
import Image from 'next/image'
import './slider.css'
import FooterTop from '@/components/Layout/FooterTop'

export default function Home() {
  return (
    <main className="">
      
        <Hero />
        <Products />
        <Categories />
        <Feature />
        <Faq />
        <Contact />
        <FooterTop/>
        <div className=' flex z-50  sticking   w-full  lg:translate-y-[-50px]     flex-row justify-center '>
          <Image src={'/Images/GooglePlay.svg'} width={180} height={68} alt='Google Play Button' />
          <Image src={'/Images/AppleStore.svg'} width={180} height={68} alt='Apple Store Button' />
        </div>
    </main>
  )
}
