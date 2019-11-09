import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ShareIcon from '@material-ui/icons/Share';
import FileRestClient from "./FileRestClient";
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

export class ContextMenu extends React.Component {

    initialState = {
        mouseX: null,
        mouseY: null,
        showContextMenu: false,
        file: null
    };

    downloadFile = () => {
        FileRestClient.downloadFile(this.props.file)
    };

    handleClose = () => {
        this.props.parentCallback(false)
    };

    constructor(props) {
        super(props);
        this.state = this.initialState;
    };

    render() {
        return (
            <div>
                <Menu
                    keepMounted
                    open={this.props.mouseY !== null}
                    onClose={this.handleClose}
                    anchorReference="anchorPosition"
                    anchorPosition={
                        this.props.mouseY !== null && this.props.mouseX !== null
                            ? {top: this.props.mouseY, left: this.props.mouseX}
                            : undefined
                    }
                >
                    <MenuItem onClick={this.handleClose} disabled>
                        <OpenInNewIcon/>
                        Abrir
                    </MenuItem>
                    <MenuItem onClick={this.handleClose} disabled>
                        <EditIcon/>
                        Modificar
                    </MenuItem>
                    <MenuItem onClick={this.handleClose} disabled>
                        <DeleteForeverIcon/>
                        Borrar
                    </MenuItem>
                    <MenuItem onClick={this.handleClose} disabled>
                        <ShareIcon/>
                        Compartir
                    </MenuItem>
                    <MenuItem onClick={this.downloadFile}>
                        <CloudDownloadIcon/>
                        Descargar
                    </MenuItem>
                </Menu>
            </div>
        );
    }
}

export default ContextMenu;