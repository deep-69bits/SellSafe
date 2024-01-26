import React from 'react'
import Header from './Header'
import Footer from './Footer'
const Layout = ({children}:any) => {
  return (
    <div className='selection:bg-transparent max-w-[1800px] mx-auto min-h-screen  bg-purple-100 bg-opacity-30'>
       <Header/>
          {children}
        
    </div>
  )
}

export default Layout