import { useParams } from "react-router-dom"
import logements from "../logements.json"
import Error from "./Error"
import Gallery from "../components/Gallery"
import Host from "../components/Host"
import Collapse from "../components/Collapse"
import Rating from "../components/Rating"

function Housing () {
    const { housingId } = useParams()
    const currentHousing = logements.filter(logement => logement.id === housingId)
    if (currentHousing.length === 0) {return <Error />}
    
    return (
        currentHousing.map((logement) => (
            
            <div key={logement.id} className="housing-container">
                <Gallery pictures={logement}/>
                <div className="housing">
                    <div  className="housing_info">
                        <h1>{logement.title}</h1>
                        <h3>{logement.location}</h3>
                        <div className="housing_info-tag">
                            {logement.tags.map((tag, i) => (
                            <p key={i}>{tag}</p> 
                            ))}
                        </div>
                    </div>
                    <div className="housing_host">
                            <Host user={logement}/>
                            <Rating key={logement.rating} rate={logement.rating} />
                    </div>
                </div>
                <div className="housing-description">
                    <Collapse title="Description" description={logement.description} />
                    <Collapse title="Équipements" description={logement.equipments.map((i) => (
                        <li key={i}>{i}</li>
                    ))} />
                </div>
            </div>
        ))
        
    )
}

export default Housing