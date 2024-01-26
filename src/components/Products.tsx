import React from 'react'
import Card from './molecules/Card'

const data=[
   {
     type:'ProductCard',
     productData:{
       price:'12,999',
       product:'Large Sofa 3 Set',
       secondHand:'Buy Second Hand',
       productType:'HOME DECOR',
       productImage:'/products/sofa.png',
       profileImage:'/users/user1.png'
     }
   }
   ,
   {
      type:'AddCard'
   }
   ,
   {
    type:'ProductCard',
    productData:{
      price:'33,999',
      product:'Apple MAC Book',
      secondHand:'Buy Second Hand',
      productType:'ELECTRONICS',
      productImage:'/products/macbook.png',
      profileImage:'/users/user2.png'
    }
  },
  {
    type:'ProductCard',
    productData:{
      price:'82,999',
      product:'iPhone 14 Pro',
      secondHand:'Buy Second Hand',
      productType:'MOBILES',
      productImage:'/products/iphone.png',
      profileImage:'/users/user3.png'
    }
  },
  {
    type:'ProductCard',
    productData:{
      price:'22,999',
      product:'Play Station 4',
      secondHand:'Buy Second Hand',
      productType:'GAMING',
      productImage:'/products/gaminglaptop.png',
      profileImage:'/users/user4.png'
    }
  },
  {
    type:'ProductCard',
    productData:{
      price:'6,999',
      product:'XBOX 360',
      secondHand:'Buy Second Hand',
      productType:'GAMING',
      productImage:'/products/console.png',
      profileImage:'/users/user5.png'
    }
  },
  {
    type:'ProductCard',
    productData:{
      price:'5,999',
      product:'Guitar',
      secondHand:'Buy Second Hand',
      productType:'MUSIC',
      productImage:'/products/guitar.png',
      profileImage:'/users/user6.png'
    }
  },
  {
    type:'ProductCard',
    productData:{
      price:'22,999',
      product:'Play Station 4',
      secondHand:'Buy Second Hand',
      productType:'GAMING',
      productImage:'/products/ps4.png',
      profileImage:'/users/user7.png'
    }
  },

]
const Products = () => {
  return (
    <div id='products' className='lg:px-10 px-4 lg:gap-x-10 gap-x-3  lg:gap-y-10 m gap-y-5 my-10 mt-20 grid grid-flow-row lg:grid-cols-4 md:grid-cols-2 grid-cols-2  '>
       {
        data.map((item,index)=>{
          return(
            <div key={index}>
            <Card  data={item} />
            </div>
          )
        })
       }
    </div>
  )
}

export default Products