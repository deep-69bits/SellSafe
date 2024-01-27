import React from 'react'
import Image from 'next/image'

const ProuductCard = ({ data }: any) => {

    return (
        <div className='border-[2px] border-solid border-[#664BFB] col-span-1     cursor-pointer rounded-[20px] transition-all duration-100  border-l-1 border-t-1  hover:border-r-[6px] hover:border-b-[6px]'>
            <div className='hover:translate-x-[-2px] py-5 lg:px-5 px-2 hover:translate-y-[-2px] duration-100  transition-all   '>

                <div className='lg:flex hidden  justify-between w-full '>
                    <div>
                        <Image className='absolute  translate-x-12 translate-y-12' src={'/Images/Tick.svg'} width={31} height={31} alt='tick' />
                        <img className='w-20 h-20  rounded-full' src={data.profileImage} alt="" />
                    </div>
                    <div className='text-right'>
                        <h6 className='mabry text-[20px]  text-[#664BFB] font-[400] leading-[15px]'>₹{data.price}</h6>
                        <div className='my-4'>
                            <h5 className='font-[400] text-[15px]'>{data.product}</h5>
                            <h5 className='underline  font-[700] text-[15px] mabry'>Buy Second Hand</h5>
                        </div>
                    </div>
                </div>

                <div className='lg:hidden block mb-2'>
                    <div className='flex justify-between'>
                        <div>
                            <Image className='absolute  translate-x-8 translate-y-8' src={'/Images/Tick.svg'} width={25} height={25} alt='tick' />
                            <img className='w-14 h-14  rounded-full' src={data.profileImage} alt="" />
                        </div>
                        <h6 className='mabry text-[16px]  text-[#664BFB] font-[400] leading-[15px]'>₹{data.price}</h6>
                    </div>
                    <div className='my-4'>
                        <h5 className='font-[400] text-[15px]'>{data.product}</h5>
                        <h5 className='underline  font-[700] text-[14px] mabry'>Buy Second Hand</h5>
                    </div>
                </div>

                <div>
                    <div className=' rounded-2xl absolute my-2 lg:my-4 lg:mx-3 mx-1 border-[1px] border-[#664BFB]  bg-purple-50 inline-block px-2  text-[#664BFB]  mabry lg:text-[15px] text-[12px]  font-[700] '>
                        {data.productType}
                    </div>
                    <img className='rounded-[11px]' src={data.productImage} alt="" />
                </div>

            </div>
        </div>
    )
}

const PosterCard = () => {
    return (
        <div className='border-[2px] border-solid border-[#664BFB] col-span-1   cursor-pointer rounded-[20px] transition-all duration-100   border-r-[6px] border-b-[6px]'>
            <div className='translate-x-[-2px] py-5 lg:px-5 px-2 translate-y-[-2px] duration-100  transition-all   '>

                <div className='lg:flex hidden  justify-between w-full '>
                    <div>
                        <Image className='absolute  translate-x-12 translate-y-12' src={'/Images/Tick.svg'} width={31} height={31} alt='tick' />

                        <div className='rounded-full flex items-center justify-center bg-[#82CAFB] w-20 h-20'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <g clip-path="url(#clip0_563_3529)">
                                    <path d="M13 14.0619V22H4C4 17.5817 7.58172 14 12 14C12.3387 14 12.6724 14.021 13 14.0619ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM17.7929 19.9142L21.3284 16.3787L22.7426 17.7929L17.7929 22.7426L14.2574 19.2071L15.6716 17.7929L17.7929 19.9142Z" fill="#664BFB" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_563_3529">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div className='text-right'>
                        <h6 className='mabry text-[20px]  text-[#664BFB] font-[400] leading-[15px]'>POST AN AD</h6>
                        <div className='my-4 text-left'>
                            <h5 className='  font-[700] text-[15px] mabry'>Want to see  your</h5>
                            <h5 className='  font-[700] text-[15px] mabry'>stuff here?</h5>
                        </div>
                    </div>
                </div>

                <div className='lg:hidden block mb-2'>
                    <div className='flex justify-between'>
                        <div className='rounded-full flex items-center justify-center bg-[#82CAFB] w-14 h-14'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <g clip-path="url(#clip0_563_3529)">
                                    <path d="M13 14.0619V22H4C4 17.5817 7.58172 14 12 14C12.3387 14 12.6724 14.021 13 14.0619ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM17.7929 19.9142L21.3284 16.3787L22.7426 17.7929L17.7929 22.7426L14.2574 19.2071L15.6716 17.7929L17.7929 19.9142Z" fill="#664BFB" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_563_3529">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <h6 className='mabry text-[12px]  text-[#664BFB] font-[400] leading-[15px]'>POST AN  AD</h6>
                    </div>
                    <div className='my-4 text-left'>
                        <h5 className='  font-[700] text-[15px] mabry'>Want to see  your</h5>
                        <h5 className='  font-[700] text-[15px] mabry'>stuff here?</h5>
                    </div>
                </div>

                <div>
                    <div>
                        <div className=' text-center absolute z-10 mx-auto translate-y-[30%] lg:translate-x-5 translate-x-3 w-[80%]  ' >
                            <p className='lg:text-base text-[10px] font-semibold text-white'>
                                Make some extra cash by selling things in your community.
                                Go on, it's quick and easy.
                            </p>

                            <button className='bg-white lg:scale-100 mt-20 hidden lg:flex justify-center  px-5 mx-auto text-[#664BFB] py-2 items-center gap-2 rounded-3xl'>
                                <svg width="29" height="21" viewBox="0 0 29 21" fill="none" >
                                    <path d="M0 11H28M28.5 11H28M19 1C19.1667 2.66667 20 6.4 22 8C24 9.6 27.1667 10.6667 28 11M28 11C27.3333 11.3333 24.4 12.5 22 14.5C19.6 16.5 19 19.6667 19 21" stroke="#664BFB" stroke-width="3" />
                                </svg>
                                <span className='text-[10px] '>START SELLING</span>
                            </button>

                            <button className='w-full lg:hidden  mt-4 text-center underline text-white  mb-2'>
                                START SELLING
                            </button>

                        </div>
                    </div>
                    <img className='z-0' src="/Images/Rectangle.png" alt="" />
                </div>

            </div>
        </div>
    )
}
{/* 
<button className='bg-white lg:scale-100 mt-16 hidden lg:flex justify-center  px-5 mx-auto text-[#664BFB] py-2 items-center gap-2 rounded-3xl'>
<svg width="29" height="21" viewBox="0 0 29 21" fill="none" >
    <path d="M0 11H28M28.5 11H28M19 1C19.1667 2.66667 20 6.4 22 8C24 9.6 27.1667 10.6667 28 11M28 11C27.3333 11.3333 24.4 12.5 22 14.5C19.6 16.5 19 19.6667 19 21" stroke="#664BFB" stroke-width="3" />
</svg>
<span className='text-[10px] '>START SELLING</span>
</button>

<button className='w-full lg:hidden  mt-4 text-center underline text-white  mb-2'>
START SELLING
</button> */}
const Card = ({ data }: any) => {
    return (
        <div>
            {
                data?.type == "ProductCard" ? <ProuductCard data={data.productData} /> : <PosterCard />
            }
        </div>
    )
}

export default Card