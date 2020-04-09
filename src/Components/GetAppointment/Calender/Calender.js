import React from 'react';
import Calendar from 'react-calendar';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import AppointmentChart from '../AppointmentChart/AppointmentChart';
import img from '../../../images/Mask Group 1.png';
import './Calender.css'


const Calender = () => {
    const [date, setDate] = useState(new Date());

    const onChange = (date) => {
        setDate(date);


    }
    return (
        <div className="mainContainer">
            <h4 style={{ marginTop: 50, marginBottom: 50 }}>Appointment</h4>
            <div className="calendarContainer">
                <Calendar
                    onChange={onChange}
                    value={date}
                />
                <img src={img} alt="" height="300" />

            </div>
            <AppointmentChart currentDate={date} />
        </div>
    );
};

export default Calender;