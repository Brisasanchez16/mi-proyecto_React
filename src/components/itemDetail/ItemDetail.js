import React from "react"
import ItemCount from "../ItemCount"
import "./Detail.css"
import {useState} from 'react'
import Swal from "sweetalert2"
import {Link} from "react-router-dom"

function ItemDetail({img, nombre, desc, precio, stock}){
    const [countCart,SetCount] = useState (0);

    function addToCart(clicks) {
        SetCount(clicks)
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `Has agregado ${clicks}, de ${nombre} al carrito`,
            showConfirmButton: false,
            timer: 1500
        })
    }
    return(
        <>
        <div className="cardsdet">
        <h2 className="tituloD">Detalle del producto</h2>
        <div className="divD">
        <img className='itemDImg' src= {img} alt =''></img>
        <h2 className='itemDNombre'>{nombre}</h2>
        <p className='itemDDesc'>{desc}</p>
        <p className='itemDPrecio'>Precio: ${precio}</p>
        <div className="contadorD">
        {countCart === 0 ? 
                    <ItemCount stock={stock} initial={1} addToCart={addToCart} /> :
                    <Link className='showCart' to={"/CartWidget"}>Ver Carrito</Link>}
        </div>
                    
        </div>
        </div>
        </>
    )
                }

export default ItemDetail