'use client'
import Contact from '@/components/Contact'
import Feature from '@/components/Feature'
import Faq from '@/components/Faq'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import Categories from '@/components/Categories'
import Image from 'next/image'
import './slider.css'
import { useEffect, useState, useRef } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Gilroy from '@/components/Text/Gilroy'
import Mabry from '@/components/Text/Mabry'
import handleScroll from '@/lib/Scrollfunction'
import Link from 'next/link'


export default function Home() {

  const [isVisible, setIsVisible] = useState(true);
  const divRef = useRef<HTMLDivElement>(null);
  const divRef2 = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const checkCoordinates = () => {
      if (divRef.current && divRef2.current) {
        const rect = divRef.current.getBoundingClientRect();
        const rect2 = divRef2.current.getBoundingClientRect();
        if (rect.top >= rect2.top) {setIsVisible(false)}
        else {setIsVisible(true)}
      }
    }
    const intervalId = setInterval(checkCoordinates, 1);
    return () => clearInterval(intervalId);
  }, [])




  return (
    <main className="">

      <Hero />
      <Products />
      <Categories />
      <Feature />
      <Faq />
      <Contact />
      <section id="">
        <div className='  mt-5 lg:translate-y-[-10px] '>
          <div className='lg:flex block justify-between  px-4  lg:px-10 '>
            <div className='flex flex-col gap-y-4'>
              <div className='flex flex-col gap-y-2'>
                <h3 className='text-[#664BFB] text-[24px] font-semibold'>Follow us on</h3>
                <h5 className='flex items-center gap-x-1'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.002 9C10.3446 9 9.00195 10.3431 9.00195 12C9.00195 13.6573 10.3451 15 12.002 15C13.6593 15 15.002 13.6569 15.002 12C15.002 10.3427 13.6589 9 12.002 9ZM12.002 7C14.7624 7 17.002 9.2371 17.002 12C17.002 14.7605 14.7649 17 12.002 17C9.24148 17 7.00195 14.7629 7.00195 12C7.00195 9.23953 9.23905 7 12.002 7ZM18.502 6.74915C18.502 7.43926 17.9412 7.99917 17.252 7.99917C16.5619 7.99917 16.002 7.4384 16.002 6.74915C16.002 6.0599 16.5627 5.5 17.252 5.5C17.9403 5.49913 18.502 6.0599 18.502 6.74915ZM12.002 4C9.52747 4 9.12415 4.00655 7.97324 4.0578C7.18912 4.09461 6.6635 4.20007 6.17513 4.38967C5.74113 4.55799 5.42806 4.75898 5.09449 5.09255C4.75964 5.4274 4.55901 5.73963 4.39137 6.17383C4.20133 6.66332 4.0959 7.18811 4.05975 7.97115C4.008 9.0752 4.00195 9.46105 4.00195 12C4.00195 14.4745 4.0085 14.8778 4.05974 16.0286C4.09657 16.8124 4.20217 17.3388 4.39131 17.826C4.56007 18.2606 4.76147 18.5744 5.09343 18.9064C5.4296 19.2421 5.74276 19.4434 6.17284 19.6094C6.66716 19.8005 7.19245 19.9061 7.97309 19.9422C9.07715 19.9939 9.463 20 12.002 20C14.4765 20 14.8798 19.9934 16.0306 19.9422C16.8127 19.9055 17.3395 19.7996 17.828 19.6106C18.2614 19.4423 18.5762 19.2402 18.9084 18.9085C19.2446 18.5718 19.4455 18.2594 19.6117 17.8283C19.8023 17.3358 19.9081 16.8098 19.9442 16.0289C19.9959 14.9248 20.002 14.5389 20.002 12C20.002 9.52552 19.9954 9.12221 19.9442 7.97137C19.9074 7.18906 19.8015 6.66149 19.6123 6.17318C19.4444 5.74038 19.2427 5.42635 18.9094 5.09255C18.574 4.75715 18.2626 4.55693 17.8281 4.38942C17.339 4.19954 16.8134 4.09396 16.0308 4.05781C14.9268 4.00605 14.5409 4 12.002 4ZM12.002 2C14.7186 2 15.0578 2.01 16.1245 2.06C17.1886 2.10917 17.9145 2.2775 18.552 2.525C19.2111 2.77917 19.7678 3.1225 20.3236 3.67833C20.8786 4.23417 21.222 4.7925 21.477 5.45C21.7236 6.08667 21.892 6.81333 21.942 7.8775C21.9895 8.94417 22.002 9.28333 22.002 12C22.002 14.7167 21.992 15.0558 21.942 16.1225C21.8928 17.1867 21.7236 17.9125 21.477 18.55C21.2228 19.2092 20.8786 19.7658 20.3236 20.3217C19.7678 20.8767 19.2086 21.22 18.552 21.475C17.9145 21.7217 17.1886 21.89 16.1245 21.94C15.0578 21.9875 14.7186 22 12.002 22C9.28528 22 8.94611 21.99 7.87945 21.94C6.81528 21.8908 6.09028 21.7217 5.45195 21.475C4.79361 21.2208 4.23611 20.8767 3.68028 20.3217C3.12445 19.7658 2.78195 19.2067 2.52695 18.55C2.27945 17.9125 2.11195 17.1867 2.06195 16.1225C2.01445 15.0558 2.00195 14.7167 2.00195 12C2.00195 9.28333 2.01195 8.94417 2.06195 7.8775C2.11111 6.8125 2.27945 6.0875 2.52695 5.45C2.78111 4.79167 3.12445 4.23417 3.68028 3.67833C4.23611 3.1225 4.79445 2.78 5.45195 2.525C6.08945 2.2775 6.81445 2.11 7.87945 2.06C8.94611 2.0125 9.28528 2 12.002 2Z" fill="black" />
                  </svg>
                  <span className='text-[20px] font-medium'>Instagram</span>
                </h5>
                <h5 className='flex items-center gap-x-1'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.002 19.9381C16.9483 19.446 20.002 16.0796 20.002 12C20.002 7.58172 16.4203 4 12.002 4C7.58367 4 4.00195 7.58172 4.00195 12C4.00195 16.0796 7.05564 19.446 11.002 19.9381V14H9.00195V12H11.002V10.3458C11.002 9.00855 11.1412 8.52362 11.4027 8.03473C11.6641 7.54584 12.0478 7.16216 12.5367 6.9007C12.9194 6.69604 13.3941 6.57252 14.2237 6.51954C14.5529 6.49851 14.9791 6.52533 15.502 6.6V8.5H15.002C14.0847 8.5 13.7062 8.54332 13.4799 8.66433C13.3396 8.73939 13.2414 8.83758 13.1663 8.97793C13.0453 9.20418 13.002 9.42853 13.002 10.3458V12H15.502L15.002 14H13.002V19.9381ZM12.002 22C6.4791 22 2.00195 17.5228 2.00195 12C2.00195 6.47715 6.4791 2 12.002 2C17.5248 2 22.002 6.47715 22.002 12C22.002 17.5228 17.5248 22 12.002 22Z" fill="black" />
                  </svg>
                  <span className='text-[20px] font-medium'>Facebook</span>
                </h5>
                <h5 className='flex items-center gap-x-1'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z" fill="black" />
                  </svg>
                  <span className='text-[20px] font-medium'>Twitter</span>
                </h5>
              </div>


              <div className='lg:hidden block'>
                <video className='w-[800px]   rounded-3xl ' src='/Videos/advideo.mp4' autoPlay loop />
                <div className='flex justify-center '>
                  <Image className='absolute  translate-y-[-120px]  ' width={100} height={200} src="/Images/MobilePhone.png" alt='Mobile Phone' />
                </div>

                <h4 className='text-[24px]  mt-24 text-center font-[600]   text-[#664BFB]'>Download The App</h4>
                
                
                 
              </div>

              <div className='lg:flex flex-col leading-[1.5rem] gap-y-2 hidden'>
                <h3 className='text-[#664BFB] text-[24px] font-semibold pt-4'>Categories</h3>
                <span className='text-[20px] font-medium'>Electronics</span>
                <span className='text-[20px] font-medium'>TV and Appliances</span>
                <span className='text-[20px] font-medium'>Furniture</span>
                <span className='text-[20px] font-medium'>E Sports</span>
                <span className='text-[20px] font-medium'>Gym & Sports Equipment</span>
                <span className='text-[20px] font-medium'>Child Care</span>
                <span className='text-[20px] font-medium'>Musical Instrument</span>
              </div>

              <div className='lg:flex flex-col gap-y-2 leading-[1.5rem] hidden'>
                <h3 className='text-[#664BFB] text-[24px] font-semibold mt-4'>Company</h3>
                <Link href={'#feature'} onClick={handleScroll}>
                  <span className='text-[20px] cursor-pointer font-medium'>
                    Why SellSafe
                  </span>
                </Link>
                <Link href={'#products'} onClick={handleScroll}>
                  <span className='text-[20px] font-medium cursor-pointer'>Overview</span>
                </Link>
                <Link href={'#faqs'} onClick={handleScroll}>
                  <span className='text-[20px] font-medium'>Becho Befikar</span>
                </Link>
              </div>
            </div>

            <div className='lg:block hidden   lg:w-[61.02%] bg-[#F8F6FE] rounded-2xl'>
              <div className='bg-[#664BFB] blur-lg lg:scale-100 scale-[20%]  translate-x-[-500px]  opacity-[0.04] rounded-full backdrop-blur-lg w-[845px] absolute '></div>
              <Image className='absolute scale-95  lg:translate-x-[550px]  ' width={240} height={500} src="/Images/MobilePhone.png" alt='Mobile Phone' />
              <video className='w-[1000px] rounded-3xl   ' src='/Videos/advideo.mp4' autoPlay muted loop />
              
             

              <div className='lg:flex justify-start items-center hidden '>
                <div ref={divRef2} className='flex' >
                  <Dialog>
                    <div className='w-full  items-center  flex justify-center'>
                      <DialogTrigger> <Image className='cursor-pointer' src={'/Images/GooglePlay.svg'} width={180} height={68} alt='Google Play Button' /></DialogTrigger>
                      <DialogTrigger>  <Image className='cursor-pointer' src={'/Images/AppleStore.svg'} width={180} height={68} alt='Apple Store Button' /></DialogTrigger>
                      <DialogTrigger>
                      <div className='text-[#664BFB] text-[24px]  cursor-pointer  ml-10 font-[700]'>Download The App now!</div>
                      </DialogTrigger>
                    </div>
                    <DialogContent className='w-full   lg:pt-24  lg:pb-14'>
                      <DialogHeader>
                        <Gilroy>
                          <DialogTitle className='text-[64px] mb-5 leading-[4rem] lg:text-center text-left font-[400] text-[#271E58]'>
                            <Image className='absolute translate-x-24 lg:translate-x-60  translate-y-[-10px] lg:translate-y-[-50px]' src={'/Images/Stars.gif'} width={140} height={200} alt='Stars' />
                            Get beta access of the app
                          </DialogTitle>
                        </Gilroy>
                        <input className='lg:w-1/2 my-5 block lg:hidden   selection:outline  py-2 w-full border-[1px] rounded-lg border-black bg-purple-100 bg-opacity-10 focus:outline-none px-2' type="text" placeholder='ENTER YOUR MOBILE NUMBER...' />
                        <DialogDescription className='lg:text-center text-left   text-black text-[24px] font-[400]'>
                          An easy and efficient way to sell and buy second hand products.
                          <br />
                          Find the right buyer for almost anything.
                        </DialogDescription>

                        <div className='flex flex-col items-center '>
                          <input className='lg:w-1/2 lg:block hidden my-3  selection:outline  py-2 w-full border-[1px] rounded-lg border-black bg-purple-100 bg-opacity-10 focus:outline-none px-2' type="text" placeholder='ENTER YOUR MOBILE NUMBER...' />
                          <div className='text-[#5C5C5C] lg:block hidden font-[400] text-[15px] '>
                            We care about your data in our
                            <span className='underline ml-[4px] cursor-pointer'>Privacy Policy</span> .
                          </div>
                          <button className="lg:mt-5 mt-10 mb-5 lg:translate-y-1  lg:w-fit w-full px-8 text-white py-2 rounded-3xl  hover:scale-105 font-light duration-500 transition-all bg-gradient-to-r from-[#836EF6] to-[#664BFB]">
                            <Mabry>
                              GET BETA ACCESS
                            </Mabry>
                          </button >
                          <div className='text-[#5C5C5C] block lg:hidden font-[400] text-[15px] '>
                            We care about your data in our
                            <span className='underline ml-[4px] cursor-pointer'>Privacy Policy</span> .
                          </div>
                        </div>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <div className='flex lg:hidden  sticking' >
                  <Dialog>
                    <div className='w-full   flex justify-center'>
                      <DialogTrigger> <Image className='cursor-pointer' src={'/Images/GooglePlay.svg'} width={180} height={68} alt='Google Play Button' /></DialogTrigger>
                      <DialogTrigger>  <Image className='cursor-pointer' src={'/Images/AppleStore.svg'} width={180} height={68} alt='Apple Store Button' /></DialogTrigger>
                    </div>
                    <DialogContent className='w-full   lg:pt-24  lg:pb-14'>
                      <DialogHeader>
                        <Gilroy>
                          <DialogTitle className='text-[64px] mb-5 leading-[4rem] lg:text-center text-left font-[400] text-[#271E58]'>
                            <Image className='absolute translate-x-24 lg:translate-x-60  translate-y-[-10px] lg:translate-y-[-50px]' src={'/Images/Stars.gif'} width={140} height={200} alt='Stars' />
                            Get beta access of the app
                          </DialogTitle>
                        </Gilroy>
                        <input className='lg:w-1/2 my-5 block lg:hidden   selection:outline  py-2 w-full border-[1px] rounded-lg border-black bg-purple-100 bg-opacity-10 focus:outline-none px-2' type="text" placeholder='ENTER YOUR MOBILE NUMBER...' />
                        <DialogDescription className='lg:text-center text-left   text-black text-[24px] font-[400]'>
                          An easy and efficient way to sell and buy second hand products.
                          <br />
                          Find the right buyer for almost anything.
                        </DialogDescription>

                        <div className='flex flex-col items-center '>
                          <input className='lg:w-1/2 lg:block hidden my-3  selection:outline  py-2 w-full border-[1px] rounded-lg border-black bg-purple-100 bg-opacity-10 focus:outline-none px-2' type="text" placeholder='ENTER YOUR MOBILE NUMBER...' />
                          <div className='text-[#5C5C5C] lg:block hidden font-[400] text-[15px] '>
                            We care about your data in our
                            <span className='underline ml-[4px] cursor-pointer'>Privacy Policy</span> .
                          </div>
                          <button className="lg:mt-5 mt-10 mb-5 lg:translate-y-1  lg:w-fit w-full px-8 text-white py-2 rounded-3xl  hover:scale-105 font-light duration-500 transition-all bg-gradient-to-r from-[#836EF6] to-[#664BFB]">
                            <Mabry>
                              GET BETA ACCESS
                            </Mabry>
                          </button >
                          <div className='text-[#5C5C5C] block lg:hidden font-[400] text-[15px] '>
                            We care about your data in our
                            <span className='underline ml-[4px] cursor-pointer'>Privacy Policy</span> .
                          </div>
                        </div>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </div>


      <div ref={divRef} className=' flex z-50  bg-white   sticking    w-full       flex-row justify-center '>
        {isVisible ? <Dialog>
          <div className='w-full  flex justify-center'>
            <DialogTrigger> <Image className='cursor-pointer' src={'/Images/GooglePlay.svg'} width={180} height={68} alt='Google Play Button' /></DialogTrigger>
            <DialogTrigger>  <Image className='cursor-pointer' src={'/Images/AppleStore.svg'} width={180} height={68} alt='Apple Store Button' /></DialogTrigger>
          </div>
          <DialogContent className='w-full   lg:pt-24  lg:pb-14'>
            <DialogHeader>
              <Gilroy>
                <DialogTitle className='text-[64px] mb-5 leading-[4rem] lg:text-center text-left font-[400] text-[#271E58]'>
                  <Image className='absolute translate-x-24 lg:translate-x-60  translate-y-[-10px] lg:translate-y-[-50px]' src={'/Images/Stars.gif'} width={140} height={200} alt='Stars' />
                  Get beta access of the app
                </DialogTitle>
              </Gilroy>
              <input className='lg:w-1/2 my-5 block lg:hidden   selection:outline  py-2 w-full border-[1px] rounded-lg border-black bg-purple-100 bg-opacity-10 focus:outline-none px-2' type="text" placeholder='ENTER YOUR MOBILE NUMBER...' />
              <DialogDescription className='lg:text-center text-left   text-black text-[24px] font-[400]'>
                An easy and efficient way to sell and buy second hand products.
                <br />
                Find the right buyer for almost anything.
              </DialogDescription>

              <div className='flex flex-col items-center '>
                <input className='lg:w-1/2 lg:block hidden my-3  selection:outline  py-2 w-full border-[1px] rounded-lg border-black bg-purple-100 bg-opacity-10 focus:outline-none px-2' type="text" placeholder='ENTER YOUR MOBILE NUMBER...' />
                <div className='text-[#5C5C5C] lg:block hidden font-[400] text-[15px] '>
                  We care about your data in our
                  <span className='underline ml-[4px] cursor-pointer'>Privacy Policy</span> .
                </div>
                <button className="lg:mt-5 mt-10 mb-5 lg:translate-y-1  lg:w-fit w-full px-8 text-white py-2 rounded-3xl  hover:scale-105 font-light duration-500 transition-all bg-gradient-to-r from-[#836EF6] to-[#664BFB]">
                  <Mabry>
                    GET BETA ACCESS
                  </Mabry>
                </button >
                <div className='text-[#5C5C5C] block lg:hidden font-[400] text-[15px] '>
                  We care about your data in our
                  <span className='underline ml-[4px] cursor-pointer'>Privacy Policy</span> .
                </div>
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog> : null}
      </div>
    </main>
  )
}
