import React from "react";
import "./Item.css"
import {Link} from "react-router-dom"



function Item({img, nombre, precio, stock, id}){
    return(
        <>
        <div className="cards">
        <img className='itemImg' src= {img} alt =''></img>
        <h2 className='itemNombre'>{nombre}</h2>
        <p className='itemPrecio'>${precio}</p>
        <Link className='itemLink' to={`/detail/${id}`}>Ver Detalle</Link>
        </div>
        </>
    )
}

export default Item