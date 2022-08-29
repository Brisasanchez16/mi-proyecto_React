import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom"
import dataProducts from "../Data/Data";
import firestoreDB from '../../Services/Firestore'
import { getDoc, collection, doc} from 'firebase/firestore'



function ItemDetailContainer (){
    const [data , setData] = useState({});
    const idUrl = useParams().id
    
useEffect(() => {
    function getProducto(id) {
        return new Promise((resolve) => {
            const productosCollection = collection(firestoreDB, "productos");
            const docDataDet = doc(productosCollection, id);
            getDoc(docDataDet).then(snapshot => {
                resolve(
                    { ...snapshot.data(), id: snapshot.id }
                )
            });
    })
}
        getProducto(idUrl).then(product=>{
            setData(product)
        })},[idUrl])

    

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