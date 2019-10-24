import React from 'react';
import './App.css';
// Table
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FileRestClient from "./FileRestClient";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

class Entity {
    constructor(name, owner, lastModification, fileSize) {
        this.name = name;
        this.owner = owner;
        this.lastModification = lastModification;
        this.fileSize = fileSize;
    }
}

function createData(name, calories, fat, carbs, protein) {
    return {name, calories, fat, carbs, protein};
}

const rows = FileRestClient.getAllFiles(1);

function SimpleTable() {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Nombre</TableCell>
                        <TableCell align="right">Propietario</TableCell>
                        <TableCell align="right">&Uacute;ltima Mofificaci&oacute;n</TableCell>
                        <TableCell align="right">Tamaño del archivo</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.owner}</TableCell>
                            <TableCell align="right">{row.lastModification}</TableCell>
                            <TableCell align="right">{row.fileSize}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}

function ZeusTable() {
    return (
        <SimpleTable/>
    )

}

export default ZeusTable;