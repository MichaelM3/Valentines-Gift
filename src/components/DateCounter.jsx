import { useState, useEffect } from 'react';

const  DateCounter = () => {
    const [timePassed, setTimePassed] = useState({
        years: 0,
        months: 0,
        days: 0,
    });

    useEffect(() => {
        const startDate = new Date('September 12, 2021');
        const currentDate = new Date();
        const startYear = startDate.getFullYear();
        const startMonth = startDate.getMonth();
        const startDay = startDate.getDate();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth();
        const currentDay = currentDate.getDate();

        let years = currentYear - startYear;
        let months = currentMonth - startMonth;
        let days = currentDay - startDay;

        if (months < 0) {
            years--;
            months = 12 + months;
        }

        if (days < 0) {
            months--;
            days = 30 + days;
        }

        setTimePassed({ years, months, days });
    }, []);

    return (
        <div>
            <h2>In love since:</h2>
            <p>
                {timePassed.years} years {timePassed.months} months {timePassed.days}{' '}
                days
            </p>
        </div>
    );
}

export default DateCounter;
