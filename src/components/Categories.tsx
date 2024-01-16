import React from 'react'
import '../app/slider.css'



const CategoryAtom = ({ children }: any) => {
  return (
    <div className='inline-block hover:scale-110 duration-500 transition-all cursor-pointer border-[1px] text-xl border-black bg-purple-200 rounded-full px-8 font-semibold py-3'>
      {children}
    </div>
  )
}

const Categories = () => {
  return (
    <div className='lg:px-10  px-4 overflow-hidden  flex flex-col gap-10 my-20'>

      <div className="slider">
        <div className="slide-track py-1">
          <div className="slide">
            <CategoryAtom>MOBILES</CategoryAtom>
          </div>
          <div className="slide">
            <CategoryAtom>ELECTRONICS</CategoryAtom>
          </div>
          <div className="slide">
            <CategoryAtom>HOME DECOR</CategoryAtom>
          </div>
          <div className="slide">
            <CategoryAtom>GAMING</CategoryAtom>
          </div>
          <div className="slide">
            <CategoryAtom>MUSIC</CategoryAtom>
          </div>
          <div className="slide">
            <CategoryAtom>AUTOMOBILE</CategoryAtom>
          </div>
          <div className="slide">
            <CategoryAtom>MOBILES</CategoryAtom>
          </div>
          <div className="slide">
            <CategoryAtom>ELECTRONICS</CategoryAtom>
          </div>
          <div className="slide">
            <CategoryAtom>HOME DECOR</CategoryAtom>
          </div>
          <div className="slide">
            <CategoryAtom>GAMING</CategoryAtom>
          </div>
          <div className="slide">
            <CategoryAtom>MUSIC</CategoryAtom>
          </div>
          <div className="slide">
            <CategoryAtom>AUTOMOBILE</CategoryAtom>
          </div>
          <div className="slide">
            <CategoryAtom>ELECTRONICS</CategoryAtom>
          </div>
        </div>
      </div>


      <div className="slider">
        <div className="slide-track py-1">
          <div className="slide">
          <CategoryAtom>HOME CARE</CategoryAtom>
          </div>
          <div className="slide">
          <CategoryAtom>TWO WHEELERS</CategoryAtom>
          </div>
          <div className="slide">
          <CategoryAtom>BABY CARE</CategoryAtom>
          </div>
          <div className="slide">
          <CategoryAtom>LAPTOPS</CategoryAtom>
          </div>
          <div className="slide">
          <CategoryAtom>HOME CARE</CategoryAtom>
          </div>
          <div className="slide">
          <CategoryAtom>TWO WHEELERS</CategoryAtom>
          </div>
          <div className="slide">
          <CategoryAtom>BABY CARE</CategoryAtom>
          </div>
          <div className="slide">
            <CategoryAtom>GAMING</CategoryAtom>
          </div>
          <div className="slide">
          <CategoryAtom>LAPTOPS</CategoryAtom>
          </div>
          <div className="slide">
          <CategoryAtom>TWO WHEELERS</CategoryAtom>
          </div>
          <div className="slide">
          <CategoryAtom>HOME CARE</CategoryAtom>
          </div>
          <div className="slide">
          <CategoryAtom>TWO WHEELERS</CategoryAtom>
          </div>
          <div className="slide">
            <CategoryAtom>ELECTRONICS</CategoryAtom>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories