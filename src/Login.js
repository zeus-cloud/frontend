import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {withRouter} from "react-router-dom";
import SnackbarContent from "@material-ui/core/SnackbarContent";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    toolbar: theme.mixins.toolbar,
    content: {
        paddingTop: '4em',
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    snackbar: {
        margin: theme.spacing(1),
    },
}));

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false,
            email: "",
            password: "",
            error: false
        }
    }

    renderRedirect = e => {
        e.preventDefault();
        this.setState({
            redirectToReferrer: true
        });
    }

    handleChange = (e) => {
        if (this.state.error) {
            this.setState({error: false})
        }
        this.setState({[e.target.name]: e.target.value});
    }

    render() {

        const redirectToReferrer = this.state.redirectToReferrer;
        if (redirectToReferrer === true) {
            if (this.state.email === "admin" && this.state.password === "admin") {
                this.props.history.push('/home')
            } else {
                this.setState({
                    error: true,
                    redirectToReferrer: false
                })
            }
        }

        return (
            <Container component="main" maxWidth="xs" className={useStyles.content}>
                <CssBaseline/>
                <div className={useStyles.toolbar} />
                <div className={useStyles.paper}>
                    <Avatar className={useStyles.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={useStyles.form} noValidate
                          onSubmit={this.renderRedirect}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            required
                            id="email"
                            label="Email Address"
                            name="email"
                            autoFocus
                            onKeyUp={this.handleChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            required
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            onChange={this.handleChange}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary"/>}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={useStyles.submit}
                        >
                            Sign In
                        </Button>
                        {this.state.error ?
                            <SnackbarContent
                                className={useStyles.snackbar}
                                message='Por favor, intent&eacute; con: admin, admin'
                            /> : null}
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={8}>
                    <Copyright/>
                </Box>
            </Container>
        );
    }
}

export default withRouter(Login);
