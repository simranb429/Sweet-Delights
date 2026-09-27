function ProductCard({image,name,description,price,darkMode,setCart}){
    const addToCart = () => {
        setCart((prev) => [...prev, {name,price,image}])
    }
    return(
        <div  className="product-card"
         style={{
            width:"220px",
            backgroundColor:"white",
            borderRadius:"",
            textAlign:"center",
            boxShadow:"0 4px 10px rgba(0,0,0,0.1)"
        }}>
        <img 
        src={image}
        alt={name}
        style={{
            width:"100%",
            objectFit:"cover",
            height:"150px",
            borderRadius:"10px"
         
        }}
        />
        
        <h3 style={{color:  darkMode ?"#f5f5f5": "#5c3d2e"}}>{name}</h3>
        <p style={{ color: darkMode ? "#c9c9c9":"#7a5c4e",fontStyle:"italic"}}>{description}</p>
        <p  style={{color: darkMode ? "#f5f5f5":"#5c3d2e", fontWeight:"bold"}}>{price}</p>
        <button
        onClick={addToCart}
         style={{
            marginTop:"10px",
            padding:"8px 10px",
            borderRadius:"20px",
            backgroundColor:"#ff6b6b",
            color:"white",
            fontSize:"14px",
            cursor:"pointer"

         }}
        >Add to Cart</button>
        </div>

        
     
    )
}

export default ProductCard