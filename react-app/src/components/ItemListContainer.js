import React, { useEffect, useState } from 'react'
import ItemCount from "./ItemCount"
import ItemList from "./itemlist/ItemList"
import data from "./data/data"

function getProducts(){
    return new Promise((resolve) => {
            setTimeout(() => resolve(data), 2000) 
        })
    
}

function ItemListContainer(){
    const [data, setData] = useState([]);

    useEffect(() => {
        getProducts().then((respuesta) => {
            setData(respuesta);
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