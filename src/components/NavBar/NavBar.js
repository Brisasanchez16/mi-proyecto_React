import CartWidget from "../CartWidget";
import {NavLink} from "react-router-dom"

function NavBar(){
    return(
        <div className="container">
            <div className="navbar">
                <img className="logo" src="/images/logo.png" alt="logo" />
                <ul>
                    <li><NavLink className="liN" to={"/"}>Inicio</NavLink></li>
                    <li><NavLink className="liN" to={`category/cristales`}>Cristales</NavLink></li>
                    <li><NavLink className="liN" to={`category/incienso`}>Incienso</NavLink></li>
                    <li><NavLink className="liN" to={`category/hierbas`}>Hierbas</NavLink></li>
                    <li><NavLink className="liN" to={`/CartWidget`}><CartWidget/></NavLink></li>
                    
                </ul>
            </div>
        </div>
    )
}

export default NavBar;