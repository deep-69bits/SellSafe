import React from 'react'
import Image from 'next/image'
const Header = () => {
  return (
    <div className='px-8 flex justify-between  py-5'>
       <Image src={'/Logo.svg'} width={150} height={200}  alt="Logo"/>
       <div>
       <span className='absolute mx-4 my-2 text-[#664BFB]  font-[700] text-[14px]'>+ RESELL</span>
       <Image src={'/Images/Resell.svg'} width={100} height={200}  alt="Logo"/>
       </div>
    </div>
  )
}

export default Header