function Footer({darkMode, setdarkMode}){
    return(
        
      <footer style={{
        textAlign:"center",
        backgroundColor: darkMode ? "#000000" : "#ffffff",
        color:"white",
       width:"100%",
       padding:"10px"
      }}>
        <p>© 2026 Sweet Delights.All rights reserved.</p>
        <button 
        onClick={() => setdarkMode(!darkMode
          
        )}
        style={{
           marginTop:"20px",
           padding:"6px 14px",
           border:"none",
           borderRadius:"50%",
           color:"white",
           backgroundColor: darkMode ? "#000000" :"#ffffff",
        }}>
          {darkMode ? "🌞" : "🌙 "}
        </button>
      </footer>
    )
}

export default Footer