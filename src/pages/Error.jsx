import { Link } from "react-router-dom"
import error from "../assets/404.png"

function Error () {
    return (
    <div className="error">
        <img src={error} alt="404" />
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
)}

export default Error