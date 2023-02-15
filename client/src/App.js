// import { useState } from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import CoffeeType from './components/CoffeeType';
import Header from './components/Header';
import ReviewCard from './components/ReviewCard';
import RoasterList from './components/RoasterList'
import CoffeeList from './components/CoffeeList'
import NavBar from './components/NavBar'
import RoasterDetails from './components/RoasterDetails'

function App() {

    // const [ roasterList, setRoasterList ] = useState([])

    useEffect(() => {
      fetch("/roasters")
      .then(r => r.json())
      .then(roasters => setRoasterList(roasters))
    }, [])

  return (
    <div>
      <BrowserRouter>
      {/* <h1>hello</h1> */}
      <Routes>
        <Route path="/"
          element={<Home/>}
        />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
