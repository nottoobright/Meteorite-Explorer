import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import '../styles/Meteorite.css'


const List = ({ data }) => {
    return (
        <div className="f1 w-80-l w-60-m w-40-ns center pb4">
            <Paper className='root'>
                <Table className='table'>
                    <TableHead className="bg-table fw5">
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Id</TableCell>
                            <TableCell align="right">Name Type</TableCell>
                            <TableCell align="right">Rec Class</TableCell>
                            <TableCell align="right">Mass (g)</TableCell>
                            <TableCell align="right">Fall</TableCell>
                            <TableCell align="right">Year</TableCell>
                            <TableCell align="right">Latitude</TableCell>
                            <TableCell align="right">Longitude</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            data.map((i) => (
                                <TableRow className="content" key={i.id}>
                                    <TableCell component='th' scope='row'>
                                        {i.name}
                                    </TableCell>
                                    <TableCell align="right">{i.id}</TableCell>
                                    <TableCell align="right">{i.nametype}</TableCell>
                                    <TableCell align="right">{i.recclass}</TableCell>
                                    <TableCell align="right">{i.mass}</TableCell>
                                    <TableCell align="right">{i.fall}</TableCell>
                                    <TableCell align="right">{i.year}</TableCell>
                                    <TableCell align="right">{i.reclat}</TableCell>
                                    <TableCell align="right">{i.reclong}</TableCell>
                                </TableRow> 
                            ))
                        }
                    </TableBody>
                </Table>
            </Paper>
        </div>
    )
}

export default List;