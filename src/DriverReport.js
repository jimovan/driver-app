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

    let uniqueTypes = [];

    drivers.forEach(driver => {
        if (driver.traces.length > 0) {
            driver.traces.forEach(trace => {
                let types = [...new Set(trace.activity.map(act => act.type))];
                uniqueTypes = [...new Set([...uniqueTypes, ...types])];
            })
        }
    });

    let breakdowns = uniqueTypes.map(type => ({
        Name: type,
        Total: 0
    }));

    console.log(breakdowns);


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