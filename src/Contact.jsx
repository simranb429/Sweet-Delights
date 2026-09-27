import { useState } from 'react'

function Contact(){
    const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    const[message, setMessage] = useState("")

    const handleSubmit = (e) => {
       e.preventDefault()
       alert(`Thank you,  ${name}! We will get back soon.💘`)
       setName("")
       setEmail("")
       setMessage("")
    }


    return(
        <div style={{
            textAlign:"center",
            padding:"60px 20px",
            backgroundColor:"#fff8f0"
        }}>
        <h2 style={{color:"#5c3d2e"}}>Contact Us</h2>
        <p style={{fontStyle:"italic",marginTop:"10px"}}>
            We'd love to hear from you!
            </p>

        <form  onSubmit={handleSubmit}
        style={{
         display:"flex",
         flexDirection:"column",
         margin:"30px auto",
         gap:"25px",
         maxWidth:"300px"
        }}>
        <input 
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) =>setName(e.target.value)}
        style={{
        padding:"10px",
        borderRadius:"10px",
        border:"2px solid #ddd",
       
        }}
        />
    
    <input 
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
            padding:"10px",
            borderRadius:"10px",
            border:"2px solid #ddd"
        }}
    />

    <textarea
    placeholder="Your Message"
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    rows="4"
    style={{
        padding:"10px",
            borderRadius:"10px",
            border:"2px solid #ddd"
    }}
    ></textarea>
    <button 
     type="submit"
     className="order-btn"  
     >Send Message</button>
         
        </form>
        </div>
    )
}

export default Contact