import { useState } from 'react'

function Collapse({title, description}) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="collapse-container">
            <div className="collapse">
                <h2>{title}</h2>
                <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <i className="fa-solid fa-chevron-down fa-xl"></i> : <i className="fa-solid fa-chevron-up fa-xl"></i> }    
                </button>
            </div>
            {isOpen && <p className="collapse-description">
                {description}
            </p>
            }
        </div>
    )
}

export default Collapse