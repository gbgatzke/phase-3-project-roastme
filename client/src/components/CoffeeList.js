import CoffeeCard from './CoffeeCard'
import { useState, useEffect } from 'react'

function CoffeeList() {

    const [ coffees, setCoffees ] = useState([])

    useEffect(() => {
        fetch('/coffee_types')
        .then(r => r.json())
        .then(list => setCoffees(list))
}, [])

    const displayCoffees = coffees.map(coffee =>
        <CoffeeCard key={coffee.id} coffee={coffee} />
        )

    return(
        <div className="coffee_list">
            {displayCoffees}
        </div>
    )
}

export default CoffeeList