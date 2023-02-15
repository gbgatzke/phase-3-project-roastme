import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import RoasterCoffeePreview from './RoasterCoffeePreview'

function RoasterDetails() {

    const [ roaster, setRoaster ] = useState([])
    const [ coffees, setCoffees ] = useState([])
    const [ rating, setRating ] = useState([])

    const { id } = useParams()

    useEffect(() => {
        fetch(`/roasters/${id}`)
        .then(r => r.json())
        .then(item => setRoaster(item))

        fetch(`/roaster_coffees/${id}`)
        .then(r => r.json())
        .then(cofs => setCoffees(cofs))

        fetch(`/roaster_average/${id}`)
        .then(r => r.json())
        .then(r => setRating(r))
    },[id])

    const roasterCoffees = coffees.map(c =>
        <RoasterCoffeePreview key={c.id} coffee={c}/>
        )

    return(
        <div className="roaster_details">
            <img
                src={roaster.img_url}
                alt={roaster.name}
                className="details_image"
            />
            <h1>{roaster.name}</h1>
            <h2>Average coffee rating: {rating}</h2>
            <a href={roaster.website_url}>{roaster.name}</a>
            <h2>Varieties:</h2>
            {roasterCoffees}
        </div>
    )
}

export default RoasterDetails
