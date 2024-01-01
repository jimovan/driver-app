import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import NavMenu from './NavMenu';
import DriverReport from './pages/DriverReport';
import Drivers from './pages/Drivers';
import About from './pages/About';
import Vehicles from './pages/Vehicles';


function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Header />
        <div className='main'>
          <NavMenu />
          <div className='content'>
            <Routes>
              <Route path='/' element={<DriverReport />} />
              <Route path='drivers' element={<Drivers />} />
              <Route path='about' element={<About />} />
              <Route path='vehicles' element={<Vehicles />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
