import React from 'react'

function CartWidget({children}) {
  return (
    <div style={ { height:"2rem", margin:"0", alignSelf:"center", alignContent:"center", display:"inline-flex", paddingRight:"1rem"} }>
        <a style={{height:"1rem"}} href="#"><img className="cartIcon" src="/images/svg/cartIcon.svg" alt="cartIcon" style={{width:"2rem"}}/></a>
        <h3 style={{
          height:"1rem",
          width:"1rem", 
          fontSize:"14px",
          borderRadius:"200px", 
          backgroundColor:"white", 
          color:"rgb(0, 11, 31)",
          textAlign:"center",
          alignItems:"center"
          }}>{children}</h3>
    </div>
  )
}

export default CartWidget