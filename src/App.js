import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Properties from './components/Properties';
import Property from './components/Property';
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import Error from './components/Error'
import Contact from './components/Contact'
import Sellers from './components/Sellers'
import Seller from './components/Seller'

const App = () => {
  return (
    <>
       <Router>
       <Navbar />
        <Routes>
            <Route exact path='/' element={<Homepage />} />
            <Route path='/properties' element={<Properties />} />
            <Route path='*' element={<Error />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/sellers' element={<Sellers />} />
            <Route path='/seller/:id' element={<Seller />} />
            <Route path='/property/:id' element={<Property />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
