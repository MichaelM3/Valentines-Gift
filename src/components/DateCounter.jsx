import { useState, useEffect } from 'react';

const DateCounter = () => {
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
        <div className="flex flex-col justify-center border-4 border-purple-400 bg-slate-400 text-pink-200 rounded-xl text-center w-[250px] h-[200px]">
            <h2 className="font-extrabold text-3xl">In love for</h2>
            <p className="font-bold text-xl animate-bounce">
                {timePassed.years} year {timePassed.months} months {timePassed.days}{' '}
                days
            </p>
        </div>
    );
}

export default DateCounter;
