import React from 'react'
import Header from './Header'
import Footer from './Footer'
const Layout = ({children}:any) => {
  return (
    <div className=' max-w-[1800px] mx-auto min-h-screen  bg-purple-100 bg-opacity-30'>
       <Header/>
          {children}
       <Footer/>
    </div>
  )
}

export default Layout