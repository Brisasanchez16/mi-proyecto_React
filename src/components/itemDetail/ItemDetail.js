import React from "react"
import ItemCount from "../ItemCount"
import "./Detail.css"
import {useState} from 'react'
import Swal from "sweetalert2"
import {Link} from "react-router-dom"
import { useContext } from "react";
import { cartContext } from "../Store/CartContext";

function ItemDetail({data}){
    const { addToCart} = useContext(cartContext);
    const [countCart,SetCount] = useState (0);

    function onAdd(clicks) {   
        addToCart( data , clicks);
        SetCount(clicks)
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `Has agregado ${clicks}, de ${data.nombre} al carrito`,
            showConfirmButton: false,
            timer: 1500
        })
    }
    return(
        <>
        <div className="cardsdet">
        <h2 className="tituloD">Detalle del producto</h2>
        <div className="divD">
        <img className='itemDImg' src= {data.img} alt =''></img>
        <h2 className='itemDNombre'>{data.nombre}</h2>
        <p className='itemDDesc'>{data.desc}</p>
        <p className='itemDPrecio'>Precio: ${data.precio}</p>
        <div className="contadorD">
        {countCart === 0 ? 
                    <ItemCount stock={data.stock} initial={1} onAdd={onAdd} /> :
                    <Link className='mostrarCarrito' to={"/cart"}>Ver Carrito</Link>}
        </div>

        </div>
        </div>
        </>
    )
                }

export default ItemDetail