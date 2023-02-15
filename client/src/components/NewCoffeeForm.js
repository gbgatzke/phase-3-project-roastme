import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function NewCoffeeForm() {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        blend_name: "",
        intensifier: "",
        origin: "",
        notes:"",
        muffin_pairing: "",
        img_url: "",
        roaster: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({...formData, [name]: value})
      }

    return (
        <div className="form">
            <h1>Enter Coffee Info:</h1>
            <form>
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
                        placeholder="Character"
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
                <div className="form_input">
                    <input
                        type="text"
                        id="roaster"
                        name="roaster"
                        value={formData.roaster}
                        onChange={handleChange}
                        placeholder="Roaster"
                    />
                </div>
                <button className="review_button" type="submit">Add new roaster</button>
            </form>
        </div>
    )
}

export default NewCoffeeForm;