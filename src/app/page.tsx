'use client'
import Contact from '@/components/Contact'
import Feature from '@/components/Feature'
import Faq from '@/components/Faq'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import Categories from '@/components/Categories'
import StoreSection from '@/components/StoreSection'
import Footer from '@/components/Layout/Footer'


export default function Home() {
  return (
    <main className="">
    <Hero/> 
    <Products/>
    <Categories/> 
    <Feature/>
    <Faq/>
    <Contact/>
    <Footer/>
    {/* <StoreSection/> */}
    </main>
  )
}
