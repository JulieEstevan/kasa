import { Link } from "react-router-dom"

function Card({logement}) {
   return (
    <Link to={`/logement/${logement.id}` } className="card">
            <img src={logement.cover} alt="logement"/>
            <h2>{logement.title}</h2>
    </Link>
   )
}

export default Card