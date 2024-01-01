import DriverOverview from './DriverOverview';
import data from './data/drivers.json';
import { useState } from 'react';

const DriverReport = () => {

    const [drivers, setDrivers] = useState(data.data);

    const searchDrivers = (event) => {

        let searchText = event.target.value.toLowerCase();

        let results = data.data.filter((driver) => {

            let driverName = `${driver.forename} ${driver.surname}`.toLowerCase();

            return driverName.includes(searchText) ||                
                driver.vehicleRegistration.toLowerCase().includes(searchText)
        });

        setDrivers(results);
    }

    return (
        <>
            <form>
                <div className='search--group'>
                    <label htmlFor='search' className='label--search'>Search:</label>
                    <input type='text' id='search' className='input--search' onChange={searchDrivers} placeholder='filter by driver name or reg' ></input>
                </div>
            </form>

            <div className='driver--container'>
                {drivers.map((driver) =>
                    <DriverOverview key={driver.driverID} driver={driver}/>
                )}
            </div>

        </>);
}

export default DriverReport;