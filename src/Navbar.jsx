

function Navbar({darkMode, setDarkMode, cart}){
    return(
     <div 
     className="Navbar"
     style={{
        backgroundColor: darkMode ? "#2b2b2b" : "#fff8f0",
        textAlign:"center",
        paddingTop:"10px",
        marginTop:"10px",
        fontSize:"18px"
     }}>
        <a href="#home" className="nav-link" >Home</a>
        <a href="#about" className="nav-link">About</a>
         <a href="#menu" className="nav-link">Menu</a>
          <a href="#contact" className="nav-link">Contact</a>

          <span className="nav-link" style={{fontWeight:"bold"}}>
            🛒{cart.length}</span>

          <button
          onClick={()=> setDarkMode(!darkMode)}
           style={{
            marginLeft:"20px",
            padding:"6px 14px",
            fontSize:"16px",
            cursor:"pointer",
            border:"none",
            borderRadius:"50%",
            backgroundColor: darkMode ? "#2b2b2b" : "#fff8f0",
            color:"white"
          }}
          >
            {darkMode ? "🌞":"🌙"}
          </button>
        </div>
    )
}

export default Navbar