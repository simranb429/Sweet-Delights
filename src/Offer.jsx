function Offer({darkMode}){
    return(
        <div style={{
             textAlign:"center",
             margin:"30px",
             padding:"10px",
             backgroundColor: darkMode ? "#3b1f1f":"#ff6b6b",
             letterSpacing:"0.5px",
             fontWeight:"bolder",
             color:"white"
        }}>
          🎉 Get 20% off on your first order! Use code<span style={{backgroundColor: darkMode ? "#ff6b6b":"#5c3d2e",padding:"3px 8px",borderRadius:"6px"}}>SWEET20</span>
        </div>
    )
}

export default Offer