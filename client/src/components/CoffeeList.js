import CoffeeCard from './CoffeeCard'
import { useEffect } from 'react'

function CoffeeList({ coffees }) {

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