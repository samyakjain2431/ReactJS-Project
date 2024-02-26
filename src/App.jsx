import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Error from './Components/Error';
import Main from './Components/Main';
import WideElement from './Components/wideElement';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
      <WideElement/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
