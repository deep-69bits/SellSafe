import React from 'react'
import localFont from "next/font/local"

const giloryFont=localFont({src:"../../../public/Fonts/Gilroy-SemiBold.ttf"})

const Gilroy = ({children}:any) => {
  return (
    <div className='inline-block  ' style={giloryFont.style}>{children}</div>
  ) 
}

export default Gilroy