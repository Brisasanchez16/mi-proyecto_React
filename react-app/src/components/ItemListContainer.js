import React, { useEffect, useState } from 'react'
import ItemCount from "./ItemCount"
import ItemList from "./itemlist/ItemList"
import data from "./data/data"
import {useParams} from "react-router-dom"


function ItemListContainer(){
    const [data, setData] = useState([]);
    const idCategory = useParams().idCategory

    function getProducts() {
        return new Promise((resolve) => {
            setTimeout(() => resolve(data), 2000) 
        })
        };
        
    useEffect(() => {
        getProducts().then((respuesta) => {
            let itemsFilter = data.filter(element => element.category == idCategory)
            console.log(data)
            if(idCategory === undefined){
                setData(respuesta)
            }
            else{
                setData(itemsFilter)
            }
        })

    
}, [])

    return(
        <main>
            <>
            <div className='cards'>
                <ItemList data={data}/>
            </div>
            </>
        </main>
    )
}


export default ItemListContainer 