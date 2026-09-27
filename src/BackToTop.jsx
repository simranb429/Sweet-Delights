import {useState, useEffect} from 'react'

function BackToTop(){
    const[visible, setVisible] = useState(false)

    useEffect(() => {
        const handleScroll= () => {
            if(window.scrollY > 300) {
                setVisible(true)
            }else{
                setVisible(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return() => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({top:0, behavior:"smooth"})
    }

    if(!visible) return null

    return(
        <button
        onClick={scrollToTop} 
        style={{
            position:"fixed",
            bottom:"50px",
            right:"30px",
            width:"50px",
            height:"50px",
            borderRadius:"50%",
            backgroundColor:"#5c3d2e",
            color:"white",
            border:"none",
            fontSize:"22px",
            cursor:"pointer",
            boxShadow:"0 4px 12px rgba(0,0,0,0.3)",
            Zindex:"1000"

        }}>
        ⬆
        </button>
    )
}

export default BackToTop