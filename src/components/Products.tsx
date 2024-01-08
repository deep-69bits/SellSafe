import React from 'react'
import Card from './molecules/Card'

const Products = () => {
  return (
    <div className='lg:px-10 px-4 lg:gap-x-10 gap-x-5  gap-y-10 my-10 mt-20 grid grid-flow-row lg:grid-cols-4 grid-cols-2  '>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  )
}

export default Products