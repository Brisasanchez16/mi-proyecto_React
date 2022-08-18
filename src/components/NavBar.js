import CartWidget from "./CartWidget";
import {NavLink} from "react-router-dom"

function NavBar(){
    return(
        <div className="container">
            <div className="navbar">
                <img className="logo" src="/images/logo.png" alt="logo" />
                <ul>
                    <NavLink to={"/"}><li>Inicio</li></NavLink>
                    <NavLink to={`category/cristales`}><li>Cristales</li></NavLink>
                    <NavLink to={`category/incienso`}><li>Incienso</li></NavLink>
                    <NavLink to={`category/hierbas`}><li>Hierbas</li></NavLink>
                    <NavLink to={`/CartWidget`}><li><CartWidget/></li></NavLink>
                    
                </ul>
            </div>
        </div>
    )
}

export default NavBar;