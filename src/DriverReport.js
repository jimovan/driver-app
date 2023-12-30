import ActivityBreakdown from './ActivityBreakdown';
import ActivityGrid from './ActivityGrid';
// import ActivityTotal from './ActivityTotal';
import data from './data/drivers.json';
import { useState } from 'react';

const DriverReport = () => {

    const [drivers, setDrivers] = useState(data.data);

    const searchDrivers = (event) => {

        let searchText = event.target.value.toLowerCase();

        let results = data.data.filter((driver) => {
            return driver.forename.toLowerCase().includes(searchText) ||
                driver.surname.toLowerCase().includes(searchText) ||
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
                    <div className='driver--panel' key={driver.driverID}>
                        {/* <div className='driver--info'>
                            <span>{`${driver.forename} ${driver.surname}`}</span>
                            <span>{driver.vehicleRegistration}</span>
                        </div> */}

                        <span>{`${driver.forename} ${driver.surname}`}</span>
                        <span>{driver.vehicleRegistration}</span>

                        {/* <ActivityTotal traces={driver.traces} /> */}
                        <ActivityBreakdown traces={driver.traces} />
                        <ActivityGrid traces={driver.traces} />
                    </div>
                )}
            </div>

        </>);
}

export default DriverReport;