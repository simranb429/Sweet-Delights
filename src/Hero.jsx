import {useState, useEffect} from 'react'

function Hero(){
  const [count, setCount] = useState(0)
  const[showToast, setShowToast] = useState(false)

  const handleOrder = () => {
    setCount(count + 1)
    setShowToast(true)
  }
  useEffect(() => {
    if(showToast) {
      const timer = setTimeout(() => setShowToast(false), 2000)
      return () => clearTimeout(timer)
    }
  },[showToast]
)
    return(
       <div id="home"
       style={{ 
        backgroundColor:"#fff8f0", 
       textAlign:"center",
       paddingTop:"130px",
       paddingBottom:"130px",
       backgroundImage:"url('https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1600')",
       backgroundSize:"cover",
       backgroundPosition:"center"
      }}   
        >
      <h1 style={{
        color:"#5c3d2e"}}>🥯Sweet Delights</h1>
      <p style={{color:"#5c3d2e",fontStyle:"italic"}}>Freshly baked with love</p>
      
      <button  onClick={handleOrder}
      className="order-btn"
      
      >Order Now</button>


      {showToast > 0 && (
        <div style={{
          position:"fixed",
          bottom:"40px",
          left:"50%",
          transform:"translate(-50%)",
          background:"#5c3d2e",
          padding:"10px",
          borderRadius:"30px",
          fontSize:"16px",
          boxShadow:"0 4px 15px rgba(0,0,0,0.3)",
          zIndex:1000
        }}>❤️ Added to basket!{count} {count === 1 ? "item" : "items"}</div>
      )}
 
     </div>
    )
}

export default Hero