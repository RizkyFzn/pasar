import React from 'react';
// import { Col, Row, Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Hasil, NavbarComponent } from './components';
import Footer from './components/Footer';
import Home from './containers/Home';
import Login from './containers/Login';

function App() {
  // const [menus, setMenu] = useState([]);
  return (
    <>
      <div className="App">
        <NavbarComponent />

        {/* <Login /> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/home/:category" element={<Home />} />
            <Route path="/keranjang" element={<Hasil />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  );
}

export default App;
