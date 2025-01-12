import React from 'react'
import CartWidget from './CartWidget'
import { Link, NavLink } from 'react-router-dom'

function NavBar() {
    return (

        <div className="navBarContainer">
        
        <div style={ { display:"flex", 
        justifyContent:"space-between", maxWidth:"1280px", padding:"0"} }>

        <Link to="/">
            <h1 style={ { paddingLeft:"1rem", height:"48px"} }>
                <img src="/images/logo/pululosHomeLogo.png" alt="pululos logo" style={ { height:"3rem"} }/>
            </h1>
        </Link>

        <nav style={ { display:"flex", justifyContent:"center" } }>

            <ul style={ { padding:"0", display:"flex", flexDirection:"row", gap:"2.5rem", listStyle:"none" } }>
                <li style={{ alignSelf:"center" }}>

                    <NavLink to="/" 
                        style={ {textDecoration:"none" } }
                        >Inicio
                    </NavLink>

                </li>

                <li style={{ display:"flex", alignSelf:"center", alignItems:"center", paddingLeft:"1rem" }}>

                    <NavLink to="/pululos" 
                        style={ {textDecoration:"none", height:"fitContent" } }
                        >Pululos
                    </NavLink>

                    <button className="cursor-pointer" style={{background:"none", border:"0", height:"20px"}}>
                        <img src="/images/svg/arrowIcon.svg" alt="arrow icon" className="hover-light"/>
                    </button>

                </li>

                <li style={{ alignSelf:"center" }}>

                    <NavLink to="/about" 
                        style={ {textDecoration:"none" } }
                        >Sobre Pululos
                    </NavLink>

                </li>

            </ul>

        </nav>

        
        <CartWidget>3</CartWidget>
        

        </div>

        </div>
    )
}

export default NavBar