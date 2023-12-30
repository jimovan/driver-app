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

    const getTotalMinutes = (array) => {

        let totalMinutes = 0;

        array.forEach(activity => {
            totalMinutes += activity.activity.reduce((accumulator, currentValue) => accumulator + currentValue.duration, 0)
        });

        return totalMinutes;
    }

    const hasActivityForDate = (array, date) => {

        if (array.some(e => e.date === date)) {
            return 'date green'
        }

        return 'date';
    }

    return (
        <div>

            <form>
                <label htmlFor='search'>Search:</label>
                <input type='text' id='search' onChange={searchDrivers} placeholder='search by driver name or reg' ></input>
            </form>

            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>Mon</th>
                        <th>Tues</th>
                        <th>Wed</th>
                        <th>Thurs</th>
                        <th>Fri</th>
                        <th>Sat</th>
                        <th>Sun</th>
                    </tr>
                </thead>
                <tbody>
                    {drivers.map((driver) =>
                        <tr key={driver.driverID}>
                            <td>{`${driver.forename} ${driver.surname}`}</td>
                            <td>{driver.vehicleRegistration}</td>
                            <td>{getTotalMinutes(driver.traces)}</td>
                            <td className={hasActivityForDate(driver.traces, '2021-02-01')}></td>
                            <td className={hasActivityForDate(driver.traces, '2021-02-02')}></td>
                            <td className={hasActivityForDate(driver.traces, '2021-02-03')}></td>
                            <td className={hasActivityForDate(driver.traces, '2021-02-04')}></td>
                            <td className={hasActivityForDate(driver.traces, '2021-02-05')}></td>
                            <td className={hasActivityForDate(driver.traces, '2021-02-06')}></td>
                            <td className={hasActivityForDate(driver.traces, '2021-02-07')}></td>
                        </tr>
                    )}
                </tbody>
            </table>

        </div>);
}

export default DriverReport;