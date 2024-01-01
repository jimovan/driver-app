import DriverOverview from "../DriverOverview";
import data from '../data/drivers.json';

const Drivers = () => {

    let randomNumber = Math.floor(Math.random() * data.data.length);
    const driver = data.data[randomNumber];

    return (
        <>
            <h1>Drivers Page</h1>
            <p>A dummy page for the drivers to show routing.</p>
            <DriverOverview driver={driver}/>
        </>       
        
    );
}

export default Drivers;