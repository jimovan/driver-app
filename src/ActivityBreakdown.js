const ActivityBreakdown = (props) => {

    const getActivityBreakdown = (array) => {

        let breakdowns = [
            { Name: 'Available', Total: 0 },
            { Name: 'Drive', Total: 0 },
            { Name: 'Rest', Total: 0 },
            { Name: 'Work', Total: 0 }
        ]

        array.forEach(activity => {

            breakdowns.forEach(bd => {
                bd.Total += activity.activity.reduce((accumulator, currentValue) => {

                    if (currentValue.type === bd.Name.toLowerCase()) {
                        return accumulator + currentValue.duration;
                    }

                    return accumulator;
                }
                    , 0);
            });
        });

        return breakdowns;
    }

    const breakdowns = getActivityBreakdown(props.traces);

    return (
        <div className='activity--breakdown'>
            {breakdowns.map((breakdown, index) =>
                <div key={index} className='activity--item' data-item-type={breakdown.Name.toLowerCase()}>
                    <span>{breakdown.Name}: </span>
                    <span className='activity--total bold'>{breakdown.Total}</span>
                </div>
            )}
        </div>
    );
}

export default ActivityBreakdown;