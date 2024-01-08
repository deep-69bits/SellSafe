import React from 'react'
import Mabry from '../Text/Mabry'

const Button = ({children,classname}:any) => {
  return (
    <button className={'mt-5 px-6 text-white py-2 rounded-3xl border-black border-[1px] hover:scale-105 font-light duration-500 transition-all bg-[#836EF6] '+classname}>
      <Mabry>
        {children} 
      </Mabry>
    </button>
  )
}

export default Button

