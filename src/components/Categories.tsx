import React from 'react'



const CategoryAtom=({children}:any)=>{
    return(
        <div className='inline-block hover:scale-110 duration-500 transition-all cursor-pointer border-[1px] text-xl border-black bg-purple-200 rounded-full px-8 font-semibold py-3'>
            {children}
        </div>
    )
}

const Categories = () => {
  return (
    <div className='lg:px-10 py-10 px-4 overflow-hidden hidden lg:flex flex-col gap-10 my-20'>
        <div className='lg:flex  gap-x-8 lg:translate-x-40 '>
                <CategoryAtom>MOBILES</CategoryAtom>
                <CategoryAtom>ELECTRONICS</CategoryAtom>
                <CategoryAtom>HOME DECOR</CategoryAtom>
                <CategoryAtom>GAMING</CategoryAtom>
                <CategoryAtom>MUSIC</CategoryAtom>
                <CategoryAtom>AUTOMOBILE</CategoryAtom>
        </div>
        <div className='flex gap-x-8 translate-x-10 '>
                <CategoryAtom>HOME CARE</CategoryAtom>
                <CategoryAtom>TWO WHEELERS</CategoryAtom>
                <CategoryAtom>MOBILE ACCESSROIES</CategoryAtom>
                <CategoryAtom>BABY CARE</CategoryAtom>
                <CategoryAtom>LAPTOPS</CategoryAtom>
        </div>
    </div>
  )
}

export default Categories