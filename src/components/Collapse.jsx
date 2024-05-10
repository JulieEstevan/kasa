import { useState } from 'react'

function Collapse({title, description}) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="collapse-container">
            <div className="collapse">
                <h2>{title}</h2>
                <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <i className="fa-solid fa-chevron-down fa-xl up"></i> : <i className="fa-solid fa-chevron-down fa-xl down"></i> }    
                </button>
            </div>
            {isOpen ? <p className="collapse-description collapse-description_down">
                {description}
            </p> : <p className="collapse-description collapse-description_up">
            {description}
            </p>
            }
        </div>
    )
}

export default Collapse