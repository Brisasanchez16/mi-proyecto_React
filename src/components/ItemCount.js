import React from "react";


function ItemCount ({stock, onAdd, initial}){
    const[clicks, setClicks] = React.useState(1)

    const handleIncrement =() =>{
        clicks <= stock ? setClicks(clicks + 1) :  setClicks(clicks - 0)
    }
    const handleDecrement =() =>{

        clicks > initial ? setClicks(clicks - 1) :  setClicks(clicks - 0)
    }

    return(
        <>
        <div className="contador">
            <button onClick={handleDecrement} >-</button>
            <h3 className="click">{clicks}</h3>
            <button onClick={handleIncrement}>+</button>
            <button onClick={() => onAdd(clicks)} className='product-addCart'>Agregar al Carrito</button>
        </div>

        </>
    )
}



export default ItemCount