import React from 'react';
import Calender from './Calender/Calender';
import NavigationBar from '../HomePage/NavigationBar/NavigationBar';

const GetAppointment = () => {
    return (
        <div>
            <NavigationBar />
            <Calender></Calender>

        </div>
    );
};

export default GetAppointment;