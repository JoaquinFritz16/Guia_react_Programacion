import { useState } from "react";
import React from "react";
function FavouriteProd({favourites}){
    const [selectedFavourite, SetSelectedFavourite] = useState("");
    return(
        <>
        <select value={selectedFavourite} onChange={(e)=> SetSelectedFavourite(e.target.value)}>
            <option value="">Productos Favoritos</option>
            {favourites.map((fav, index)=>(
                <option key={index} value={fav.id}>
                    {fav.title}
                </option>
            ))}
        </select>
        </>
    )
}
export default FavouriteProd;