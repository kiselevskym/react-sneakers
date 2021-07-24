import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./sass/style.sass"
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux";


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

