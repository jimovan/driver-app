import data from '../data/drivers.json';

export function getDrivers() {
    return data.data;
}

export function getActivityTypes() {
    let uniqueTypes = [];

    data.data.forEach(driver => {
        if (driver.traces.length > 0) {
            driver.traces.forEach(trace => {
                let types = [...new Set(trace.activity.map(act => act.type))];
                uniqueTypes = [...new Set([...uniqueTypes, ...types])];
            })
        }
    });

    return uniqueTypes;
}

export function getActivityDates() {
    let uniqueDates = [];

    data.data.forEach(driver => {
        if (driver.traces.length > 0) {
            let dates = [...new Set(driver.traces.map(t => t.date))];
            uniqueDates = [...new Set([...uniqueDates, ...dates])];
        }
    });

    return uniqueDates.sort();
}

export function getRandomDriver() {
    let randomNumber = Math.floor(Math.random() * data.data.length);
    return data.data[randomNumber];
}