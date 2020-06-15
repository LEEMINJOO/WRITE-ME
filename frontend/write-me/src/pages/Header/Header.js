import React from 'react';
import {Link, NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../actions';
import './Header.scss';
import {FaBars, FaUser } from "react-icons/all";

function Header() {
    const username = useSelector(state => state.authentication.username);
    const location = useLocation();
    return(
        <div className="header">
            <span className="menubar">
                <ul>
                    <li> <FaBars viewBox='50 30 448 512' size={32}/>
                        <ul>
                            <li><NavLink to="/category/politics" >정치</NavLink></li>
                            <li><NavLink to="/category/economy" >경제</NavLink></li>
                            <li><NavLink to="/category/society" >사회</NavLink></li>
                            <li><NavLink to="/category/world" >세계</NavLink></li>
                            <li><NavLink to="/category/science" >IT/과학</NavLink></li>
                        </ul>
                    </li>
                </ul>
            </span>

            <span className="logo">
                {location.pathname !== "/" &&
                <Link to="/"> <img src="/public/logo.gif" alt="WRITE ME"/> </Link>
                }
            </span>
            {username === undefined ?
                (
                    <span className="login_register">
                    <Link to="/user/login"> 로그인 </Link>
                    <span> | </span>
                    <span className="register"> <Link to="/user/register"> 회원가입 </Link> </span>
                    </span>
                )
                : (
                    <span className="user_menubar">
                        <ul>
                            <li> <FaUser/> {username}
                                <ul>
                                    <li><NavLink to="/user/login" > 로그아웃 </NavLink></li>
                                    <li><NavLink to="/" > 나의 프로필 </NavLink></li>
                                </ul>
                            </li>
                        </ul>
                    </span>
                )
            }
        </div>
    );
}

export default Header;