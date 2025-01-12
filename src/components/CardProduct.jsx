import { Link } from "react-router-dom";
import Button from "./Button";
import ItemCounter from "./ItemCounter";

function CardProduct({img, name, text, price, id}) {
    return (

        
        <div style={{position:"relative"}} className="card">
            <Link to={`/item/${id}`} style={{textDecoration:"none", color:"black"}}>
            <img  className="cardImage" src={img} alt="product image" />
            </Link>
            <div className="card-body">

                
            <Link to={`/item/${id}`} style={{textDecoration:"none", color:"black"}}>

                <h3 className="card-title">{name}</h3>
                <p className="card-text" style={ { fontSize: ".80rem" } }>
                    {text}
                </p>

                <div>
                    <p className="card-price">AR$ <span>{price}</span> Mill.</p>
                </div>
            </Link>
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>

            
                <ItemCounter/>

                <Button>
                    Agregar al carrito
                </Button>


                </div>

            </div>
        </div>
         
    );
}

export default CardProduct
//rfce