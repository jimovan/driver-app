import DriverOverview from '../DriverOverview';
import * as DriverService from '../services/driverService';
import { useState } from 'react';

const DriverReport = () => {

    const [drivers, setDrivers] = useState(DriverService.getDrivers());

    const searchDrivers = (event) => {
        let searchText = event.target.value.toLowerCase();

        let results = DriverService.getDrivers().filter((driver) => {
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
                    <input type='text' id='search' className='input--search' onChange={searchDrivers} placeholder='filter by name or reg' ></input>
                </div>
            </form>

            <div className='driver--container'>
                {drivers.map((driver) =>
                    <DriverOverview key={driver.driverID} driver={driver} />
                )}
            </div>

        </>);
}

export default DriverReport;