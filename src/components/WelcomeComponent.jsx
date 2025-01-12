import React from 'react'
import { Link } from 'react-router-dom'

function WelcomeComponent() {
  return (
    
    <section style={{padding:"0", height:"100%", width:"100%"}}>

        <div style={{display:"flex", flexDirection:"column", gap:"20px", justifyContent:"center", alignItems:"center", margin: 'auto', padding: '50px', width: '100%', height: '50vh'}}>
            <img src="/images/logo/pululosHomeLogo.png" alt="Pululos Home Logo" style={{height:"15rem"}} />
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <h2 style={{color:"white"}}>Bienvenido a la casa de los pululos</h2>
                

                <div style={{display:"flex", gap:"20px", padding:"20px"}}>
                <Link To="/category/pengus" className="btn-transparent-blue" to="/pululos" 
                style={{textDecoration:"none", padding:"10px", borderRadius:"5px"}}
                >Pengus</Link>
                <Link To="/category/moquitos" className="btn-transparent-blue" to="/pululos" 
                style={{textDecoration:"none", padding:"10px", borderRadius:"5px"}}
                >Moquitos</Link>
                <Link To="category/titanes" className="btn-transparent-blue" to="/pululos" 
                style={{textDecoration:"none", padding:"10px", borderRadius:"5px"}}
                >Titanes</Link>
                </div>
            </div>
        </div>


        <div className="titanMain" style={{position:"absolute", bottom:"0", left:"0", zIndex:"-1", width:"900px", height:"900px", padding:"0", margin:"0", margin:"0"}}> 
            <img src="/images/pululos/titanMain.png" alt="Image de titan"
            style={{alignSelf:"end", height:"900px", margin:"0", padding:"0"}}/>
        </div>
        <div className="discardMedium" style={{position:"absolute", bottom:"0", right:"0", zIndex:"-1", width:"870px", height:"870px", padding:"0", margin:"0", margin:"0"}}> 
            <img src="/images/pululos/titanMain2.png" alt="Image de titan"
            style={{position:"0", height:"870px", margin:"0", padding:"0"}}/>
        </div>

    </section>

  )
}

export default WelcomeComponent