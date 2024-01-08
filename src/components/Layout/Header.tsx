import React from 'react'
import Image from 'next/image'
const Header = () => {
  return (
      <a href='#footer'>
    <div className='px-8 flex justify-between  py-5'>
       <Image src={'/Logo.svg'} width={150} height={200}  alt="Logo"/>
       <div>
       <span className='absolute mx-4 my-2 text-[#664BFB]  font-[700] text-[14px]'>
       <Image className='absolute translate-x-[-5px] translate-y-[-8px] ' src={'/Images/badge.gif'} width={20} height={10}  alt="Logo"/>
        + RESELL
       </span>
       <Image src={'/Images/Resell.svg'} width={100} height={200}  alt="Logo"/>
       </div>
    </div>
      </a>
  )
}

export default Header