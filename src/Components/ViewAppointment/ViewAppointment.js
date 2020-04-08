import React from 'react';
import Calendar from 'react-calendar';
import { useState } from 'react';
import './ViewAppointment.css';
import { useEffect } from 'react';

const ViewAppointment = () => {
    const [date, setDate] = useState(new Date());
    const onChange = (date) => {
        setDate(date)
    }


    useEffect(() => {

        fetch('http://localhost:4200/viewAppointment')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                console.log(date);
                //formatting the date 
                const dd = date.getDate();
                const mm = date.getMonth();
                const yy = date.getFullYear();

                const fullDate = `${dd}/${mm}/${yy}`;
                console.log(fullDate)

                const newData = data.filter(x => x.date === fullDate);
                console.log(newData)
                //Clearing the data if render
                document.getElementById('nameList').innerHTML = "";
                document.getElementById('timeList').innerHTML = "";
                document.getElementById('btnList').innerHTML = " "
                newData.map(el => {
                    const list = document.getElementById('nameList');
                    const item = document.createElement('li');
                    item.innerText = el.name;
                    list.appendChild(item);
                    //Time list
                    const timeList = document.getElementById('timeList');
                    const timeItem = document.createElement('li');
                    timeItem.innerText = el.schedule;
                    timeList.appendChild(timeItem)
                    // btn list 
                    const btnList = document.getElementById('btnList');
                    const btnItem = document.createElement('li');
                    btnItem.innerText = 'view';
                    btnList.appendChild(btnItem);


                })
            })
    }, [date])




    return (
        <div className="container">

            <Calendar onChange={onChange} value={date} />
            <div className="listContainer">
                <ul id="nameList">
                    <li>Name</li>
                </ul>
                <ul id="timeList">
                    <li>Time</li>

                </ul>
                <ul id="btnList">
                    <li></li>
                </ul>
            </div>
        </div>
    );
};

export default ViewAppointment;