import React from 'react'; 
import { NavLink } from 'react-router-dom'; 
import './Header1.css';

import {
    BrowserRouter as Router,
    Switch,
    Route, 
    Link
  } from "react-router-dom";

class Header1 extends React.Component { 

    render() {
        return (       
            <div className="menubar">
                <ul>
                    <li><img className="menu_icon1" src="menu_icon.PNG"/>
                        <ul>
                            <li><NavLink to="/category" >정치</NavLink></li>
                            <li><NavLink to="/category" >사회</NavLink></li>
                            <li><NavLink to="/category" >경제</NavLink></li>
                            <li><NavLink to="/category" >세계</NavLink></li>
                            <li><NavLink to="/" >IT/과학</NavLink></li>
                        </ul>
                    </li>
                    <NavLink exact to="/" ><img className="item2" src="writemelogo.PNG" /></NavLink>
                    <hr></hr>
                </ul>

            </div>
        );
    }

}
export default Header1;

