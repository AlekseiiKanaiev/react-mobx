import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IData from '../../interfaces/idata';
import appState from '../../models/app.model';
import inputState from '../../models/inputs.model';

export default function TableComponent() {

    return (
        <TableContainer component={Paper}>
            <Table className='table' aria-label="simple table">
                <TableHead>
                    <TableRow>
                    <TableCell>Image</TableCell>
                    <TableCell align="left">Full name</TableCell>
                    <TableCell align="left">Name</TableCell>
                    <TableCell align="left">Price</TableCell>
                    <TableCell align="left">volume 24 hours</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {appState.data.map((item: IData) => (
                    <TableRow key={item.id}>
                        <TableCell>
                            <img src={item.imgURL} alt={item.name} width='20px' height='20px'/>
                        </TableCell>
                        <TableCell align="left">{item.fullName}</TableCell>
                        <TableCell align="left" className='name-column'>
                            <button type='button' onClick={() => inputState.setSelectedCurrency(item.name)}>{item.name}</button>
                        </TableCell>
                        <TableCell align="left">$ {item.price}</TableCell>
                        <TableCell align="left">{item.volume24Hours}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
