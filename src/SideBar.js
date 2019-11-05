import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import ZeusTable from "./SimpleTable";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudIcon from '@material-ui/icons/Cloud';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import Button from '@material-ui/core/Button';
import {Modal} from "@material-ui/core";
import { Redirect } from "react-router-dom";
import ZeusModal from "./ZeusModal";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    logo: {
        width: '50%',
    },
    centered: {
        textAlign: 'center',
    },
    title: {
        flexGrow: 1,
    },
}));

function ResponsiveDrawer(props) {
    const {container} = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [redirect, setRedirect] = React.useState(false);
    const [fileUpload, setFileUpload] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const logout = () => {
        return setRedirect(true);
    };

    const renderRedirect = () => {
        if (redirect) {
            return <Redirect to='/login' />
        }
    };

    const openFileUploaderModal = () => {
        return setFileUpload(true);
    };

    const callbackFunction = (childData) => {
        setFileUpload(childData);

    };

    const drawer = (
        <div>
            <div className={classes.centered}>
                <img className={classes.logo} src={"./daemon-tools.png"}/>
            </div>
            <Divider/>
            <ListItem button key='Mi nube'>
                <ListItemIcon><CloudIcon/></ListItemIcon>
                <ListItemText primary='Mi nube'/>
            </ListItem>
            <ListItem button key='Compartidos conmigo'>
                <ListItemIcon><PeopleAltIcon/></ListItemIcon>
                <ListItemText primary='Compartidos conmigo'/>
            </ListItem>
            <ListItem button key='Recientes'>
                <ListItemIcon><QueryBuilderIcon/></ListItemIcon>
                <ListItemText primary='Recientes'/>
            </ListItem>
            <Divider/>
            <ListItem button key='Destacados'>
                <ListItemIcon><StarBorderIcon/></ListItemIcon>
                <ListItemText primary='Destacados'/>
            </ListItem>
            <ListItem button key='Papelera'>
                <ListItemIcon><DeleteIcon/></ListItemIcon>
                <ListItemText primary='Papelera'/>
            </ListItem>
            <ListItem button key='Agregar archivo' onClick={openFileUploaderModal}>
                <ListItemIcon><AddIcon/></ListItemIcon>
                <ListItemText primary='Agregar archivo'/>
            </ListItem>
        </div>
    );

    return (
        <div className={classes.root}>
            <div>
                {fileUpload ?
                    <ZeusModal
                        parentCallback={callbackFunction}
                        open={true}
                    /> : null}
            </div>
            <CssBaseline/>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap className={classes.title}>
                        Zeus Cloud Storage
                    </Typography>
                    <Button color="inherit" onClick={logout}>Logout</Button>
                    {renderRedirect()}
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <ZeusTable/>
            </main>
        </div>
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default ResponsiveDrawer;
