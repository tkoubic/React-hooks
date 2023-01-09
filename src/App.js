import "./App.css"
import {useState, useEffect} from "react"
import ApiData from "./components/ApiData"
import ApiIss from "./components/ApiIss"
const App =()=>{

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [windowHeight, setWindowHeight] = useState(window.innerHeight)
    const [scrollX, setScrollX] = useState(document.clientX)
    const [scrollY, setScrollY] = useState(document.clientY)

    const sizeCheck = ()=>{
        setWindowWidth(window.innerWidth)
    }
    const heightCheck = () => {
        setWindowHeight(window.innerHeight)
    }

    const checkX = (e) =>{
        setScrollX(e.clientX)
        

    } 

    const checkY = (e) => {
        setScrollY(e.clientY)
        
     
    }

    useEffect( () => {
        window.addEventListener("resize", sizeCheck)
        window.addEventListener("resize", heightCheck)
        document.addEventListener("mousemove",checkX)
        document.addEventListener("mousemove",checkY)
            return () => {

                window.removeEventListener("resize", sizeCheck)
                window.removeEventListener("resize", heightCheck)
                document.removeEventListener("mousemove",checkX)
                document.removeEventListener("mousemove",checkY)
            }
        

    },[])
    return (
        <div className="main-c">
            <div className="container">
                <h1>React self-learning</h1>
                <p>Hooks - useState a useEffect</p>
                <h2>Šířka okna je </h2>{windowWidth}
                <h2>Výška okna je </h2>{windowHeight}
                <h2>Souřadnice</h2>
                <p>X: {scrollX} Y: {scrollY}</p>
                </div>
        
        <ApiData />
        <ApiIss />
        </div>
    )
}

export default App