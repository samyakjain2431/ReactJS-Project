import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Error from './Components/Error';
import Main from './Components/Main';
import Footer from "./Components/Footer";
// import Wide from "./Components/Wide";
// import WideElement from './Components/Wide';



function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
      {/* <Wide/> */}
      {/* <WideElement/> */}
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
