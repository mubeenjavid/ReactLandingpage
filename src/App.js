
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from './Pages/Layout';
import Home from './Pages/Home';
import Store from './Pages/Store';
import Products from './Pages/Products';
import Nopage from './Pages/Nopage';
import Header from './Pages/Header';
import Footer from './Pages/Footer';
import About from './Pages/About';


function App() {
  return (
    < >
    <Header  />
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="/about" element={<About  />} />
          <Route path="/products" element={<Products />} />
          <Route path="/store" element={<Store/>} />
        
          
          <Route path="*" element={<Nopage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  <Footer/>

    </>
  );
}

export default App;
