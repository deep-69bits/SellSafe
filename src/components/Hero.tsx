import React from 'react'
import Image from 'next/image'
import Button from './atoms/Button'

const Hero = () => {
    return (
        <div className='mx-auto  rounded-full bg flex justify-center gap-x-20  w-full lg:w-1/2  py-10'>
            <div className='hidden lg:block'>
            <Image className='absolute translate-y-[0px]  translate-x-[-150px] cursor-pointer hover:scale-110 transition-all duration-300' src={'/Images/GameController.png'} width={194} height={125} alt='Game Controller' />
            <Image className='absolute translate-y-[200px]  translate-x-[-150px] cursor-pointer hover:scale-110 transition-all duration-300' src={'/Images/TV.png'} width={222} height={158} alt='TV' />
            </div>

            <div className='flex flex-col items-center lg:px-0 px-5'>
     
            <h1 className='text-[#271E58] lg:text-[64px] text-[48px] leading-tight text-left  lg:text-center font-[600]  capitalize drop-shadow-2xl w-full lg:w-[80%] gilory  '>don’t suffer  becho befikar</h1>
            <h2 className='text-[#5F55AF] font-[500] text-left lg:text-center mt-6 text-[30px]  leading-[36px]  w-full lg:w-[80%] tracking-wider anonymous '>India’s First Trusted <br /> Reselling Platform.</h2>

            <div className='lg:hidden my-5 grid grid-flow-row gap-y-5 grid-cols-2'>
            <Image className='  cursor-pointer hover:scale-110 transition-all duration-300' src={'/Images/GameController.png'} width={194} height={125} alt='Game Controller' />
            <Image className=' translate-y-[-10px] cursor-pointer hover:scale-110 transition-all duration-300' src={'/Images/Headphone.png'} width={107} height={124} alt='Headphone' />
            <div className='flex'>
            <Image className=' w-[80px] h-[60px] translate-y-[30px]  cursor-pointer hover:scale-110 transition-all duration-300' src={'/Images/camera.png'} width={80} height={40} alt='Camer' />
            <Image className=' w-[60px]  h-[70px]   cursor-pointer hover:scale-110 transition-all duration-300' src={'/Images/phone.png'} width={80} height={40} alt='Phone' />
            </div>
            <Image className='translate-y-[-50px]  cursor-pointer hover:scale-110 transition-all duration-300' src={'/Images/TV.png'} width={222} height={158} alt='TV' />
            </div>

            <Button>KNOW MORE ABOUT THE APP</Button>
            <h3 className='anonymous mt-5 text-[18px] leading-[30px] font-[400] '>“Say goodbye to outdated platform o|x”</h3>
            <div className='flex flex-row mt-4'>
                <Image src={'/Images/GooglePlay.png'} width={192} height={68} alt='Google Play Button' />
                <Image src={'/Images/AppStore.png'} width={192} height={68} alt='Google Play Button' />
            </div>

            </div>

             <div className='hidden lg:block'>
            <Image className='absolute translate-y-[250px] translate-x-[50px]   cursor-pointer hover:scale-110 transition-all duration-300' src={'/Images/camera.png'} width={142} height={110} alt='Camer' />
            <Image className='absolute translate-y-[-30px]  translate-x-[50px] cursor-pointer hover:scale-110 transition-all duration-300' src={'/Images/Headphone.png'} width={107} height={124} alt='Headphone' />
            <Image className='absolute translate-y-[100px]  translate-x-[-10px] cursor-pointer hover:scale-110 transition-all duration-300' src={'/Images/phone.png'} width={105} height={125} alt='Phone' />
             </div>
        </div>
    )
}

export default Hero