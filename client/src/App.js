import { useState, useEffect } from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import RoasterList from './components/RoasterList'
import CoffeeList from './components/CoffeeList'
import NavBar from './components/NavBar'
import RoasterDetails from './components/RoasterDetails'

function App() {

    const [ roasterList, setRoasterList ] = useState([])

    useEffect(() => {
      fetch("/roasters")
      .then(r => r.json())
      .then(roasters => setRoasterList(roasters))
    }, [])

  return (
    <div className="main">
      <NavBar/>

        <Routes>

          <Route path="/roasterlist"
            element={<RoasterList
            roasterList={roasterList}/>}
          />

          <Route path="/coffeelist"
            element={<CoffeeList />}
          />

          <Route path="/roasterdetails"
            element={<RoasterDetails />}
          />

          {/* <Route path="/reviews/:id"
          /> */}

        </Routes>
    </div>
  );
}

export default App;
