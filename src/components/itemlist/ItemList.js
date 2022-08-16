import React from "react";
import Item from "../item/Item";

function ItemList({ data }) {
    return (

        data.map((producto) => {
            return (
                
                <Item 
                    key={producto.nombre}
                    id={producto.id}
                    img={producto.img}
                    nombre={producto.nombre}
                    category={producto.category}
                    precio={producto.precio}
                    stock ={producto.stock}
                />
                
            )
        })

    )
}

export default ItemList