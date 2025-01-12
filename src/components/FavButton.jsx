import React, { useState } from 'react'

function FavButton() {

    const [isFav, setIsFav] = useState(false);

    let fav = false;

    if (isFav) {
        fav = "favBtn" 
    }else{
        fav = "notFavBtn"
    }


  return (
    <div style={{ position:"absolute", right:"10px", top:"10px", margin:"0"}}>
        <button
        
        style={{ 
            width:"30px", 
            height:"30px", 
            justifySelf:"end", 
            border:"0", 
            borderRadius:"20px", 
            background:"none"
            }}
        
        onClick={ () => {setIsFav(!isFav)}}
        ><img src="/images/svg/like.svg" alt="likeIcon" className={fav}/></button>
    </div>
  )
}

export default FavButton