import {v4 as uuid} from "uuid"
import ReviewCard from "./ReviewCard";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function CoffeeType () {
    const [coffeeType, setCoffeeType] = useState([])
    const [roaster, setRoaster] = useState([])
    const [reviews, setReviews] = useState([])
    const [hidden, setHidden] = useState(true)
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

    function onUpdateReview(updatedReview) {
        const updatedReviews = reviews.map((review) => {
            if (review.id === updatedReview.id) {
                return updatedReview }
            else {
                return review }
        })
        setReviews(updatedReviews)
    }
    function onDeleteReview(deletedReview) {
        const updatedReviews = reviews.filter((review) => review.id !== deletedReview.id)
        setReviews(updatedReviews)
      }

    function handleNewClick () {
        setHidden(false)
    }

    function handleCancelClick () {
        setHidden(true)
    }
      
    function handleSubmit(e) {
        e.preventDefault()
        const formElement = e.target
        const newReviewData = {
            reviewer_name: formElement["name"].value,
            review_body: formElement["review"].value,
            rating: formElement["rating"].value,
            coffee_type_id: id
        }
        fetch('/reviews_create', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newReviewData)
        })
        .then(r => r.json())
        .then(review => {
            reviews.push(review)
            setHidden(true)
        })
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
            <h2>Reviews:</h2>
            {hidden ? <button onClick={handleNewClick} className="review_button">Add New Review</button> : <button onClick={handleCancelClick} className="review_button">Cancel</button> }
            {hidden ? null : 
            <form onSubmit={handleSubmit}>
                <label>Reviewer Name: </label>
                <input type="text" id="reviewer-name" name="name" required /><br></br>
                <label required>Rating (1-5): </label>
                <input type="number" id="rating" name="rating" min="1" max="5" /><br></br>
                <label>Review: </label>
                <textarea type="text" id="review-body" name="review" rows="6" cols="50" required></textarea><br></br>
                <button type="submit" className="review_details_button">Add Review</button>
            </form> }
            <div>
                {reviews.map(review => {
                    return <ReviewCard key={review.id} review={review} onDeleteReview={onDeleteReview} onUpdateReview={onUpdateReview} />
                    })
                }
            </div>
        </div>
    )
}

export default CoffeeType
