import React, { useEffect, useState } from 'react'

const Github = () => {


    const [data, setData]= useState([])

    useEffect(()=>{
        fetch(`https://api.github.com/users/ShivaMisraa`)
        .then(response=> response.json())
        .then(data=>{
            console.log(data)
            setData(data)
        })
    },[])

  return (
    <div>
      <h1>Github Followers {data.repositories}</h1>
      <img src={data.avatar_url} alt='Github Profile'/>
    </div>
  )
}

export default Github;


 

