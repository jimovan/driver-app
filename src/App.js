import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import NavMenu from './NavMenu';
import DriverReport from './DriverReport';
import Drivers from './Drivers';


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
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
