import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import StarBorderIcon from "@material-ui/core/SvgIcon/SvgIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import {MenuList} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ShareIcon from '@material-ui/icons/Share';

export class ContextMenu extends React.Component {

    initialState = {
        mouseX: null,
        mouseY: null,
        showContextMenu: false
    };

    handleClose = () => {
        this.props.parentCallback(false)
    }

    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

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
                    <MenuItem onClick={this.handleClose}>
                        <OpenInNewIcon/>
                        Abrir
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                        <EditIcon/>
                        Modificar
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                        <DeleteForeverIcon/>
                        Borrar
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                        <ShareIcon/>
                        Compartir
                    </MenuItem>
                </Menu>
            </div>
        );
    }
}

export default ContextMenu;