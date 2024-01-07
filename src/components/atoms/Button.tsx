import React from 'react'

const Button = ({children,classname}:any) => {
  return (
    <button className={'mt-5  mabry px-6 text-white py-2 rounded-3xl border-black border-[1px] hover:scale-105 duration-500 transition-all bg-[#836EF6] '+classname}>
        {children}
    </button>
  )
}

export default Button

