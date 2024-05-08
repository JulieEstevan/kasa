import { NavLink } from "react-router-dom"
import logo from "../assets/Logo.png"

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Kasa" className="logo"/>
            <nav>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/A-Propos">A Propos</NavLink>
            </nav>
        </header>
    )
}

export default Header