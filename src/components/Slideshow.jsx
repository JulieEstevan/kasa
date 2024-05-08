import { useState } from 'react'

function Slideshow({pictures}) {
    const [currentSlide, setCurrentSlide] = useState(0)
    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % pictures.pictures.length)
    }
    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? pictures.pictures.length - 1 : currentSlide - 1)
    }
    const paging = `${currentSlide +1}/${pictures.pictures.length}`
    return (
        <div className="slideshow-container">
            {pictures.pictures.length > 1 && (
                <div className="slideshow">
                    <button onClick={prevSlide} className="slideshow_arrow left">
                        <i className="fa-solid fa-chevron-left fa-5x"></i>
                    </button>
                    <img src={pictures.pictures[currentSlide]} alt="logement" className="slideshow_img"/>
                    <div className="slideshow_paging">{paging}</div>
                    <button onClick={nextSlide} className="slideshow_arrow rigth">
                        <i className="fa-solid fa-chevron-right fa-5x"></i>
                    </button>
                </div>
            )}
            
            {pictures.pictures.length === 1 &&
            <img src={pictures.pictures[0]} alt="logement" className="slideshow_img" />
            }
        </div>
    )
}

export default Slideshow