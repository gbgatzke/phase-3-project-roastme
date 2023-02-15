import RoasterCard from './RoasterCard'

function RoasterList ({ roasterList}) {

    const displayRoasters = roasterList.map(roaster =>
        <RoasterCard key={roaster.id} roaster={roaster}/>
        )

    return (
        <div className="roaster_list">
            {displayRoasters}
        </div>
    )
}

export default RoasterList