import React, { useState } from 'react'
import "./bgchanger.css";

const BgChanger = () => {

    const [bgColor, setbgColor] = useState("aqua");

    const changeBg= ()=>{
        console.log('clicked')
        setbgColor('white')
        
    }
  return (
    <>
    <div className='bg-changer' style={{backgroundColor:bgColor}}> 
      <h1  >bgChanger</h1>
      
    </div>
    <button onClick={changeBg}>Click Me</button>
    
    </>
  )
}

export default BgChanger;
