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
            </nav>
        </div>
    )
}

export default NavBar