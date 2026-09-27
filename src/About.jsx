import { useState } from "react"

function About({darkMode}){
    const [showText, setShowText] = useState(false);
    return(
        <div id="about"
         style={{
            textAlign:"center",
            padding:"50px 20px",
            color: darkMode ? "#f5f5f5":"#5c3d2e",
            backgroundColor: darkMode ? "#1a1a1a": "#transparent"
        }}>

        <h2>About Us</h2>

        <button onClick={() => setShowText(!showText)}
            style={{
                marginTop:"15px",
                padding:"8px 20px",
                borderRadius:"20px" ,
                border:"none",
                cursor:"pointer",
                backgroundColor:"#ff6b6b",
                color:"white",
                fontSize:"15px"

            }}
            >
            {showText ? "Hide" : "Read More"}</button>


            {showText && (

        <p style={{fontStyle:"italic",
        maxWidth:"600px",
        margin:"20px auto",
        lineHeight:"1.8"}}>
            At Sweet Delights, every bake is made with care and love.
            From our ovens to your table, we bring you warmth in every bite.
        </p>
        )}
        </div>
    )
}

export default About