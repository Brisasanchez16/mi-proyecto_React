import CartWidget from "./CartWidget";

function NavBar(){
    return(
        <div className="container">
            <div className="navbar">
                <img className="logo" src="/images/logo.png" alt="logo" />
                <ul>
                    <li>Inicio </li>
                    <li>Productos</li>
                    <li>Sobre mi</li>
                    <li>Metodos de pago</li>
                    <li><CartWidget/></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;