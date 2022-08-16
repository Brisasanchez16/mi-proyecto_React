import React from "react"
import ItemCount from "../ItemCount"
import "./Detail.css"

function ItemDetail({img, nombre, desc, precio, stock}){
    return(
        <>
        <div className="cardsdet">
        <h2 className="tituloD">Detalle del producto</h2>
        <div className="divD">
        <img className='itemDImg' src= {img} alt =''></img>
        <h2 className='itemDNombre'>{nombre}</h2>
        <p className='itemDDesc'>{desc}</p>
        <p className='itemDPrecio'>Precio: ${precio}</p>
        <div className="contadorD"><ItemCount stock={stock} initial={1} /></div>
        <button className="btnD">Añadir al carrito</button>
        </div>
        </div>
        </>
    )
}

export default ItemDetail