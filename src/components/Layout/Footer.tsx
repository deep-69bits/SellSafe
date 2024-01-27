'use client'
import React from 'react'
import Image from 'next/image'
import Arial from '../Text/Arial'
import handleScroll from '@/lib/Scrollfunction'
import Link from 'next/link'
import '../../app/slider.css'
const Footer = () => {
  return (
    <section id="footer">
      <div className='  '>

        <div className='flex flex-col leading-[1.5rem] px-4 lg:hidden gap-y-2'>
          <h3 className='text-[#664BFB] text-[24px] font-semibold pt-4'>Categories</h3>
          <span className='text-[20px] font-medium'>Electronics</span>
          <span className='text-[20px] font-medium'>TV and Appliances</span>
          <span className='text-[20px] font-medium'>Furniture</span>
          <span className='text-[20px] font-medium'>E Sports</span>
          <span className='text-[20px] font-medium'>Gym & Sports Equipment</span>
          <span className='text-[20px] font-medium'>Child Care</span>
          <span className='text-[20px] font-medium'>Musical Instrument</span>
        </div>

        <div className='flex lg:hidden flex-col gap-y-2 leading-[1.5rem] px-4  mb-4'>
          <h3 className='text-[#664BFB] text-[24px] font-semibold mt-4'>Company</h3>
          <Link href={'#feature'} onClick={handleScroll}>
            <span className='text-[20px] cursor-pointer font-medium'>
              Why SellSafe
            </span>
          </Link>
          <Link href={'#products'} onClick={handleScroll}>
            <span className='text-[20px] font-medium cursor-pointer'>Overview</span>
          </Link>
          <Link href={'#faqs'} onClick={handleScroll}>
            <span className='text-[20px] font-medium'>Becho Befikar</span>
          </Link>
        </div>
        <div className='lg:flex block items-center justify-between px-4 lg:px-10    bg-opacity-10 bg-purple-100  w-full'>
          <span className='text-[#664BFB] font-[400] text-[20px]'>
            <Arial>
              © 2022 SellSafe. All Rights Reserved.
            </Arial>
          </span>
          <span className='cursor-pointer underline my-[20px] tex-[20px] text-[#836EF6] '>
            <Link className='' href={'#header'} onClick={handleScroll}>
              <Arial>
                Back to Top
              </Arial>
            </Link>
          </span>
          <Arial>
            <span className='flex items-center gap-x-1 text-[#664BFB] font-[400] text-[20px]'>
              Made with
              <svg width="24" height="21" viewBox="0 0 24 21" fill="none" >
                <path d="M12 20.1192C0.0656999 15.7388 -1.33279 6.42567 0.866813 2.66972C2.38505 0.077537 5.88847 -0.531369 8.75686 1.10029C8.76021 1.10225 8.76407 1.10415 8.76749 1.10656C8.79407 1.12155 8.82109 1.137 8.84767 1.15289C8.85153 1.15485 8.85539 1.15725 8.85925 1.15966C10.1066 1.89609 11.2264 3.0613 12 4.67707C14.1441 0.200639 18.9441 -0.818756 21.7473 1.15966C22.2983 1.54838 22.772 2.05304 23.1332 2.66967C25.3328 6.42567 23.9343 15.7388 12 20.1192Z" fill="#EE596B" />
                <path d="M12 20.1192C0.0656999 15.7388 -1.33279 6.42567 0.866813 2.66972C2.38505 0.077537 5.88847 -0.531369 8.75686 1.10029C5.73728 -0.559906 1.08862 6.15877 4.74883 11.6235C7.58968 15.8651 12 20.1192 12 20.1192Z" fill="#ED3A4F" />
              </svg>
              in India.
            </span>
          </Arial>
        </div>

      </div>
    </section>
  )
}

export default Footer