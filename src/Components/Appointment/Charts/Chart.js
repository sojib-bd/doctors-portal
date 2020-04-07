import React from 'react';
import './Chart.css';
// import elements for  dialog box 
import Button from "@material-ui/core/Button";
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
    return (
        <div className='chartLayout'>
            <h1>{props.title}</h1>
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
                    <form style={{ width: 400 }}>
                        <input type="text" name="time" id="timeInput" value={props.time} className="form-control" /><br />
                        <input type="text" name="name" id="nameInput" placeholder="Your Name" className="form-control" required /><br />
                        <input type="tel" name="phone" id="phoneInput" placeholder="Phone Number" className="form-control" required /><br />
                        <input type="email" name="email" id="emailInput" placeholder="Your Email Address" className="form-control" required /><br />
                        <input type="datetime" name="date" id="dateInput" placeholder="DD/MM/YY" className="form-control" value={`${props.date}/${props.month}/${props.year}`} readOnly /><br />


                    </form>


                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Send
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Chart;