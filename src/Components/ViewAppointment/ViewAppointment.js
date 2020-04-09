import React from 'react';
import Calendar from 'react-calendar';
import { useState } from 'react';
import './ViewAppointment.css';
import { useEffect } from 'react';
import NavigationBar from '../HomePage/NavigationBar/NavigationBar';
import AppointmentTable from '../ViewAppointment/ViewAppointmentTable/ViewAppointmentTable';

const ViewAppointment = () => {
    const [date, setDate] = useState(new Date());
    const [currentData, setCurrentData] = useState([])
    const onChange = (date) => {
        setDate(date)
    }


    useEffect(() => {

        fetch('http://localhost:4200/viewAppointment')
            .then(res => res.json())
            .then(data => {
                setCurrentData(data)
            })
    }, [])

    return (
        <div>
            <NavigationBar />
            <div className="container">

                <Calendar onChange={onChange} value={date} />
                <div className="listContainer">
                    <AppointmentTable dataInfo={currentData} dateTime={date} />

                </div>
            </div>
        </div>
    );
};

export default ViewAppointment;