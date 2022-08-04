import ItemCount from "./ItemCount"

function ItemListContainer(props){
    return(
        <>
        <div>
            <h2 className="titulo">{props.greeting}Productos más vendidos en la semana </h2>
        </div>
        
        <ItemCount initial={1} stock={10}/>
        </>
    )
}

export default ItemListContainer 