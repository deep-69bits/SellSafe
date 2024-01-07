import Contact from '@/components/Contact'
import Faq from '@/components/Faq'
import Hero from '@/components/Hero'
import Info from '@/components/Info'
import Products from '@/components/Products'




export default function Home() {
  return (
    <main className="">
    <Hero/> 
    <Products/>
    <Info/>
    <Faq/>
    <Contact/>
    </main>
  )
}
