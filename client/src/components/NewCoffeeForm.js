import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function NewCoffeeForm({ onAddCoffee, id }) {

    const navigate = useNavigate()

    const roasterId = parseInt(id)

    const [formData, setFormData] = useState({
        blend_name: "",
        intensifier: "",
        origin: "",
        notes:"",
        muffin_pairing: "",
        img_url: "",
        roaster_id: roasterId,
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({...formData, [name]: value})
      }
    const handleRoasterIdChange = (e) => {

    }


    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/coffee_type_create', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then(newCoff => {
            console.log(newCoff)
            onAddCoffee(newCoff)
            navigate("/coffeelist")
        })
    }

    return (
        <div className="form">
            <h1>Enter Coffee Info:</h1>
            <form onSubmit={handleSubmit}>
                <div className="form_input">
                    <input
                        type="text"
                        id="name"
                        name="blend_name"
                        value={formData.blend_name}
                        onChange={handleChange}
                        placeholder="Coffee name"
                    />
                </div>
                <div className="form_input">
                    <input
                        type="text"
                        id="intensifier"
                        name="intensifier"
                        value={formData.intensifier}
                        onChange={handleChange}
                        placeholder="Strength"
                    />
                </div>
                <div className="form_input">
                    <input
                        type="text"
                        id="origin"
                        name="origin"
                        value={formData.origin}
                        onChange={handleChange}
                        placeholder="Origin"
                    />
                </div>
                <div className="form_input">
                    <input
                        type="text"
                        id="notes"
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="Notes"
                    />
                </div>
                <div className="form_input">
                    <input
                        type="text"
                        id="muffin"
                        name="muffin_pairing"
                        value={formData.muffin_pairing}
                        onChange={handleChange}
                        placeholder="Muffin pairing"
                    />
                </div>
                <div className="form_input">
                    <input
                        type="text"
                        id="img_url"
                        name="img_url"
                        value={formData.img_url}
                        onChange={handleChange}
                        placeholder="Coffee image"
                    />
                </div>
                <button className="review_button" type="submit">Add New Coffee</button>
            </form>
        </div>
    )
}

export default NewCoffeeForm;