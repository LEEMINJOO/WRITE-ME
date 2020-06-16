import React, { useEffect } from 'react';
import {Router, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { history } from './helpers';
import { alertActions } from './actions';

import Home from './pages/Home/Home';
import Login from "./pages/Users/Login";
import Register from "./pages/Users/Register";
import Header from "./pages/Header/Header";
import CategoryKeyword from "./pages/Category/CategoryKeyword";
import Write from "./pages/Write/Write";
import Post from "./pages/Post/Post";
import UserPostList from "./pages/Users/UserPostList";
import PostEdit from "./pages/Post/PostEdit";

import './reset.css';
import {PrivateRoute} from "./components/PrivateRoute";

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
        <Router history={history}>
            <Header/>
            {alert.message &&
                <div className={`alert ${alert.type}`}>{alert.message}</div>
            }
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/user/login' component={Login}/>
                <Route path='/user/Register' component={Register}/>
                <Route exact path='/post/@:username' component={UserPostList}/>
                <Route exact path='/post/@:username/:postID' component={Post}/>
                <Route path='/post/@:username/:postID/edit' component={PostEdit}/>
                <Route path='/category/:name' component={CategoryKeyword}/>
                <PrivateRoute path='/write' component={Write}/>
                <Redirect from="*" to="/" />
            </Switch>
        </Router>
    );
}

export default App;
