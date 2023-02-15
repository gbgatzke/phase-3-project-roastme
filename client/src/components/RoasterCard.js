import { useNavigate } from 'react-router-dom'

function RoasterCard({ roaster }) {

    const { name, img_url, website_url } = roaster
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/roasterdetails')
    }

    console.log(roaster)
    return (
        <div
            className="roaster_card"
            onClick={handleClick}
        >
            <img src={img_url} alt={name} className="card_image"/>
            <h1>{name}</h1>
            <a href={website_url}>{name}</a>
        </div>
    )
}

export default RoasterCard;