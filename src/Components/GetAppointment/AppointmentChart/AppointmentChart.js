import React from 'react';
import Chart from '../Charts/Chart';
import './AppointmentChart.css';



const AppointmentChart = (props) => {

    return (
        <div>


            <div className="chartContainer">
                <Chart
                    title="Teeth Orthodontics"
                    time="8:00AM-9:00AM"
                    date={props.currentDate.getDate()}
                    month={props.currentDate.getMonth()}
                    year={props.currentDate.getFullYear()}
                />
                <Chart
                    title="Cosmetics Dentistry"
                    time="10:00AM-11:30AM"
                    date={props.currentDate.getDate()}
                    month={props.currentDate.getMonth()}
                    year={props.currentDate.getFullYear()}
                />
                <Chart
                    title="Teeth Cleaning"
                    time="5:00PM-6:30PM"
                    date={props.currentDate.getDate()}
                    month={props.currentDate.getMonth()}
                    year={props.currentDate.getFullYear()}
                />
                <Chart
                    title="Cavity Protection"
                    time="7:00AM-8:00AM"
                    date={props.currentDate.getDate()}
                    month={props.currentDate.getMonth()}
                    year={props.currentDate.getFullYear()}
                />
                <Chart
                    title="Teeth Orthodontics"
                    time="3:00PM-4:00PM"
                    date={props.currentDate.getDate()}
                    month={props.currentDate.getMonth()}
                    year={props.currentDate.getFullYear()}
                />
                <Chart
                    title="Teeth Orthodontics"
                    time="3:00PM-4:00PM"
                    date={props.currentDate.getDate()}
                    month={props.currentDate.getMonth()}
                    year={props.currentDate.getFullYear()}
                />

            </div>
        </div>
    );
};

export default AppointmentChart;