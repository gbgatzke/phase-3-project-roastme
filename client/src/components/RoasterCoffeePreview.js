import { useNavigate } from 'react-router-dom'

function RoasterCoffeePreview({ coffee }) {

    const { blend_name, origin, id } = coffee;

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/coffeedetails/${id}`)
    }

    return(
        <div className="coffee_preview" onClick={handleClick}>
            <h3>{blend_name}</h3>
            <p>{origin}</p>
        </div>
    )
}

export default RoasterCoffeePreview