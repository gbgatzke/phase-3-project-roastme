import ReviewCard from "./ReviewCard";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function CoffeeType () {
    const [coffeeType, setCoffeeType] = useState([])
    const [roaster, setRoaster] = useState([])
    const [reviews, setReviews] = useState([])
    const { id } = useParams()


    useEffect(() => {
        fetch(`/coffee_types/${id}`)
        .then((r) => r.json())
        .then(type => setCoffeeType(type))

        fetch(`/coffee_types_roaster/${id}`)
        .then(r => r.json())
        .then(r => setRoaster(r))

        fetch(`/reviews`)
        .then(res => res.json())
        .then(data => {
            setReviews(data.filter((review) => review.coffee_type_id === parseInt(id)))
        })
    },[id])

    function onDeleteReview(deletedReview) {
        const updatedReviews = reviews.filter((review) =>
        review.id !== deletedReview.id)
        setReviews(updatedReviews)
      }

    return (
        <div className="coffee_details">
            <img
                src={coffeeType.img_url}
                alt={coffeeType.blend_name}
                className="details_image"
            />
            <h1>{coffeeType.blend_name}</h1>
            <p>Strength: {coffeeType.intensifier}</p>
            <p>Origin: {coffeeType.origin}</p>
            <p>Notes: {coffeeType.notes}</p>
            <p>Suggested Muffin Pairing: {coffeeType.muffin_pairing}</p>
            <p>Available at {roaster.name}</p>
            <h2>Reviews:</h2><button className="review_button">Add New Review</button>

            <ul>
                {reviews.map(review => {
                    return <ReviewCard key={review.id} review={review} onDeleteReview={onDeleteReview}/>
                    })
                }
            </ul>
        </div>
    )
}

export default CoffeeType
