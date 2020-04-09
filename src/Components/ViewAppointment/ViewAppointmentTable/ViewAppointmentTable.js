import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});




const AppointmentTable = (props) => {
    const classes = useStyles();

    const dd = props.dateTime.getDate();
    const mm = props.dateTime.getMonth();
    const yy = props.dateTime.getFullYear();

    const fullDate = `${dd}/${mm}/${yy}`;
    // console.log(fullDate)


    const newData = props.dataInfo.filter(x => x.date === fullDate);



    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>

                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Schedule</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody id="tableBody">


                    {

                        newData.map((row) => (
                            <TableRow key={row._id}>
                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">{row.schedule}</TableCell>
                                <TableCell align="right">
                                    <Button variant="contained" color="primary">
                                        View
      </Button>
                                </TableCell>


                            </TableRow>
                        ))}

                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default AppointmentTable