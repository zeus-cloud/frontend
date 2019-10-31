import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

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
            test: getModalStyle()
        }
    }


    handleClose = () => {
        this.props.parentCallback(false)
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
                    <input style={{paddingBottom: 1 + 'em' }} type="file" name="file"/>
                </div>
            </Modal>
        );
    }
}

export default ZeusModal;