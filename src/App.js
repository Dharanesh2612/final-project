// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import SignInPage from './components/SignInPage';
import StudentNewUser from './components/StudentNewUser';



function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
         <Route path="/AboutUs" element={<AboutUs />} />
         <Route path='/ContactUs' element={<ContactUs />} />
         <Route path='/SignInPage' element={<SignInPage />} />
         <Route path='/StudentNewUser' element={<StudentNewUser />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
