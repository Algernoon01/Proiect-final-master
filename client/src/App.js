import React, { useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/header/header';
import Footer from './components/footer/Footer';
import Portofolio from './pages/portofolio';
import Booking from './pages/booking';
import Contact from './pages/contact';

//import 'react-datepicker/dist/react-datepicker.css';

function App() {

 
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/portofolio" element={<Portofolio />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
