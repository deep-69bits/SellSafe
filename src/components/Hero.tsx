import React from 'react'
import Image from 'next/image'
import Button from './atoms/Button'
import { Kanit } from 'next/font/google'
import Gilroy from './Text/Gilroy'
import AnonymusPro from './Text/AnonymusPro'
import '../app/slider.css'
import Link from 'next/link'
import handleScroll from '@/lib/Scrollfunction'

const kanit = Kanit(
    {
        weight: ['500'],
        subsets: ['latin']
    })

const Hero = () => {
    return (
        <div className='mx-auto  rounded-full bg flex justify-center gap-x-20  w-full lg:w-1/2  lg:py-10 pt-10 '>
            <div className='hidden lg:block'>
                <Image className='absolute translate-y-[0px]  translate-x-[-150px] cursor-pointer hover:scale-110 transition-all duration-300' src={'/Images/Gamecontroller.svg'} width={194} height={125} alt='Game Controller' />
                <Image className='absolute translate-y-[200px]  translate-x-[-150px] cursor-pointer hover:scale-110 transition-all duration-300' src={'/Images/TV.svg'} width={222} height={158} alt='TV' />
            </div>

            <div className='flex flex-col items-center lg:px-0 px-5'>

                <div className='flex justify-center '>
                    <Image  className='absolute translate-x-24 lg:translate-x-60 translate-y-[-50px]' src={'/Images/Stars.gif'} width={140} height={200} alt='Stars' />
                    <h1 className={'text-[#271E58]  lg:text-[68px] text-[48px] leading-tight text-left  lg:text-center font-[600]  capitalize drop-shadow-2xl w-full lg:w-[80%] kanit  '}>
                        <Gilroy>don’t suffer  becho befikar</Gilroy>
                    </h1>
                </div>

                <AnonymusPro>
                    <h2 className='text-[#5F55AF] font-[700] text-left lg:text-center mt-6 text-[28px]  leading-[36px]  w-full  tracking-wider  '>India’s First Trusted <br /> Reselling Platform.</h2>
                </AnonymusPro>


                <div className='lg:hidden mt-5  grid grid-flow-row gap-y-5 grid-cols-2'>
                    <Image className='  cursor-pointer hover:scale-110 transition-all duration-300' src={'/Images/Gamecontroller.svg'} width={194} height={125} alt='Game Controller' />
                    <Image className=' translate-y-[-10px] cursor-pointer hover:scale-110 transition-all duration-300' src={'/Images/Headphone.svg'} width={107} height={124} alt='Headphone' />
                    <div className='flex'>
                        <Image className=' w-[80px] h-[60px] translate-y-[30px]  cursor-pointer hover:scale-110 transition-all duration-300' src={'/Images/Camera.svg'} width={80} height={40} alt='Camer' />
                        <Image className=' w-[60px]  h-[70px]   cursor-pointer hover:scale-110 transition-all duration-300' src={'/Images/phone.svg'} width={80} height={40} alt='Phone' />
                    </div>
                    <Image className='translate-y-[-50px]  cursor-pointer hover:scale-110 transition-all duration-300' src={'/Images/TV.svg'} width={222} height={158} alt='TV' />
                </div>

                <Link href={"#feature"} onClick={handleScroll}>
                <Button>
                    KNOW MORE ABOUT THE APP
                    {/* <Image src={'/Images/YellowArrow.gif'} style={{width:'30px',height:'40px'}} width={10} height={10} alt='Yellow Arrow' /> */}
                    {/* <Image src={'/Images/YellowArrow.gif'} style={{width:'70px',height:'40px'}} width={10} height={10} alt='Yellow Arrow' /> */}
                </Button>
                </Link>
               


                <h3 className='anonymous mt-5 text-[18px] w-3/4 lg:w-full leading-[30px] font-[400] '>
                    <AnonymusPro>
                        “Say goodbye to outdated platform o|x”
                    </AnonymusPro>
                </h3>

               

            </div>

            <div className='hidden lg:block'>
                <Image className='absolute translate-y-[300px] translate-x-[0px]   cursor-pointer hover:scale-110 transition-all duration-300' src={'/Images/Camera.svg'} width={142} height={110} alt='Camer' />
                <Image className='absolute translate-y-[-30px]  translate-x-[20px] cursor-pointer hover:scale-110 transition-all duration-300' src={'/Images/Headphone.svg'} width={107} height={124} alt='Headphone' />
                <Image className='absolute translate-y-[150px]  translate-x-[-120px] cursor-pointer hover:scale-110 transition-all duration-300' src={'/Images/phone.svg'} width={105} height={125} alt='Phone' />
            </div>
        </div>
    )
}

export default Hero