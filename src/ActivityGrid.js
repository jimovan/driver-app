const ActivityGrid = (props) => {

    const dates = [
        '2021-02-01',
        '2021-02-02',
        '2021-02-03',
        '2021-02-04',
        '2021-02-05',
        '2021-02-06',
        '2021-02-07'
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
                <span key={date} className={hasActivityForDate(traces, date)}></span>
            )}

        </div>
    );
}

export default ActivityGrid;