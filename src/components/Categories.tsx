import React from 'react'
import '../app/slider.css'



const CategoryAtom = ({ children }: any) => {
  return (
    <div className='inline-block hover:scale-110 duration-500 transition-all cursor-pointer border-[1px] text-xl border-black bg-purple-200 rounded-full px-8 font-semibold py-3'>
      {children}
    </div>
  )
}

const slidecontent = [
  "MOBILES", "ELECTRONICS", "HOME DECOR", "GAMING", "MUSIC", "AUTOMOBILE",
  "HOME CARE", "TWO WHEELERS", "BABY CARE", "LAPTOPS","MOBILES","ELECTRONICS", "GAMING",
  "MUSIC", "AUTOMOBILE"
]

const Categories = () => {
  return (
    <div className='   overflow-hidden  flex flex-col    mb-10 mt-20'>

      <div className="slider">
        <div className="slide-track py-1">
          {
            slidecontent.map((item, index) => {
              return (
                <div key={index} className="slide">
                  <CategoryAtom>{item}</CategoryAtom>
                </div>
              )
            })
          }
        </div>
      </div>


      <div className="rslider">
        <div className="rslide-track py-1">
        {
            slidecontent.map((item, index) => {
              return (
                <div key={index} className="rslide">
                  <CategoryAtom>{item}</CategoryAtom>
                </div>
              )
            })
          }
      
        </div>
      </div>

      <div className="slider lg:hidden block">
        <div className="slide-track py-1">
          {
            slidecontent.map((item, index) => {
              return (
                <div key={index} className="slide">
                  <CategoryAtom>{item}</CategoryAtom>
                </div>
              )
            })
          }
        </div>
      </div>

      <div className="rslider lg:hidden block">
        <div className="rslide-track py-1">
        {
            slidecontent.map((item, index) => {
              return (
                <div key={index} className="rslide">
                  <CategoryAtom>{item}</CategoryAtom>
                </div>
              )
            })
          }
      
        </div>
      </div>


    </div>
  )
}

export default Categories