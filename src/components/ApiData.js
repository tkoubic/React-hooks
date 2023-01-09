import React from 'react'
import { useState, useEffect } from 'react'
import "./ApiData.css"

export default function ApiData() {
    const[getQ, setGetQ] = useState("Zde se zobrazí hláška získaná z API") 

    const url = "https://api.kanye.rest/"

    useEffect( () =>{
      
    },[])
    
    const getApiData = async () =>{
        const response = await fetch (url)
        const data = await response.json()
        const writeQ = data["quote"]
        setGetQ(writeQ)
    }
    

  return (
    <div className='api-container'>
        <div>API DATA</div>
        <hr></hr>
        <h2>Hlášky</h2>
        <p className='cursive'>"{getQ}"</p>
        <button className='btn-hlasky' type='button' onClick={getApiData}>Načti hlášku</button>

    </div>
    
  )
}
