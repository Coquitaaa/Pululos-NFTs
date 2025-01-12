// COMPONENTES DE FUNCION
//COMPONENTES DE CLASE
import { useState } from "react";
// * PROPS

function Button( { text, color, disabled, children} ) {

const [ displayColor, setColor ] = useState (color || "defaultColor");

const [ displayText, setText ] = useState(children || text);

function handleClick(){

    if (displayColor === "defaultColor") {

        console.log("Se agrego al carrito!");
        setText("En carrito");
        setColor("green");   
    }else{
        console.log("Se elimino del carrito!");
        setText("Agregar al carrito");
        setColor("defaultColor");
    }
    
}

function handleMouseOut() {
    if (displayColor === "red") {
        setColor("green");
        setText("En carrito");
    }
}

function handleMouseOver(){
    if (displayColor === "green") {
    setColor("red");
    setText("Eliminar del carrito"); 
    }
}

    return(
        <button 
        
        disabled={disabled} 
        className={`btn-${displayColor} cursor-pointer`}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        
        
        > {displayText} </button>
    );
}

export default Button;