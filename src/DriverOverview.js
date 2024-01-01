import ActivityBreakdown from './ActivityBreakdown';
import ActivityDateGrid from './ActivityDateGrid';

const DriverOverview = (props) => {

    const driver = props.driver;

    return (
        <div className='driver--panel'>
            <span className='bold'>{`${driver.forename} ${driver.surname}`}</span>
            <span >{driver.vehicleRegistration}</span>
            <ActivityBreakdown traces={driver.traces} />
            <ActivityDateGrid traces={driver.traces} />
        </div>
    );
}

export default DriverOverview;