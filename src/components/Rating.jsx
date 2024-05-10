function Rating ({rate}) {
    const maxStars = 5
    const filledStars = parseInt(rate)
    const emptyStars = maxStars - filledStars

    const ratingStars = () => {
        let stars = Array(filledStars).fill().map((_, i) => (
            <i className="fa-solid fa-star fa-lg stars_filled" key={i}></i>
        ))
        stars = stars.concat(Array(emptyStars).fill().map((_,i) => (
            <i className="fa-solid fa-star fa-lg stars_empty" key={i + rate}></i>
        )))
        return stars
    }
    return (
        <div className="stars">
            {ratingStars()}
        </div>
        
    )
}

export default Rating