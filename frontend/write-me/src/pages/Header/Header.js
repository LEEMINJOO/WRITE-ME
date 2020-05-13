import React from 'react';
import {Link, NavLink, useLocation } from 'react-router-dom';
import './Header.scss';
import {FaBars} from "react-icons/all";

function Header() {
    let location = useLocation();
    return(
        <div className="header">
            <span className="menubar">
                <ul>
                    <li> <FaBars viewBox='50 30 448 512' size={32}/>
                        <ul>
                            <li><NavLink to="/category/politics" >정치</NavLink></li>
                            <li><NavLink to="/category/society" >사회</NavLink></li>
                            <li><NavLink to="/category/economy" >경제</NavLink></li>
                            <li><NavLink to="/category/world" >세계</NavLink></li>
                            <li><NavLink to="/category/science" >IT/과학</NavLink></li>
                        </ul>
                    </li>
                </ul>
            </span>
            {
                location.pathname === '/' ?
                    <></>
                    : <Link to="/"> <img src="/public/logo.png" alt="WRITE ME" className="logo"/> </Link>
            }
            <span className="right-menu">
                <Link to="/user/login"> 로그인 </Link>
                <span> | </span>
                <span className="register"> <Link to="/user/register"> 회원가입 </Link> </span>
            </span>
        </div>
    );
}

export default Header;