import React from 'react'
import Image from 'next/image'


const Info = () => {
  return (
    <div className=' rounded-2xl bg-[#F8F6FE] m-10 py-8'>
        <div className='text-6xl text-[#271E58] font-semibold text-center font-Gilroy-SemiBold '>Relax, Resell, Repeat</div>
        <div className=' center text-center font-Mabry Pro text-2xl border-xl px-5 my-8 mx-[23%] font-semibold capitalize '>An easy and efficient way to sell and buy second hand products. Find the right buyer for almost anything.
        </div>
        <div className=' grid grid-flow-cols md:m-20 lg:mb-5 lg:mr-0 lg:flex  '>
            <div className=' sm:min-w-[500px] lg:w-[45%] md:w-[80%]  '>
                <div className=' p-7 rounded-2xl bg-white shadow-xl '>
                    <h1 className=' text-[#684EFB] font-semibold font-Arial text-3xl pb-5 -pt-2 '>AI INTEGRATION</h1>
                    <div className=' flex items-center'>
                        <div className=' p-6 bg-[#E2D9FF] rounded-xl '>
                        <Image className=' ' src={'/Images/ai.svg'}  width={150} height={150} alt='AI' />
                        </div>
                        <div className=' font-Arial text-2xl font-semibold ml-10 '>Smart recommendations for a seamless selling and buying experience.</div>
                    </div>
                </div>
                <div className=' mt-10 p-7 rounded-2xl bg-white shadow-xl '>
                    <h1 className=' text-[#684EFB] font-semibold font-Arial text-3xl pb-5 -pt-2 '>VERIFIED USERS</h1>
                    <div className=' flex items-center'>
                        <div className=' p-6 bg-[#E2D9FF] rounded-xl '>
                        <Image className=' ' src={'/Images/users.svg'} width={150} height={150} alt='AI' />
                        </div>
                        <div className=' font-Arial text-2xl font-semibold ml-10 '>Trust and safety are ensured with Aadhar verification of every user.</div>
                    </div>
                </div>
                <div className=' mt-10 p-7 rounded-2xl bg-white shadow-xl '>
                    <h1 className=' text-[#684EFB] font-semibold font-Arial text-3xl pb-5 -pt-2 '>RESELLING</h1>
                    <div className=' flex items-center'>
                        <div className=' p-6 bg-[#E2D9FF] rounded-xl '>
                        <Image className=' ' src={'/Images/RESELLING.svg'} width={150} height={150} alt='AI' />
                        </div>
                        <div className=' font-Arial text-2xl font-semibold ml-10 '>Monetise unused items with a few clicks – turning clutter into quick cash!</div>
                    </div>
                </div>
            </div>
            <div className=' md:ml-20 '>
                <Image src={'/Images/Phones.png'} width={550} height={700} alt='Phone' />
            </div>
        </div>
    </div>
  )
}

export default Info