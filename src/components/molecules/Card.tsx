import React from 'react'
import Image from 'next/image'
const Card = () => {
    return (
        <div className='border-[1px] border-solid border-[#2933FF]  cursor-pointer rounded-xl transition-all duration-100   hover:border-r-4 hover:border-b-4'>
            <div className='hover:translate-x-[-2px] py-5 px-5 hover:translate-y-[-2px] duration-100  transition-all   '>
                <div className='lg:flex block justify-between w-full '>
                    <div>
                        <Image className='absolute  translate-x-12 translate-y-12' src={'/Images/tick.png'} width={31} height={31} alt='tick' />
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

                <div>
                    <div className=' rounded-2xl absolute my-4 mx-3 border-[1px] border-[#664BFB]  bg-purple-50 inline-block px-2  text-[#664BFB]  mabry text-[15px]  font-[700] '>
                    HOME DECOR
                    </div>
                    <img className='rounded-xl' src="https://images.woodenstreet.de/image/data/fabric-sofa/Mellisa-fabric-sofa/1.jpg" alt="" />
                </div>

            </div>
        </div>
    )
}

export default Card