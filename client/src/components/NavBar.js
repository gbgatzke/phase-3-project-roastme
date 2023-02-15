import { NavLink } from 'react-router-dom'

function NavBar( ) {

    return(
        <div>
            <nav>
                <NavLink to="/roasterlist">
                    <button className="button">Roasters</button>
                </NavLink>
                <NavLink to="/coffeelist">
                    <button className="button">Coffee Types</button>
                </NavLink>
                <NavLink to="/newroasterform">
                    <button className="button">New Roaster</button>
                </NavLink>
                <NavLink to="/newcoffeeform">
                    <button className="button">New Coffee</button>
                </NavLink>
            </nav>
        </div>
    )
}

export default NavBar