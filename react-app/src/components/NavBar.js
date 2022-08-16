import CartWidget from "./CartWidget";
import {NavLink} from "react-router-dom"

function NavBar(idCategory){
    return(
        <div className="container">
            <div className="navbar">
                <img className="logo" src="/images/logo.png" alt="logo" />
                <ul>
                    <NavLink to={"/"}><li>Inicio</li></NavLink>
                    <NavLink to={`category/${idCategory}`}><li>Cristales</li></NavLink>
                    <NavLink to={`category/${idCategory}`}><li>Incienso</li></NavLink>
                    <NavLink to={`category/${idCategory}`}><li>Hierbas</li></NavLink>
                    <li><CartWidget/></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;