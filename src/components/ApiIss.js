import "./ApiIss.css"
import { useState, useEffect } from "react"
import React from 'react'

export default function ApiIss() {

  const[getLatitude, setGetLatitude] = useState()
  const[getLongtitude, setGetLongtitude] =useState()
  const[urlMap, setUrlMap] = useState("")


  const url = "http://api.open-notify.org/iss-now.json"

  const getIssCoordinates = async()=>{
    const response = await fetch(url)
    const data = await response.json()
    
    setGetLatitude(data["iss_position"]["latitude"])
    setGetLongtitude(data["iss_position"]["longitude"])
    const iss_la = data["iss_position"]["latitude"]
    const iss_lo = data["iss_position"]["longitude"]  
    setUrlMap(`https://mapy.cz/zakladni?x=${iss_la}y=${iss_lo}&z=2`)
  }
  useEffect( () => {
    getIssCoordinates()
    }, []) 


 
return (
    <div className="container-iss">
      <h2>Sledování polohy ISS</h2>
      <hr></hr>
      <button className="btn-iss" onClick={getIssCoordinates} >Aktuální poloha ISS</button>
      <p>Zeměpisná šířka:<span> {getLatitude}</span> </p>      
      <p>Zeměpisná délka:<span> {getLongtitude}</span> </p>
      
      <a href={urlMap} target="_blank" rel="noopener noreferrer">Mapy.cz - pozice ISS</a>
    </div>
  )
}
