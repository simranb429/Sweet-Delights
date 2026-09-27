function CartButton({cart}){
    if(cart.length === 0 ) return null

    const scrollToCart = () => {
        const cartSection = document.getElementById("cart")
        if(cartSection){
            cartSection.scrollIntoView({behavior: "smooth"})
        }
    }
        return(
         <button onClick={scrollToCart}
          style={{
            position:"fixed",
            bottom:"30px",
            left:"30px",
            padding:"12px 20px",
            fontSize:"16px",
            fontWeight:"bold",
            borderRadius:"50px",
            color:"white",
            border:"none",
            backgroundColor:"#ff6b6b",
            cursor:"pointer",
            boxShadow:"0 4px 12px rgba(0,0,0,0.1)",
            zIndex:999
            

          }}
         >
           🛒 View Cart ({cart.length})
         </button>
        )
}

export default CartButton