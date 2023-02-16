import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

function RoasterCard({ roaster }) {

    const [ rating, setRating ] = useState([])
    const { name, img_url, website_url, id } = roaster

    useEffect(() => {
        fetch(`/roaster_average/${id}`)
        .then(r => r.json())
        .then(r => setRating(r))
    })

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/roasterdetails/${id}`)
    }
    return (
        <div
            className="roaster_card"
            onClick={handleClick}
        >
            <img src={img_url} alt={name} className="card_image"/>
            <h1>{name}</h1>
            <h3>Average coffee rating: {rating}</h3>
            <a href={website_url}>{name}</a>
        </div>
    )
}

export default RoasterCard;