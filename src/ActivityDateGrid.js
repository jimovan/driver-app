const ActivityDateGrid = (props) => {

    const dates = [
        {
            Date: '2021-02-01',
            Day: 'Mon'
        },
        {
            Date: '2021-02-02',
            Day: 'Tue'
        },
        {
            Date: '2021-02-03',
            Day: 'Wed'
        },
        {
            Date: '2021-02-04',
            Day: 'Thu'
        },
        {
            Date: '2021-02-05',
            Day: 'Fri'
        },
        {
            Date: '2021-02-06',
            Day: 'Sat'
        },
        {
            Date: '2021-02-07',
            Day: 'Sun'
        }
    ];

    const traces = props.traces;

    const hasActivityForDate = (array, date) => {

        if (array.some(e => e.date === date)) {
            return 'date green'
        }

        return 'date';
    }

    return (
        <div className='activity--grid'>
            {dates.map((date) =>
                <div class='activity--date' key={date}>
                    <span>{date.Day}</span>
                    <span className={hasActivityForDate(traces, date.Date)}></span>
                </div>

            )}
        </div>
    );
}

export default ActivityDateGrid;