'use client'
import Contact from '@/components/Contact'
import Feature from '@/components/Feature'
import Faq from '@/components/Faq'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import Categories from '@/components/Categories'
import Image from 'next/image'
import './slider.css'
import FooterTop from '@/components/Layout/FooterTop'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Gilroy from '@/components/Text/Gilroy'
import Mabry from '@/components/Text/Mabry'
import Button from '@/components/atoms/Button'


export default function Home() {


  return (
    <main className="">

      <Hero />
      <Products />
      <Categories />
      <Feature />
      <Faq />
      <Contact />
      <FooterTop />
      <div className=' flex z-50  sticking   w-full  lg:translate-y-[-50px]      flex-row justify-center '>
        <Dialog>
          <div className='w-full  flex justify-center'>
          <DialogTrigger> <Image className='cursor-pointer' src={'/Images/GooglePlay.svg'} width={180} height={68} alt='Google Play Button' /></DialogTrigger>
          <DialogTrigger>  <Image className='cursor-pointer' src={'/Images/AppleStore.svg'} width={180} height={68} alt='Apple Store Button' /></DialogTrigger>
          </div>
          <DialogContent className='w-full   lg:pt-24  lg:pb-14'>
            <DialogHeader>
              <Gilroy>
                <DialogTitle className='text-[64px] mb-5 leading-[4rem] lg:text-center text-left font-[400] text-[#271E58]'>
                <Image className='absolute translate-x-24 lg:translate-x-60  translate-y-[-10px] lg:translate-y-[-50px]' src={'/Images/Stars.gif'} width={140} height={200} alt='Stars' />
                  Get beta access of the app
                </DialogTitle>
              </Gilroy>
              <input className='lg:w-1/2 my-5 block lg:hidden   selection:outline  py-2 w-full border-[1px] rounded-lg border-black bg-purple-100 bg-opacity-10 focus:outline-none px-2' type="text" placeholder='ENTER YOUR MOBILE NUMBER...' />
              <DialogDescription className='lg:text-center text-left   text-black text-[24px] font-[400]'>
                An easy and efficient way to sell and buy second hand products.
                <br />
                Find the right buyer for almost anything.
              </DialogDescription>

              <div className='flex flex-col items-center '>
                <input className='lg:w-1/2 lg:block hidden my-3  selection:outline  py-2 w-full border-[1px] rounded-lg border-black bg-purple-100 bg-opacity-10 focus:outline-none px-2' type="text" placeholder='ENTER YOUR MOBILE NUMBER...' />
                <div className='text-[#5C5C5C] lg:block hidden font-[400] text-[15px] '>
                  We care about your data in our
                  <span className='underline ml-[4px] cursor-pointer'>Privacy Policy</span> .
                </div>
                <button className="lg:mt-5 mt-10 mb-5 lg:translate-y-1  lg:w-fit w-full px-8 text-white py-2 rounded-3xl  hover:scale-105 font-light duration-500 transition-all bg-gradient-to-r from-[#836EF6] to-[#664BFB]">
                  <Mabry>
                  GET BETA ACCESS
                  </Mabry>
                </button >
                <div className='text-[#5C5C5C] block lg:hidden font-[400] text-[15px] '>
                  We care about your data in our
                  <span className='underline ml-[4px] cursor-pointer'>Privacy Policy</span> .
                </div>
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>



    </main>
  )
}
