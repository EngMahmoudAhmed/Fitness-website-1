import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import About from './About/About';
import Service from './Service/Service';
import Trainer from './Trainer/Trainer';
import Plan from './Plan/Plan';
import Login from './Login/Login';
import Register from './Register/Register';
import Footer from './Footer/Footer'
import "../index.css";

const Index = () => {
  return (<>
    <Navbar />

    <div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='' element={<About />} />
        <Route path='' element={<Service />} />
        <Route path='' element={<Trainer />} />
        <Route path='' element={<Plan />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='*' element={<h1 className=' w-100 vh-100 position-fixed d-flex justify-content-center align-items-center'>
          <div className='fw-bolder fs-1 text-dark'> 404</div>
        </h1>} >
        </Route>
      </Routes>
    </div>
    <Footer />



  </>
  );
}

export default Index;
