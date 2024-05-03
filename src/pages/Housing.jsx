import { useParams } from "react-router-dom"
import logements from "../logements.json"
import Error from "./Error"

function Housing () {
    const { housingId } = useParams()
    const currentHousing = logements.filter(logement => logement.id === housingId)
    if (currentHousing.length === 0) {return <Error />}
    return
}

export default Housing