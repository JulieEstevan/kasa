
function Banner({image, title}) {
    return (
        <div className="banner">
            <h1>{title}</h1>
            <img src={image} alt="banniere paysage" className="banner-img" />
        </div>
    )
}

export default Banner