import React from 'react'


const Contact = () => {
    return (
        <div className='lg:flex items-center block gap-x-40 justify-between lg:px-10 px-3 '>
            <div className='text-[70px] lg:hidden block mb-10 lg:text-[137px] text-left  lg:text-right lg:float-right float-none text-[#836EF6] gilory font-[600] leading-tight '>
                BECHO  BEFIKAR
            </div>
            <div className=' '>
                <h2 className='text-[#271E58]  font-[500] text-[36px] gilory  leading[36px]'>
                    Be the first to know about any Product
                </h2>
                <h3 className='text-[24px] '>
                    We’re still building. Subscribe for updates and 20% off when we launch. No spam, we promise!
                </h3>
                <div className='lg:flex block sm:gap-y-5   gap-x-5   '>
                    <input className='lg:w-1/2 my-3  py-2 w-full border-[1px] rounded-lg border-black bg-purple-100 bg-opacity-10 focus:outline-none px-2' type="text" placeholder='ENTER YOUR EMAIL...' />
                    <button className=' mabry px-6 my-3  text-white py-2 rounded-3xl w-full lg:w-1/2 hover:scale-105 duration-500 transition-all bg-gradient-to-r from-[#836EF6] to-[#664BFB]'>
                        SUBSCRIBE
                    </button>
                </div>
                <div className='text-[#5C5C5C] font-[400] text-[15px] '>
                We care about your data in our
                <span className='underline'> Privacy Policy.</span>
                </div>
            </div>
            <div className='text-[120px] leading-[7rem] hidden lg:block lg:text-[137px] text-left  lg:text-right lg:float-right float-none text-[#836EF6] gilory font-[600]  '>
                BECHO  BEFIKAR
            </div>

        </div>
    )
}

export default Contact