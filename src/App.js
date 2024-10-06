import React, { useState } from 'react'
import "./App.css"
import db from './db'

function App() {
  const[data,setData] = useState(db);
  return (
    <>
      <h2>{data.length} Birthdays Today</h2>
    <div className='container' >
      {data.map((x,i)=>{
        return(
          <div key={i}>
          <div className='card'>
            <img id='img' src={x.image} alt="images"  />
            <h3>Name : {x.name}</h3>
            <p>D.O.B : {x.date}</p>
          </div>
          </div>
        )
      })}
      <button onClick={()=>setData([])}>ClearAll</button>
    </div>
    </>
  )
}

export default App