import React from 'react'
import Image from 'next/image'
import Button from './atoms/Button'

const Hero = () => {
    return (
        <div className='mx-auto  rounded-full bg flex justify-center gap-x-20  w-full lg:w-1/2  py-10'>
            <div>
            <Image className='absolute translate-y-[0px]  translate-x-[-150px] cursor-pointer hover:scale-110 transition-all duration-300' src={'/Images/GameController.png'} width={194} height={125} alt='Game Controller' />
            <Image className='absolute translate-y-[200px]  translate-x-[-150px] cursor-pointer hover:scale-110 transition-all duration-300' src={'/Images/TV.png'} width={222} height={158} alt='TV' />
            </div>

            <div className='flex flex-col items-center'>
     
            <h1 className='text-[#271E58] text-[64px]   text-center font-[600]  capitalize drop-shadow-2xl w-[80%] '>don’t suffer  becho befikar</h1>
            <h2 className='text-[#5F55AF] font-[500] text-center mt-6 text-[30px]  leading-[36px] tracking-wider anonymous '>India’s First Trusted <br /> Reselling Platform.</h2>
            <Button>KNOW MORE ABOUT THE APP</Button>
            <h3 className='anonymous mt-5 text-[18px] leading-[30px] font-[400] '>“Say goodbye to outdated platform o|x”</h3>
          
            <div className='flex flex-row mt-4'>
                <Image src={'/Images/GooglePlay.png'} width={192} height={68} alt='Google Play Button' />
                <Image src={'/Images/AppStore.png'} width={192} height={68} alt='Google Play Button' />
            </div>

            </div>

             <div className=''>
            <Image className='absolute translate-y-[250px] translate-x-[50px]   cursor-pointer hover:scale-110 transition-all duration-300' src={'/Images/camera.png'} width={142} height={110} alt='Camer' />
            <Image className='absolute translate-y-[-30px]  translate-x-[50px] cursor-pointer hover:scale-110 transition-all duration-300' src={'/Images/Headphone.png'} width={107} height={124} alt='Headphone' />
            <Image className='absolute translate-y-[100px]  translate-x-[-10px] cursor-pointer hover:scale-110 transition-all duration-300' src={'/Images/phone.png'} width={105} height={125} alt='Phone' />
             </div>
        </div>
    )
}

export default Hero