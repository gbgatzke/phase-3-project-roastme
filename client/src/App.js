// import { useState } from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react';

import Home from './components/Home'
import CoffeeType from './components/CoffeeType';
import Header from './components/Header';
import RoasterList from './components/RoasterList'
import CoffeeList from './components/CoffeeList'
import NavBar from './components/NavBar'
import RoasterDetails from './components/RoasterDetails'
import NewRoasterForm from './components/NewRoasterForm'
import NewCoffeeForm from './components/NewCoffeeForm'


function App() {

    const [ roasterList, setRoasterList ] = useState([])

    useEffect(() => {
      fetch("/roasters")
      .then(r => r.json())
      .then(roasters => setRoasterList(roasters))
    }, [])

  return (
    <div className="main">
    <Header />
    <NavBar/>

      <Routes>

        <Route path="/roasterlist"
          element={<RoasterList
          roasterList={roasterList}/>}
        />

        <Route path="/coffeelist"
          element={<CoffeeList />}
        />

        <Route path="/roasterdetails/:id"
          element={<RoasterDetails />}
        />

        <Route path="/coffeedetails/:id"
          element={<CoffeeType />}
        />

        <Route path="/newroasterform"
          element={<NewRoasterForm />}
        />

        <Route path="/newcoffeeform"
          element={<NewCoffeeForm />}
        />

      </Routes>
  </div>
  );
}

export default App;
