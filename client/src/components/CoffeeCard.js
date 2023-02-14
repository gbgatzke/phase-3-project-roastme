

function CoffeeCard({ coffee }) {

    console.log(coffee)

    const { blend_name, intensifier, origin, img_url, muffin_pairing, notes } = coffee

    return(
        <div className="coffee_card">
            <img src={img_url} alt={blend_name} className="card_image"/>
            <h1>{blend_name}</h1>
            <h2>{notes}</h2>
            <p>{origin}</p>
            <p>{intensifier}</p>
            <p>Muffin pairing: {muffin_pairing}</p>
        </div>
    )
}

export default CoffeeCard