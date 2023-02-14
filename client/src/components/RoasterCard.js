

function RoasterCard({ roaster }) {

    const { name, img_url, website_url } = roaster

    console.log(roaster)
    return (
        <div className="roaster_card">
            <img src={img_url} alt={name} className="card_image"/>
            <h1>{name}</h1>
            <a href={website_url}>{name}</a>
        </div>
    )
}

export default RoasterCard;