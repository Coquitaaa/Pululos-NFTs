import CardProduct from "./CardProduct"
import getAsyncData, { getAsyncItemByCategory } from "../data/getAsyncData"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

function ItemListContainer() {

  const [pululos, setPululos] = useState([]);
  const { catid } = useParams();

  useEffect( () => {

    if(catid === undefined){

    const respuestaPromise = getAsyncData();
    console.log(respuestaPromise);
    respuestaPromise.then( respuesta => setPululos(respuesta));
    } else {
      const respuestaPromise = getAsyncItemByCategory(catid);
      console.log(respuestaPromise);
      respuestaPromise.then( respuesta => setPululos(respuesta))
      .catch( error => console.log(error));
    }
  }, [])

  const list = pululos.map((pululos) => 
    <CardProduct 
    img={pululos.img}
    key={pululos.id} 
    id={pululos.id}
    name={pululos.title} 
    price={pululos.price} 
    text={pululos.description} 
    />)

  return ( 
    <article style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", width:"100%", height:"100%"}}>
      <h2 style={{ display:"flex",
                  justifyContent:"center",
                  padding:"5rem", 
                  fontSize:"3rem", 
                  color:"white"
                  }}>Pululos</h2>
      <div
        className="card-products" 
        style={{ display:"flex",gap:"40px", width:"80%" ,justifyContent:"center", flexWrap:"wrap", padding:"5rem", borderTop:"#0965bb 1px solid" }}
      >
        {list}
      </div>
    </article>
  )
}

export default ItemListContainer