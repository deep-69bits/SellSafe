import React from 'react'
import Image from 'next/image'

const ProuductCard = ({}:any) => {
    return (
        <div className='border-[1px] border-solid border-[#2933FF] lg:h-[400px] h-[300px]  cursor-pointer rounded-xl transition-all duration-100   hover:border-r-4 hover:border-b-4'>
            <div className='hover:translate-x-[-2px] py-5 lg:px-5 px-2 hover:translate-y-[-2px] duration-100  transition-all   '>

                <div className='lg:flex hidden  justify-between w-full '>
                    <div>
                        <Image className='absolute  translate-x-12 translate-y-12' src={'/Images/Tick.svg'} width={31} height={31} alt='tick' />
                        <img className='w-20 h-20  rounded-full' src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    </div>
                    <div className='text-right'>
                        <h6 className='mabry text-[20px]  text-[#664BFB] font-[400] leading-[15px]'>₹12,999</h6>
                        <div className='my-4'>
                            <h5 className='font-[400] text-[15px]'>Large Sofa 3 Set</h5>
                            <h5 className='underline  font-[700] text-[15px] mabry'>Buy Second Hand</h5>
                        </div>
                    </div>
                </div>

                <div className='lg:hidden block mb-2'>
                    <div className='flex justify-between'>
                        <div>
                            <Image className='absolute  translate-x-8 translate-y-8' src={'/Images/Tick.svg'} width={25} height={25} alt='tick' />
                            <img className='w-14 h-14  rounded-full' src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                        </div>
                        <h6 className='mabry text-[16px]  text-[#664BFB] font-[400] leading-[15px]'>₹12,999</h6>
                    </div>
                    <div className='my-4'>
                        <h5 className='font-[400] text-[15px]'>Large Sofa 3 Set</h5>
                        <h5 className='underline  font-[700] text-[14px] mabry'>Buy Second Hand</h5>
                    </div>
                </div>

                <div>
                    <div className=' rounded-2xl absolute my-2 lg:my-4 lg:mx-3 mx-1 border-[1px] border-[#664BFB]  bg-purple-50 inline-block px-2  text-[#664BFB]  mabry lg:text-[15px] text-[12px]  font-[700] '>
                        HOME DECOR
                    </div>
                    <img className='rounded-xl' src="https://images.woodenstreet.de/image/data/fabric-sofa/Mellisa-fabric-sofa/1.jpg" alt="" />
                </div>

            </div>
        </div>
    )
}

const PosterCard = () => {
    return (
        <div className='border-[1px] border-solid border-[#2933FF] lg:h-[400px] h-[300px]  cursor-pointer rounded-xl transition-all duration-100   hover:border-r-4 hover:border-b-4'>
            <div className='hover:translate-x-[-2px] py-5 lg:px-5 px-2 hover:translate-y-[-2px] duration-100  transition-all   '>

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

                <div className=' w-full  lg:py-8 rounded-xl bg-gradient-to-r from-[#836EF6] to-[#664BFB]'>


                    <p className='lg:w-[80%] px-4 w-full lg:text-base text-[10px] font-semibold text-white   py-2  text-center mx-auto '>
                        Make some extra cash by selling things in your community.
                        Go on, it's quick and easy.
                    </p>

                    <button className='bg-white lg:scale-100 hidden lg:flex justify-center mt-10 px-5 mx-auto text-[#664BFB] py-2 items-center gap-2 rounded-3xl'>
                        <svg width="29" height="21" viewBox="0 0 29 21" fill="none" >
                            <path d="M0 11H28M28.5 11H28M19 1C19.1667 2.66667 20 6.4 22 8C24 9.6 27.1667 10.6667 28 11M28 11C27.3333 11.3333 24.4 12.5 22 14.5C19.6 16.5 19 19.6667 19 21" stroke="#664BFB" stroke-width="3" />
                        </svg>
                        <span className='text-[10px] '>START SELLING</span>
                    </button>

                    <button className='w-full lg:hidden  text-center underline text-white mt-4 mb-2'>
                        START SELLING
                    </button>

                </div>

            </div>
        </div>
    )
}
const Card = ({data}:any) => {
    return (
        <div>
         {
            data?.type=="ProductCard"? <ProuductCard/>:<PosterCard/>
         }
        </div>
    )
}

export default Card