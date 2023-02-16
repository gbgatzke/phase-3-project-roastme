import { useState } from "react"

function ReviewCard({ review, onDeleteReview, onUpdateReview }) {
    const [editOpen, setEditOpen] = useState(false)

    const [formData, setFormData] = useState({
        reviewer_name: "",
        review_body: "",
        rating: "",
    })

    function handleEditClick(e) {
        setEditOpen(true)
        fetch(`/reviews/${e.target.value}`)
        .then((r) => r.json())
        .then((review) => {
            setFormData(review)
        })
    }

    const {reviewer_name, review_body, rating} = formData

    function handleChange(e) {
        e.preventDefault()
        const { name, value } = e.target
        setFormData({...formData, [name]: value})
    }
    function handleCancelClick() {
        setEditOpen(false)
    }


    function handleSubmit(e) {
        e.preventDefault()
        fetch(`/reviews_update/${review.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            body: JSON.stringify({...formData})
        })
        .then((r) => r.json())
        .then((review) => {
            onUpdateReview(review)
            setEditOpen(false)
        })
    }

    function handleDelete() {
        if (window.confirm("Are you sure you want to delete this review?") == true) {
            fetch(`/reviews_delete/${review.id}`, {
                method: "DELETE",
            })
            .then(onDeleteReview(review))
        }
    }

    return (
        <>
        { editOpen ?
            <form className="coffee_preview" onSubmit={handleSubmit}>
                <div className="form_input">
                <textarea 
                    className="textarea"
                    type="text" 
                    id="review_body" 
                    name="review_body" 
                    rows="5" 
                    cols="50"
                    placeholder="Write Review Here" 
                    value={review_body} 
                    onChange={handleChange} 
                    required>
                </textarea><br></br>
                </div>
                    <div className="form_input">
                    <label required>Rating (1-5): </label>
                    <input 
                        type="number" 
                        id="rating" 
                        name="rating" 
                        min="1" 
                        max="5" 
                        value={rating} 
                        onChange={handleChange} required /><br></br>
                    </div>
                    <div className="form_input">
                    <label>Reviewer Name: </label>
                    <input 
                        type="text" 
                        id="reviewer_name" 
                        name="reviewer_name" 
                        value={reviewer_name} 
                        onChange={handleChange} 
                        required /><br></br>
                </div>
                <button type="submit" className="review_details_button">Submit Edit</button>
                <button type="button" className="review_details_button" title={"Cancel"} onClick={handleCancelClick}>Cancel</button>
            </form>
            :
            <div className="coffee_preview">
                <h4>{review.review_body}</h4>
                <h4>Rating: {review.rating}</h4>
                <p>{review.reviewer_name}</p>
                <button className="review_details_button" title={"Edit Review"} onClick={handleEditClick} value={review.id}>Edit Review</button>
                <button className="review_details_button" title={"Delete Review"} onClick={handleDelete}>Delete Review</button>
            </div>
        }</>
    )
}

export default ReviewCard