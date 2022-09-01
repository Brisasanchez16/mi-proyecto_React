import CartItem from "./CartItem"
import { useContext } from 'react'
import { cartContext } from '../Store/CartContext';
import { Link } from "react-router-dom"
import UserForm from "../UseForm/UseForm";
import './Cart.css'

function Cart(id) {
    const { cart, totalAmount, removeItem, removeAll, totalPrice} = useContext(cartContext);
    function removeItemCart(){
        removeItem(id)
    }
    if (cart.length === 0) {
        return (
            <div className="divcart">
                <h2 className="titulo">El Carrito esta Vacio</h2>
                <Link  className="linkCart" to={"/"}>Volver al Inicio</Link>
            </div>
        )

    }
    else {
    return (
        <main className="mainCart">
        <section className="sectionCartItem">
            {cart.map((item) => {
                return (
                    <CartItem
                    key={item.id + item.name }
                    img={item.img}
                    nombre={item.nombre}
                    precio={item.precio}
                    clicks={item.clicks}
                    removeItemCart= {removeItemCart}
                    />
                    )
                })}
                <button className="removeall" onClick={removeAll}> Vaciar Carrito </button>
            </section>
            <section className="cartResumen">      
                    <h1 className="resumen">Resumen del Pedido</h1>
                    <h3 className="resumencart">Cantidad de productos: {totalAmount()} </h3>
                    <h3 className="resumencart">Envío: Gratuito</h3>
                    <h2 className="totalresume">Total: $ {totalPrice()}</h2>
                    <div className="botonesresumen">
                    <UserForm cart={cart}/>
                    </div>
                    <img  className="metodos" src="https://res.cloudinary.com/dveku4pvl/image/upload/v1661110744/mercadopago_logos1_rld5ya.jpg" alt="Metodos de Pago"></img>

            </section>
        </main>
    )
}
}
export default Cart 