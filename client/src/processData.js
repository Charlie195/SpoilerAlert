
function convertMilliseconds(milliseconds) {
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const millisecondsPerYear = 365.25 * millisecondsPerDay; 

    let remainingMilliseconds = milliseconds;

    const years = Math.floor(remainingMilliseconds / millisecondsPerYear);
    remainingMilliseconds -= years * millisecondsPerYear;

    const days = Math.floor(remainingMilliseconds / millisecondsPerDay);

    return {years, days};
}

export function processItems(items) {
    const processedItems = [];
    const currentTime = Date.now(); 

    items.forEach(item => {
        const dateNow = parseInt(item.dateNow);
        const expiryDate = new Date(item.expiryDate).getTime();
        const sevenDaysBeforeExpiry = expiryDate - (7 * 24 * 60 * 60 * 1000); 

        //The percentage of time passed from dateNow to currentTime, relative to the expiryDate
        let timePassedPercentage = ((currentTime - dateNow) / (expiryDate - dateNow)) * 100;
        timePassedPercentage = Math.min(Math.max(timePassedPercentage, 0), 100);

        // Percentage of time relative to 7 days before the expiry date
        let warningPercentage;
        let state;
        if (currentTime >= expiryDate) {
            warningPercentage = 0;
            state = 'Expired';
        }
        else if (currentTime >= sevenDaysBeforeExpiry) {
            // less than 7 days
            warningPercentage = ((expiryDate - currentTime) / (expiryDate - sevenDaysBeforeExpiry)) * 100;
            state = 'Warning'; 
        } else {
            // more than 7 days 
            warningPercentage = 100;
            state = 'Safe';
        }
        warningPercentage = Math.min(Math.max(warningPercentage, 0), 100); 

        // Push the processed item into the new array
        processedItems.push({
            _id: item._id,
            itemName: item.itemName,
            expiryDate: item.expiryDate,
            state: state,
            timePassedPercentage: 100 - parseFloat(timePassedPercentage.toFixed(2)),
            warningPercentage: parseFloat(warningPercentage.toFixed(2)),
            timeLeft: convertMilliseconds(expiryDate - currentTime),
            rawTimeLeft: (expiryDate - currentTime),
        });
    });

    return processedItems;
}

export function sortByRawTimeLeft(array) {
    return array.sort((a, b) => a.rawTimeLeft - b.rawTimeLeft);
}
