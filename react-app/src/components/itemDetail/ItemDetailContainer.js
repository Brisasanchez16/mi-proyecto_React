import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import data from "../data/data";
import ItemCount from "../ItemCount";
import {useParams} from "react-router-dom"


const ItemDetailContainer = () => {
    const [data , setData] = useState({});
    const idUrl = useParams().id

    function getProductos() {
        return new Promise((resolve => {
            let findItem = data.find((element) => element.id == idUrl)
            setTimeout(() => {
                resolve(findItem)
            }, 2000);
        }));
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