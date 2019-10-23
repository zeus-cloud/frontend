import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ResponsiveDrawer from "./SideBar";
import {BrowserRouter, Link, Redirect, Route, Switch} from "react-router-dom";
import ZeusLogin from "./Login";

ReactDOM.render(
    <div>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" render={() => (
                    <Redirect to="/login"/>
                )}/>
                <Route path="/login">
                    <ZeusLogin/>
                </Route>
                <Route path="/home">
                    <ResponsiveDrawer/>
                </Route>
            </Switch>
        </BrowserRouter>
    </div>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
