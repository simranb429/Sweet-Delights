import {useState} from 'react'
import ProductCard from './ProductCard'


function Product({darkMode, setCart}){
    const[search, setSearch] = useState("")
    const[category, setCategory] = useState("All")

    const products =[
        {image:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400",name:"Chocolate Cake",
                    name:"Chocolate Cake" ,
            description:"Rich and moist" ,
                     price:"$35"},
        {image:"https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400",
                    name:"Pasteries" ,
                     description:"Soft and creamy",
                      price:"$20"},
                      
        { image:"https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400",
                    name:"Crossiant" ,
                    description:"Buttery and flaky" ,
                    price:"$4"},

        { image:"https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400" ,
                    name:"Cookies" ,
                    description:"Crunchy nuts" ,
                    price:"$10"},

          {image:"https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=400" ,
                    name:"Cupcake",
                     description:"Rich in flavour" ,
                     price:"$15"}          
       
    ]

    const filtered = products.filter((p) => {
       const matchesSearch = p.name.toLowerCase().trim().includes(search.toLowerCase().trim())
       const matchesCategory = category === "All"
       return matchesSearch && matchesCategory
})

 const categories = ["All", "Cakes", "Breads" , "Cookies"]
    return(
        <div id="menu"
         className="product-container"
        style={{
           textAlign:"center",
           backgroundColor:  darkMode ? "#1a1a1a": "transparent",
           marginTop:"50px"
        }}>
         <h2 style={{color: darkMode ? "#f5f5f5":"#5c3d2e"}}>Our Specialities</h2>
         
         <div style={{
            display:"flex",
            justifyContent:"center",
            flexWrap:"wrap",
            marginTop:"20px",
            gap:"10px"
         }}>
            {categories.map((c) => (
            <button
             key={c}
             onClick={() => setCategory(c)}
             style={{
                padding:"8px 10px",
                borderRadius:"20px",
                border:"none",
                fontSize:"15px",
                cursor:"pointer",
                backgroundColor: category === c ? "#ff7b6b": (darkMode ? "#2b2b2b" : "#ffe4e1"),
                color: category === c ? "white" : (darkMode ? "#f5f5f5" : "#5c3d2e"),
                transition:"0.3s"
             }}
            >
                {c}</button>
            ))}
         </div>
         <input 
          type="text"
          placeholder="🔍 Search for a product...."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            marginTop:"20px",
            padding:"10px 16px",
            width:"280px",
            borderRadius:"25px",
            border:"1px solid #ddd",
            fontSize:"15px",
            outline:"none"
          }}
         />
         <div style={{
            display:"flex",
            justifyContent:"center", 
            gap:"50px",
            flexWrap:"wrap",
            marginTop:"50px"}}>
               
            {filtered.length > 0 ? (
                filtered.map((p) => (
                    <ProductCard 
                     key={p.name}
                     darkMode={darkMode}
                     image={p.image}
                     name={p.name}
                     description={p.description}
                     price={p.price}
                     setCart={setCart}
                    />
                ))
            
            ) : (
                <p style={{
                    color: darkMode ? "#f5f5f5" : "#5c3d2e",
                    fontStyle:"italic"
                }}>
                   No products found 😔
                </p>
            )}
                   
                  
            </div>
            
        </div>

   )
}


export default Product