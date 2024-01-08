import React from 'react'

import localFont from "next/font/local"

const ArialFont=localFont({src:"../../../public/Fonts/ArialCE.ttf"})

const Arial = ({children,className}:any) => {
  return (
    <div className={'  flex justify-center'+className} style={ArialFont.style}>{children}</div>
  )
}

export default Arial