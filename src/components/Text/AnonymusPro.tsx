import React from 'react'
import localFont from "next/font/local"

const AnonymusProfont=localFont({src:"../../../public/Fonts/AnonymousProRegular.ttf"})

const AnonymusPro = ({children}:any) => {
  return (
    <div className='text-center  flex justify-center' style={AnonymusProfont.style}>
        {children}
    </div>
  )
}

export default AnonymusPro