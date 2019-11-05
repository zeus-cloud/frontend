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
import ZeusContextMenu from "./ContextMenu";
import SnackbarContent from "@material-ui/core/SnackbarContent";

const classes = makeStyles(theme => ({
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
    snackbar: {
        margin: theme.spacing(1),
    }
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

class SimpleTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false,
            email: "",
            password: "",
            error: false,
            errorMessage: "",
            showContextMenu: false,
            clientX: null,
            clientY: null,
            rows: []
        };

        FileRestClient.getAllFiles("gato")
            .then(unprocessedResponse =>
                unprocessedResponse.json().then(data => ({
                        data: data,
                        status: unprocessedResponse.status
                    })
                ).then(res => {
                    if (res.data !== null) {
                        const response = res.data;
                        if (response.data.length > 0) {
                            res.data[0].directory.forEach(file => this.state.rows.push(new Entity(file, "gato", new Date(),
                                Math.floor(Math.random() * (100 - 3 + 1)) + 3 + 'MB')))
                        }

                        if (response.errors.length > 0) {
                            console.error(response.errors[0].message)
                            this.setState({
                                error: true,
                                errorMessage: "No se pudieron traer los archivos de la base de datos. Por favor, intente más tarde."
                            });
                        } else {
                            this.setState({
                                error: false,
                                errorMessage: ""
                            });
                        }
                    }
                }));

        /* for (var i = 0; i < 100; i++) {
            if (i % 2 === 0) {
                this.state.rows.push(new Entity('Archivo' + i, 'Alejandro Bullrich', '17/07/2019', 24 + 'MB'));
            } else {
                this.state.rows.push(new Entity('Archivo' + i, 'Macarena Lui', '12/06/2019', 24 + 'MB'));
            }
        } */
    }

    callbackFunction = (childData) => {
        this.setState({showContextMenu: childData})
    };

    openContextMenu = (event, row) => {
        event.preventDefault();
        this.setState({
            showContextMenu: true,
            clientX: event.clientX - 2,
            clientY: event.clientY - 4
        })
        // <ZeusContextMenu mouseX={event.clientX - 2} mouseY={event.clientY - 4}/>
    };

    render() {
        return (
            <Paper className={classes.root}>
                { this.state.error ?
                <SnackbarContent
                    className={classes.snackbar}
                    message={this.state.errorMessage}
                />
                :
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell align="right">Propietario</TableCell>
                            <TableCell align="right">&Uacute;ltima Mofificaci&oacute;n</TableCell>
                            <TableCell align="right">Tamaño del archivo</TableCell>
                        </TableRow>
                    </TableHead>
                    <div>
                        {this.state.showContextMenu ?
                            <ZeusContextMenu
                                parentCallback = {this.callbackFunction}
                                mouseX={this.state.clientX - 2}
                                mouseY={this.state.clientY - 4}
                            /> : null}
                    </div>
                    <TableBody>
                        {this.state.rows.map(row => (
                            <TableRow key={row.name} onContextMenu={event => this.openContextMenu(event, row)}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.owner}</TableCell>
                                <TableCell align="right">{row.lastModification}</TableCell>
                                <TableCell align="right">{row.fileSize}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table> }
            </Paper>
        );
    }
}

function ZeusTable() {
    return (
        <SimpleTable/>
    )

}

export default ZeusTable;