import React from "react"
import ItemCount from "../ItemCount"
import "../itemDetail/Detail.css"

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
        <button className="cont"><ItemCount stock={stock} initial={1}/></button>
        <button className="btnD">Añadir al carrito</button>
        </div>
        </div>
        </>
    )
}

export default ItemDetail