const ActivityTotal = (props) => {

    const getTotalMinutes = (array) => {

        let totalMinutes = 0;

        array.forEach(activity => {
            totalMinutes += activity.activity.reduce((accumulator, currentValue) => accumulator + currentValue.duration, 0)
        });

        return totalMinutes;
    }

    const traces = props.traces;

    return (
        <div>
            <span>Total: </span>
            <span className='activity--total'>{getTotalMinutes(traces)}</span>
        </div>
    );
}



export default ActivityTotal;