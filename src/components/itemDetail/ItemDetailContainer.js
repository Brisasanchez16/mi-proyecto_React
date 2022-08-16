import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom"
import dataProducts from "../Data/Data";


const ItemDetailContainer = () => {
    const [data , setData] = useState({});
    const idUrl = useParams().id

    function getProductos() {
        return new Promise((resolve => {
            let findItem = dataProducts.find((element) => element.id == idUrl)
            setTimeout(() => {
                resolve(findItem)
            }, 1500);
        }))
        }

    useEffect(() => {
        getProductos()
        .then((respuesta) => { setData(respuesta);
        })
    }, []);
    

    return (
        <>
        
        <ItemDetail data ={data}
            key={data.nombre}
            img={data.img}
            nombre={data.nombre}
            desc={data.desc}
            stock ={data.stock}
            precio={data.precio} />
        </>
        
    )
}
export default ItemDetailContainer