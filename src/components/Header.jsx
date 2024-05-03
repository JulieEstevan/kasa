import { Link } from "react-router-dom"
import logo from "../assets/Logo.png"

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Kasa" className="logo"/>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/A-Propos">A Propos</Link>
            </nav>
        </header>
    )
}

export default Header