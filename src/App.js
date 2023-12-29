import './App.css';
import Header from './Header';
import NavMenu from './NavMenu';
import DriverReport from './DriverReport';


function App() {
  return (
    <div className='app'>
      <Header />
      <div className='main'>
        <NavMenu />
        <div className='content'>
          <DriverReport />
        </div>
      </div>

    </div>
  );
}

export default App;
