function Cart({darkMode,  cart, setCart}){
    const  total = cart.reduce((sum, item) => {
    const priceNumber= Number(item.price.replace("$", ""))
    return sum + priceNumber
    }, 0)

    const removeItem = (indexToRemove) => {
         setCart(cart.filter((_, index) => index !== indexToRemove))
    }
    return(
         <div style={{
            textAlign:"center",
            padding:"60px  20px",
            backgroundColor: darkMode ? "#1a1a1a" : "#fff8f0"
         }}>
         <h2 style={{color: darkMode ? "#f5f5f5" : "#5c3d2e"}}> 🛒 Your Cart</h2>
        {cart.length === 0 ? (
            <p style={{
                color: darkMode ? "#c9c9c9" : "#7a5c4e",
                fontStyle:"italic",
                marginTop:"30px"

            }}
            
            >Your cart is empty. Add something sweet! 🥯</p>
        ) : (
         <>
         <div style={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            gap:"15px",
            marginTop:"30px"

         }}>
            {cart.map((item, index) => (
            <div 
            key={index}
            style={{
                display:"flex",
                alignItems:"center",
                justifyContent:"space-between",
                width:"300px",
                backgroundColor: darkMode ? "#2b2b2b" : "#white",
                   padding:"12px 12px",
                   borderRadius:"12px",
                   boxShadow:"0 4px 10px rgba(0,0,0,0.1)" }}>
                   <img  
                    src={item.image}
                    alt={item.name}
                    style={{width:"50px",
                           height:"50px",
                           objectFit:"cover",
                           borderRadius:"8px"}}/>

                    <span style={{color: darkMode ?"#f5f5f5" :"#5c3d2e", fontWeight:"bold"}} >{item.name}</span>
                     <span style={{color:"#ff6b6b", fontWeight:"bold"}}>{item.price}</span>
                    <button
                     onClick={() => removeItem(index)}
                         style={{
                            background:"transparent",
                            border:"none",
                            cursor:"pointer",
                            color:"#ff6b6b"

                         }}
                    >
                        ❌
                    </button>
                 
                 </div>

                 ))}
         </div>

         <h3 style={{
            marginTop:"30px",
            color:darkMode ? "#f5f5f5" : "#5c3d2e"
         }}> Total: ${total}</h3>
         <button
           onClick={() => {
               alert("Thank you for your order! 🥯 Your treats are on the way." )
               setCart([])
           }}
            style={{
                marginTop:"30px",
                padding:"12px 30px",
                color:"white",
                backgroundColor:"#ff6b6b",
                fontSize:"16px",
                border:"none",
                borderRadius:"25px",
                cursor:"pointer",
                transition:"0.3s"
            }}
           >
           
            Checkout
         </button>
         </>   
        )}
        </div>
    )
}

export default Cart