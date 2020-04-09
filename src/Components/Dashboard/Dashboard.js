import React, { useEffect, useState } from 'react';
import Card from './Card/Card';
import './Dashboard.css'
import SimpleTable from './TableData/TableData';
import NavigationBar from '../HomePage/NavigationBar/NavigationBar'


const Dashboard = () => {

    const [info, setInfo] = useState([])

    useEffect(() => {
        fetch('http://localhost:4200/viewAppointment')
            .then(res => res.json())
            .then(data => {
                console.log('data received', data)
                setInfo(data)
            })
    }, [])


    return (
        <div>
            <NavigationBar />
            <h3 style={{ marginLeft: -1000, marginBottom: 50 }}>Dashboard</h3>
            <div style={{ display: 'flex' }}>
                <Card digit="09" color="crimson" message="Pending Appointment" />
                <Card digit="07" color="#00adb5" message="Today's Appointment" />
                <Card digit="06" color="#17b978" message="Total Appointment" />
                <Card digit="05" color="#f1c40f" message="Total Patients" />

            </div>
            <div className="displaySection" id="tableSection">
                <SimpleTable data={info} />

            </div>
        </div>
    );
};

export default Dashboard; 