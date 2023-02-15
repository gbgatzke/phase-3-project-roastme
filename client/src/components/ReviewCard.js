import { useState } from "react"

const initialState = {
    reviewerName: "",
    reviewBody: ""
}

function ReviewCard({ review, onDeleteReview, onUpdateReview }) {
    const [editOpen, setEditOpen] = useState(false)
    const [formData, setFormData] = useState(initialState)
    // const { reviewerName, reviewBody } = formData
    const [showReview, setShowReview] = useState(
        <>
            {/* <h3>{review.reviewer_name}</h3><br></br>
            <h3>{review.review_body}</h3><br></br> */}
            <button title={"Edit Review"} onClick={handleEditClick}>Edit Review</button>
            <button title={"Delete Review"} onClick={handleDelete}>Delete Review</button>
        </>)


    function handleEditClick() {
        setShowReview(
            <form onSubmit={handleSubmit}>
                <label>Reviewer Name: </label>
                <input type="text" id="reviewer-name" name="name" value="reviewerName" onChange={handleChange} required /><br></br>
                <label>Review: </label>
                <textarea type="text" id="review-body" name="review" rows="6" cols="50" value="reviewBody" onChange={handleChange} required></textarea><br></br>
                <button onClick={setEditOpen(false)}>Cancel</button>
                <button type="submit">Update Review</button>
            </form>
        )
    }

    function handleChange(e) {
        e.preventDefault()

    }

    function handleSubmit() {


        setShowReview(
            <>
                <h3>{review.reviewer_name}</h3><br></br>
                <h3>{review.review_body}</h3><br></br>
                <h3>Rating: {review.rating}</h3>
                <button title={"Edit Review"} onClick={handleEditClick}>Edit Review</button>
                <button title={"Delete Review"} onClick={handleDelete}>Delete Review</button>
            </>
        )
    }


    function handleDelete() {
        // if (confirm("Are you sure you want to delete this review?") == true) {
        fetch(`/reviews/${review.id}`, {
            method: "DELETE",
        })
        .then(() => {
            onDeleteReview(review)
        })
        // }
    }

    return (
        <div>
            <>
                <h3>{review.reviewer_name}</h3>
                <h3>{review.review_body}</h3>
                <h3>Rating: {review.rating}</h3>
                <button title={"Edit Review"} onClick={handleEditClick}>Edit Review</button>
                <button title={"Delete Review"} onClick={handleDelete}>Delete Review</button>
            </>
        </div>
    )
}

export default ReviewCard