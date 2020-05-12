import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import { FaBars } from "react-icons/all";
import './Header.scss';

function Header() {
    return(
        <div className="topMenu">
            <div className="menubar">
                <ul>
                    <li> <FaBars/>
                        <ul>
                            <li><NavLink to="/category/politics" >정치</NavLink></li>
                            <li><NavLink to="/category/society" >사회</NavLink></li>
                            <li><NavLink to="/category/economy" >경제</NavLink></li>
                            <li><NavLink to="/category/world" >세계</NavLink></li>
                            <li><NavLink to="/category/science" >IT/과학</NavLink></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <span className="logo"> <Link to="/"> WRITE ME </Link> </span>
             <Link to="/user/login"> 로그인 </Link>
            <span> | </span>
            <span> <Link to="/user/register"> 회원가입 </Link> </span>
            <span className="right"> </span>
        </div>
    );
}

export default Header;