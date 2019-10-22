import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ZeusAppBar from "./ButtonAppBar";
import ZeusTable from "./SimpleTable";
import ResponsiveDrawer from "./SideBar";

ReactDOM.render(
    <div>
        <ResponsiveDrawer/>
    </div>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
