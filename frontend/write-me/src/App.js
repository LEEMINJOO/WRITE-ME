import React, { useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { history } from './helpers';
import { alertActions } from './actions';

import Home from './pages/Home/Home';
import Login from "./pages/Users/Login";
import Register from "./pages/Users/Register";
import Header from "./pages/Header/Header";
import CategoryKeyword from "./pages/Category/CategoryKeyword";
import Write from "./pages/Write/Write";
//import PostApp from ".pages/Category/PostApp";


import './reset.css';

function App() {
    const alert = useSelector(state => state.alert);
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }, []);
    return (
        <Router>
            <Header/>
            {alert.message &&
            <div className={`alert ${alert.type}`}>{alert.message}</div>
            }
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/user/login' component={Login}/>
                <Route path='/user/Register' component={Register}/>
                <Route path='/category/:name' component={CategoryKeyword}/>
                <Route path='/Write' component={Write}/>
            </Switch>
        </Router>
    );
}

export default App;
