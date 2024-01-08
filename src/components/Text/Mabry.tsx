import React from 'react'
import localFont from "next/font/local"

const MabryFont=localFont({src:"../../../public/Fonts/MabryProBlack.ttf"})

const Mabry = ({children}:any) => {
  return (
    <div className='text-center font-light flex justify-center' style={MabryFont.style}>{children}</div>
  )
}

export default Mabry