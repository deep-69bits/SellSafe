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
       productImage:'https://images.woodenstreet.de/image/data/fabric-sofa/Mellisa-fabric-sofa/1.jpg',
       profileImage:'https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D'
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
      price:'12,999',
      product:'Large Sofa 3 Set',
      secondHand:'Buy Second Hand',
      productType:'HOME DECOR',
      productImage:'https://images.woodenstreet.de/image/data/fabric-sofa/Mellisa-fabric-sofa/1.jpg',
      profileImage:'https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D'
    }
  },
  {
    type:'ProductCard',
    productData:{
      price:'12,999',
      product:'Large Sofa 3 Set',
      secondHand:'Buy Second Hand',
      productType:'HOME DECOR',
      productImage:'https://images.woodenstreet.de/image/data/fabric-sofa/Mellisa-fabric-sofa/1.jpg',
      profileImage:'https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D'
    }
  },
  {
    type:'ProductCard',
    productData:{
      price:'12,999',
      product:'Large Sofa 3 Set',
      secondHand:'Buy Second Hand',
      productType:'HOME DECOR',
      productImage:'https://images.woodenstreet.de/image/data/fabric-sofa/Mellisa-fabric-sofa/1.jpg',
      profileImage:'https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D'
    }
  },
  {
    type:'ProductCard',
    productData:{
      price:'12,999',
      product:'Large Sofa 3 Set',
      secondHand:'Buy Second Hand',
      productType:'HOME DECOR',
      productImage:'https://images.woodenstreet.de/image/data/fabric-sofa/Mellisa-fabric-sofa/1.jpg',
      profileImage:'https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D'
    }
  },
  {
    type:'ProductCard',
    productData:{
      price:'12,999',
      product:'Large Sofa 3 Set',
      secondHand:'Buy Second Hand',
      productType:'HOME DECOR',
      productImage:'https://images.woodenstreet.de/image/data/fabric-sofa/Mellisa-fabric-sofa/1.jpg',
      profileImage:'https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D'
    }
  },
  {
    type:'ProductCard',
    productData:{
      price:'12,999',
      product:'Large Sofa 3 Set',
      secondHand:'Buy Second Hand',
      productType:'HOME DECOR',
      productImage:'https://images.woodenstreet.de/image/data/fabric-sofa/Mellisa-fabric-sofa/1.jpg',
      profileImage:'https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D'
    }
  },

]
const Products = () => {
  return (
    <div className='lg:px-10 px-4 lg:gap-x-10 gap-x-3  lg:gap-y-10 gap-y-5 my-10 mt-20 grid grid-flow-row lg:grid-cols-4 grid-cols-2  '>
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