import React from 'react';
import './Chart.css';
// import elements for  dialog box 

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useState } from 'react';


const Chart = (props) => {
    const [open, setOpen] = useState(false)


    const handleChanged = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleSubmit = (e) => {

        const name = document.getElementById('nameInput').value;

        const email = document.getElementById('emailInput').value;
        const phone = document.getElementById('phoneInput').value;
        const schedule = document.getElementById('timeInput').value;
        const date = document.getElementById('dateInput').value;
        const appointmentTitle = document.getElementById('appointmentTitle').value;

        const appointment = {
            reason: appointmentTitle,
            name: name,
            email: email,
            phone,
            schedule,
            date,

        }
        console.log(name, email)
        fetch('http://localhost:4200/appointment', {
            method: 'POST',
            body: JSON.stringify(appointment),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }

        })
            .then(res => res.json())
            .then(data => console.log('post successful', data));

        console.log(e.cancelable)

        e.preventDefault();
    }
    return (
        <div className='chartLayout'>
            <h1 id="appointmentTitle">{props.title}</h1>
            <h5>{props.time}</h5>
            <p><small>10 SPACE AVAILABLE</small></p>
            <button id='appointmentBtn' onClick={handleChanged}>BOOK APPOINTMENT</button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title" style={{ color: "#1CC7C1" }}>{props.title}</DialogTitle>
                <DialogContent>
                    <form style={{ width: 400 }} onSubmit={handleSubmit} >
                        <input type="text" name="time" id="timeInput" value={props.time} className="form-control" onChange={() => { }} /><br />
                        <input type="text" name="name" id="nameInput" placeholder="Your Name" className="form-control" required /><br />
                        <input type="tel" name="phone" id="phoneInput" placeholder="Phone Number" className="form-control" required /><br />
                        <input type="email" name="email" id="emailInput" placeholder="Your Email Address" className="form-control" required /><br />
                        <input type="datetime" name="date" id="dateInput" className="form-control" value={`${props.date}/${props.month}/${props.year}`} onChange={() => { }} /><br />
                        <DialogActions>
                            <button type="submit" style={{ width: 100, padding: 5, background: "#1CC7C1", color: 'white' }}>Send</button>
                        </DialogActions>
                    </form>
                    <button onClick={handleClose}>Close</button>



                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Chart;