import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function NewRoasterForm({ onAddRoaster }) {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: "",
        img_url: "",
        website_url: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({...formData, [name]: value})
      }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("/roaster_create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then(newR => {
            onAddRoaster(newR);
            navigate("/roasterlist");
        })
    }

    return (
        <div className="form">
            <h1>Enter Roaster Info:</h1>
            <form onSubmit={handleSubmit}>
                <div className="form_input">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name of roaster"
                    />
                </div>
                <div className="form_input">
                    <input
                        type="text"
                        id="img_url"
                        name="img_url"
                        value={formData.img_url}
                        onChange={handleChange}
                        placeholder="Roaster image"
                    />
                </div>
                <div className="form_input">
                    <input
                        type="text"
                        id="website_url"
                        name="website_url"
                        value={formData.website_url}
                        onChange={handleChange}
                        placeholder="Roaster website"
                    />
                </div>
                <button className="review_button" type="submit">Add New Roaster</button>
            </form>
        </div>
    )
}

export default NewRoasterForm;

    // const handleSubmit = (e) => {
    //   e.preventDefault()
    //   fetch("http://localhost:3000/artists", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData)
    //   })
    //   .then(r => r.json())
    //   .then(newArtist => {
    //     onAddArtist(newArtist);
    //     navigate('/artistslist');
    //   })
    // }
