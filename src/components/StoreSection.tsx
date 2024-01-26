import React from 'react'
import '../app/slider.css'
import Image from 'next/image'
const StoreSection = () => {
    return (
        <div className=' sticking flex  z-50  justify-center bg-white rounded-t-3xl py-2 flex-row '>
            <Image src={'/Images/GooglePlay.svg'} width={170} height={50} alt='Google Play Button' />
            <Image src={'/Images/AppleStore.svg'} width={170} height={50} alt='Google Play Button' />
        </div>
    )
}

export default StoreSection