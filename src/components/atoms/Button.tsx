import React from 'react'
import Mabry from '../Text/Mabry'

const Button = ({ children, classname }: any) => {
  return (
    <button className={'lg:mt-5 lg:translate-y-1  mt-0 px-8 text-white py-2 rounded-3xl border-black border-[1px] hover:scale-105 font-light duration-500 transition-all bg-gradient-to-r from-[#836EF6] to-[#664BFB] ' + classname}>
      <Mabry>
        {children}
      </Mabry>
    </button>
  )
}

export default Button

