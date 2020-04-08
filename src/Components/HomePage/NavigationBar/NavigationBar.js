import React from 'react';
import './NavigationBar.css'

const NavigationBar = () => {
    return (
        <div>
            <nav>
                <a href="/home">Home</a>
                <a href="/appointment">Appointments</a>
                <a href="/dashboard">Dashboard</a>
            </nav>
        </div>
    );
};

export default NavigationBar;