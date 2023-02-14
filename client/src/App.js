import { useState, useEffect } from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home'

function App() {

    const [ roasterList, setRoasterList ] = useState([])

    // useEffect(() => {
    //   return (fetch("/roasters")
    //   .then(r => r.json())
    //   .then(roasters => setRoasterList(roasters))
    // )}, [])

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
