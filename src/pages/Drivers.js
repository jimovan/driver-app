import DriverOverview from '../DriverOverview';
import * as DriverService from '../services/driverService';

const Drivers = () => {

    const driver = DriverService.getRandomDriver();

    return (
        <>
            <h1>Drivers Page</h1>
            <p>A dummy page for the drivers to show routing.</p>
            <DriverOverview driver={driver} />
        </>

    );
}

export default Drivers;