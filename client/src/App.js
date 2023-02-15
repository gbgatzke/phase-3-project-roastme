// import { useState } from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import CoffeeType from './components/CoffeeType';
import Header from './components/Header';
import ReviewCard from './components/ReviewCard';

function App() {

    // const [ roasterList, setRoasterList ] = useState([])

    // useEffect(() => {
    //   return (fetch("/roasters")
    //   .then(r => r.json())
    //   .then(roasters => setRoasterList(roasters))
    // )}, [])

  return (
    <div>
      <BrowserRouter>
      
      <Routes>
      
        <Route path="/"
          element={<Home/>}
        />
        <Route path="/CoffeeTypes/:id"
          element={<CoffeeType/>}
        />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
