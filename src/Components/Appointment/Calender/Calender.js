import React from 'react';
import Calendar from 'react-calendar';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import AppointmentChart from '../AppointmentChart/AppointmentChart';


const Calender = () => {
    const [date, setDate] = useState(new Date());

    const onChange = (date) => {
        setDate(date);


    }
    return (
        <div>
            <h1>Calender Section</h1>
            <Calendar
                onChange={onChange}
                value={date}
            />
            <AppointmentChart currentDate={date} />
        </div>
    );
};

export default Calender;