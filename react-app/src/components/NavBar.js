import{FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import{faCartPlus} from "@fortawesome/free-solid-svg-icons"

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
                    <li><FontAwesomeIcon icon={faCartPlus}/></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;