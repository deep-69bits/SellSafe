import React from 'react'
import Image from 'next/image'
import Button from './atoms/Button'
import { Kanit } from 'next/font/google'
import Gilroy from './Text/Gilroy'
import AnonymusPro from './Text/AnonymusPro'
import '../app/slider.css'
import Link from 'next/link'
import handleScroll from '@/lib/Scrollfunction'
import Lottie from "lottie-react";
import arrow from './rightarrow.json'

const kanit = Kanit(
    {
        weight: ['500'],
        subsets: ['latin']
    })

const Hero = () => {
    return (
        <div className='mx-auto  rounded-full  flex justify-center gap-x-20  w-full lg:w-1/2  lg:py-10  py-0 lg:pt-10 pt-4 '>

            <div className='bg-[#664BFB] lg:scale-100 scale-[20%] blur-lg translate-y-[-100px] h-[845px] opacity-[0.06] rounded-full backdrop-blur-lg w-[845px] absolute -z-50'></div>
            <div className='hidden lg:block'>
                <Image className='absolute translate-y-[0px]  translate-x-[-150px] cursor-pointer hover:scale-110 transition-all duration-300' src={'/Images/Gamecontroller.svg'} width={194} height={125} alt='Game Controller' />
                <Image className='absolute translate-y-[200px]  translate-x-[-150px] cursor-pointer hover:scale-110 transition-all duration-300' src={'/Images/TV.svg'} width={222} height={158} alt='TV' />
            </div>

            <div className='flex flex-col items-center lg:px-0 px-5'>


                <div className='flex justify-center '>
                    <Image className='absolute translate-x-24 lg:translate-x-60  translate-y-[-10px] lg:translate-y-[-50px]' src={'/Images/Stars.gif'} width={140} height={200} alt='Stars' />
                    <h1 className={'text-[#271E58]   lg:text-[68px]  text-[48px] leading-tight text-left  lg:text-center font-[600]  capitalize drop-shadow-2xl w-full  kanit  '}>
                        <Gilroy>don’t suffer <br className='hidden lg:inline-block' />  becho befikar</Gilroy>
                    </h1>
                </div>

                <AnonymusPro>
                    <h2 className='text-[#5F55AF] font-[700] text-left lg:text-center lg:mt-6 mt-2 text-[28px]  leading-[36px]  w-full  tracking-wider  '>India’s First Trusted <br className='hidden lg:block' /> Reselling Platform.</h2>
                </AnonymusPro>


                <div className='lg:hidden lg:mt-5  my-5 grid grid-flow-row  grid-cols-2'>
                    <Image className='  cursor-pointer hover:scale-110 transition-all duration-300' src={'/Images/Gamecontroller.svg'} width={194} height={125} alt='Game Controller' />
                    <Image className=' translate-y-[-10px] cursor-pointer hover:scale-110 transition-all duration-300' src={'/Images/Headphone.svg'} width={107} height={124} alt='Headphone' />
                    <div className='flex '>
                        <Image className=' w-[80px] h-[60px] translate-y-[30px]  cursor-pointer hover:scale-110 transition-all duration-300' src={'/Images/Camera.svg'} width={80} height={40} alt='Camer' />
                        <Image className=' w-[60px]  h-[70px]   cursor-pointer hover:scale-110 transition-all duration-300' src={'/Images/phone.svg'} width={80} height={40} alt='Phone' />
                    </div>
                    <Image className='translate-y-[-50px]  cursor-pointer hover:scale-110 transition-all duration-300' src={'/Images/TV.svg'} width={222} height={158} alt='TV' />
                </div>



                <h3 className='anonymous mb-2 lg:mt-8 text-[18px] w-3/4 lg:w-full  font-[400] '>
                    <AnonymusPro>
                        “Say goodbye to outdated platform o|x”
                    </AnonymusPro>
                </h3>


                <Link href={"#feature"} onClick={handleScroll}>
                    <Button>
                        <div className='flex text-xs lg:text-sm items-center '>
                            KNOW MORE ABOUT THE APP
                            <div className='w-6 scale-[300%]'>
                                <Lottie animationData={arrow} loop={true} />
                            </div>
                            <div className='w-6 scale-[300%]'>
                                <Lottie animationData={arrow} loop={true} />
                            </div>
                        </div>
                    </Button>
                </Link>


            </div>

            <div className='hidden lg:block'>
                <Image className='absolute translate-y-[300px] translate-x-[10px]   cursor-pointer hover:scale-110 transition-all duration-300' src={'/Images/Camera.svg'} width={142} height={110} alt='Camer' />
                <Image className='absolute translate-y-[-30px]  translate-x-[20px] cursor-pointer hover:scale-110 transition-all duration-300' src={'/Images/Headphone.svg'} width={107} height={124} alt='Headphone' />
                <Image className='absolute translate-y-[150px]  translate-x-[-80px] cursor-pointer hover:scale-110 transition-all duration-300' src={'/Images/phone.svg'} width={105} height={125} alt='Phone' />
            </div>
        </div>
    )
}

export default Hero