import React, { useEffect, useState } from 'react'

const DateCounter = () => {
    const [date, setDate] = useState({
        year: new Date().getFullYear(),
        month: new Date().getMonth(),
        day: new Date().getDate(),
    })

    useEffect(() => {
        
    }, [])

    return (
        <div>

        </div>
    )
}

export default DateCounter
