function countHours(year, holidays) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    let daysToGain = 0;
    holidays.forEach(x => {
        const splittedDates = x.split('/');

        const monthNumber = parseInt(splittedDates[0]);
        const dayNumber = splittedDates[1];

        const date = new Date(`${monthNames[monthNumber - 1]} ${dayNumber}, ${year}`);
        const dayOfWeek = date.getDay();

        if (dayOfWeek !== 0 && dayOfWeek !== 6) {
            daysToGain += 2;
        }
    });
    return daysToGain;
}