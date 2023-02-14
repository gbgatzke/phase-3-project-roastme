import { useState, useEffect } from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import RoasterList from './components/RoasterList'
import CoffeeList from './components/CoffeeList'

function App() {

    const [ roasterList, setRoasterList ] = useState([])

    useEffect(() => {
      fetch("/roasters")
      .then(r => r.json())
      .then(roasters => setRoasterList(roasters))
    }, [])

  return (
    <div className="main">
      <BrowserRouter>
        <Routes>

          <Route path="/roasterlist"
            element={<RoasterList
            roasterList={roasterList}/>}
          />

          <Route path="/coffeelist"
            element={<CoffeeList />}
          />

        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
