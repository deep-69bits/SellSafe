'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import handleScroll from '@/lib/Scrollfunction'
const Header = () => {
 
  return (
    <div id="header" className='lg:px-10 px-5 flex justify-between  py-5'>
       <Image src={'/Logo.svg'} width={150} height={200}  alt="Logo"/>
       <div>
        <Link href={'#footer'} onClick={handleScroll} >
       <Image src={'/Images/ResellImage.svg'} width={100} height={200}  alt="Logo"/>
        </Link>
       </div>
    </div>
  )
}

export default Header