import BackToTop from './BackToTop'
import Navbar from  './Navbar'
import './App.css' 
import Hero from './Hero'
import About from './About'
import Product from './Product'
import Quote from './Quote'
import Contact from './Contact'
import Footer from './Footer'
import Offer from'./Offer'
import {useState, useEffect} from 'react'
import Testimonials from './Testimonials'
import Cart from './Cart'
import CartButton from './CartButton'


function App(){
  const[darkMode, setDarkMode] = useState(false)
  const [cart, setCart] = useState([])

  useEffect(() => {
    if(darkMode){
      document.body.style.backgroundColor="#1a1a1a"
      document.body.style.color="#f5f5f5"
    }else{
      document.body.style.backgroundColor="#ffffff"
      document.body.style.color="#5c3d2e"
    }
  },[darkMode])

  useEffect(() => {
    document.title="Sweet Delights 🥯"
  },[])
  return(
    <div>
    <Navbar  darkMode={darkMode} setDarkMode={setDarkMode} cart={cart}/>
     <Hero />
     <Offer darkMode={darkMode}/>
     <About  darkMode={darkMode}/>
      <Product darkMode={darkMode}  setCart={setCart}/>
      <Cart  darkMode={darkMode} cart={cart} setCart={setCart}/>
      <Quote darkMode={darkMode} />
      <Testimonials darkMode={darkMode}/>
      <Contact darkMode={darkMode}/>
       <Footer  darkMode ={darkMode} setDarkMode ={setDarkMode}/>
       <CartButton  cart={cart}/>
       <BackToTop />
     </div>
    
     
  );
   
    
}

export default App