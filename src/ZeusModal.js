import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from "@material-ui/core/Button";
import FileRestClient from "./FileRestClient";

function getModalStyle() {
    return {
        marginTop: `10em`,
        marginLeft: `10em`,
        position: 'absolute',
        width: 400,
        backgroundColor: 'white',
        border: '2px solid #000',
        textAlign: 'center'
    };
}

const classes = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: 'rgba(255 255 255 255)',
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export class ZeusModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            test: getModalStyle(),
            readyFile: false,
            fileName: ""
        }
    }


    handleClose = () => {
        this.props.parentCallback(false)
    };

    prepareFile = e => {
        let files = e.target.files;

        if (files.length > 0) {
            let reader = new FileReader();

            reader.readAsArrayBuffer(files[0]);

            reader.onload = (e) => {
                console.log(e.target.result);
                this.setState({
                    readyFile: e.target.result,
                    fileName: files[0].name
                })
            }
        } else {
            this.setState({
                readyFile: false,
                fileName: ""
            })
        }
    };

    uploadFile = () => {
        FileRestClient.uploadFile(this.state.readyFile, this.state.fileName)
            .then(response => alert("Archivo subido exitosamente " + response));
    };

    render() {
        return (
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.props.open}
                onClose={this.handleClose}
            >
                <div style={this.state.test} className={classes.paper}>
                    <h2 id="simple-modal-title">Subí tu archivo!!</h2>
                    <input style={{paddingBottom: 1 + 'em'}} type="file" name="file" onChange={this.prepareFile}/>

                    {this.state.readyFile ?
                        <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={this.uploadFile}
                        >
                            Subir
                        </Button> : null}
                </div>
            </Modal>
        );
    }
}

export default ZeusModal;