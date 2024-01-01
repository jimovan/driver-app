import * as DriverService from './services/driverService';

const ActivityDateGrid = (props) => {

    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    const dates = DriverService.getActivityDates().map((date, index) => ({
        Date: date,
        Day: days[index]
    }));

    const traces = props.traces;

    const hasActivityForDate = (array, date) => {

        if (array.some(e => e.date === date)) {
            return 'date green'
        }

        return 'date';
    }

    return (
        <div className='activity--grid'>
            {dates.map((date, index) =>
                <div className='activity--date' key={index}>
                    <span>{date.Day}</span>
                    <span className={hasActivityForDate(traces, date.Date)}></span>
                </div>

            )}
        </div>
    );
}

export default ActivityDateGrid;