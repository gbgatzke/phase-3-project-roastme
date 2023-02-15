import ReviewCard from "./ReviewCard";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Header from "./Header";

function CoffeeType () {
    const [coffeeType, setCoffeeType] = useState([])
    const [reviews, setReviews] = useState([])
    const { id } = useParams()


    useEffect(() => {
        fetch(`/coffee_types/${id}`)
        .then((r) => r.json())
        .then(type => setCoffeeType(type))
    },[id])

    useEffect(() => {
        fetch(`/reviews`)
        .then(res => res.json())
        .then(data => {
            setReviews(data.filter((review) => review.coffee_type_id === parseInt(id)))
        })
    }, [id])

    function onDeleteReview(deletedReview) {
        const updatedReviews = reviews.filter((review) =>
        review.id !== deletedReview.id)
        setReviews(updatedReviews)
      }

    return (
        <>
            <Header></Header>
            <img src={coffeeType.img_url} alt={coffeeType.blend_name} width={"400"}></img>
            <h1>{coffeeType.blend_name}</h1><br></br>
            {/* <h2>{coffeeType.Roaster.name}</h2><br></br> */}
            <h3>Strength: {coffeeType.intensifier}</h3><br></br>
            <h3>Origin: {coffeeType.origin}</h3><br></br>
            <h3>Notes: </h3><h3>{coffeeType.notes}</h3><br></br>
            <h3>Suggested Muffin Pairing: {coffeeType.muffin_pairing}</h3><br></br>
            <h2>Reviews:</h2><button>Add New Review</button><br></br>
            <ul>
                {reviews.map(review => {
                    return <ReviewCard key={review.id} review={review} onDeleteReview={onDeleteReview}/>
                    })
                }   
            </ul>
        </>
    )
}

export default CoffeeType
