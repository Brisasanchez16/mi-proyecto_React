import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import data from "../data/data";
import ItemCount from "../ItemCount";


function getProductos() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(data[0]), 2000);
    });
    }



const ItemDetailContainer = () => {
    const [data , setData] = useState([]);

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
            precio={data.precio} />
        </>
        
    )
}
export default ItemDetailContainer