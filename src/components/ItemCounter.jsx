import React, { useState } from 'react'

function ItemCounter() {

    let [counter, setCounter] = useState(1);

    const handleAdd = () => {

        setCounter(counter + 1);
        console.log("suma")

    }
    const handleSubstract = () => {

        counter > 1 && setCounter(counter - 1);
        console.log("resta")

    }

    console.log(counter)

  return (
    <div style={{display:"flex", margin:"0", alignItems:"center", height:"1.5rem", border:"solid 1px gray"}}>

        <button className="counterButton cursor-pointer" onClick={handleSubstract}>-</button>

        <p className="counter" style={{color:"white"}}>{counter}</p>

        <button className="counterButton cursor-pointer" onClick={handleAdd}>+</button>
        
    </div>
  )
}


export default ItemCounter