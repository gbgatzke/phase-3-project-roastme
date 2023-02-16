import { useNavigate } from 'react-router-dom'

function CoffeeCard({ coffee }) {

    const { blend_name, intensifier, origin, img_url, muffin_pairing, notes, id } = coffee

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/coffeedetails/${id}}`)
    }

    return(
        <div className="coffee_card" onClick={handleClick}>
            <img src={img_url} alt={blend_name} className="card_image"/>
            <h1>{blend_name}</h1>
            <h2>{notes}</h2>
            <p>{origin}</p>
            <p>Strength: {intensifier}</p>
            <p>Muffin pairing: {muffin_pairing}</p>
        </div>
    )
}

export default CoffeeCard