
function Testimonials({darkMode}){
    const reviews = [
        {name:"Sarah", text:"Best chocolate cake I've ever had!" , stars:"⭐⭐⭐⭐⭐"},
        {name:"Ahmed", text:"Fresh bread every morning.Love this place!", stars:"⭐⭐⭐⭐⭐"},
        {name:"Priya", text:"The cupcakes are the soft and delicious!", stars:"⭐⭐⭐⭐⭐"}
    ]
   return(
    <div id="testimonials"
    style={{
        textAlign:"center",
         padding:"60px 20px",
         backgroundColor: darkMode ? "#1a1a1a" :"#fff8f0"

    }}>
     <h2 style={{color:darkMode ? "#f5f5f5" : "#5c3d2e"}}>
        What Our Customers Say</h2>

        <div style={{
            display:"flex",
            justifyContent:"center",
            gap:"30px",
            flexWrap:"wrap",
            marginTop:"40px"
        }}>
            {reviews.map((r) => (
                <div key={r.name} style={{
                    width:"280px",
                    backgroundColor:darkMode ? "#2b2b2b" : "white",
                    padding:"30px",
                    borderRadius:"30px",
                    boxShadow:"0 4px 10px rgba(0,0,0,0.1)"
                }}
                >
                 <p style={{fontSize:"20px"}}>{r.stars}</p>
                 <p style={{color:darkMode ? "#c9c9c9" : "#7a5c4e", fontStyle:"italic", marginTop:"10px"}}>"{r.text}"</p>
                 <p style={{color: darkMode ? "#f5f5f5" : "#5c3d2e", fontWeight:"bold", marginTop:"15px"
                 }}>-{r.name}</p>
                </div>
            ))}
            
        </div>
    </div>
   )
}
export default Testimonials