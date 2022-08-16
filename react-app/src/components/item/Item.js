import React from "react";
import ItemCount from "../ItemCount";
import "../item/Item.css"
import {Link} from "react-router-dom"



function Item({img, nombre, category, precio, stock, id}){
    return(
        <>
        <div className="cards">
        <img className='itemImg' src= {img} alt =''></img>
        <h2 className='itemNombre'>{nombre}</h2>
        <p className='itemCategory'>${category}</p>
        <p className='itemPrecio'>${precio}</p>
        <Link className='itemLink' to={`detail/${id}`}>Ver Detalle</Link>
        <div className="contador"><ItemCount stock={stock} initial={1} /></div>
        </div>
        </>
    )
}

export default Item