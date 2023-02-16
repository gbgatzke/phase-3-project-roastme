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
    const [ coffees, setCoffees ] = useState([])

    useEffect(() => {
      fetch("/roasters")
      .then(r => r.json())
      .then(roasters => setRoasterList(roasters))
    }, [])

    useEffect(() => {
      fetch('/coffee_types')
      .then(r => r.json())
      .then(list => setCoffees(list))
    }, [])

    const onAddRoaster = (newRoaster) => {
      setRoasterList([...roasterList, newRoaster])
    }

    const onDeleteRoaster = (deletedRoaster) => {
      const updatedRoasters = roasterList.filter(roaster =>
          roaster.id !== deletedRoaster.id
        )
      setRoasterList(updatedRoasters)
    }

    const onAddCoffee = (newCoffee) => {
      setCoffees([...coffees, newCoffee])
    }

  return (
    <div className="main">
    <Header />
    <NavBar/>

      <Routes>

        <Route path="/"
          element={<Home />}
        />

        <Route path="/roasterlist"
          element={<RoasterList
            roasterList={roasterList}
            onDeleteRoaster={onDeleteRoaster}
            />}
        />

        <Route path="/coffeelist"
          element={<CoffeeList coffees={coffees}/>}
        />

        <Route path="/roasterdetails/:id"
          element={<RoasterDetails onDeleteRoaster={onDeleteRoaster}/>}
        />

        <Route path="/coffeedetails/:id"
          element={<CoffeeType />}
        />

        <Route path="/newroasterform"
          element={<NewRoasterForm onAddRoaster={onAddRoaster}/>}
        />

        <Route path="/newcoffeeform"
          element={<NewCoffeeForm onAddCoffee={onAddCoffee}/>}
        />

      </Routes>
  </div>
  );
}

export default App;
