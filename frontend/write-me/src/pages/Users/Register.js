import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Register.css';
import { userActions } from '../../actions';

function Register() {
    const [user, setUser] = useState({
        username: '',
        userID: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const dispatch = useDispatch();

    // reset login status
    useEffect(() => {
        dispatch(userActions.logout());
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (user.username && user.userID && user.password) {
            dispatch(userActions.register(user));
        }
    }

    return (
        <div className="register">
            <form name="form" onSubmit={handleSubmit}>
                <h2><p className="registerlogo">WITH WRITEME</p></h2>
                <div className="form-groupA">
                    <div className="label_name">닉네임</div>
                    <input type="text" name="username" id="rusername" value={user.username} onChange={handleChange}/>
                    {submitted && !user.username &&
                    <div className="invalid-feedback">필수 정보입니다.</div>
                    }
                </div>
                <div className="form-groupB">
                    <div className="label_name">아이디</div>
                    <input type="text" name="userID"  id="ruserID" value={user.userID} onChange={handleChange}/>
                    {submitted && !user.userID &&
                    <div className="invalid-feedback">필수 정보입니다.</div>
                    }
                </div>
                <div className="form-groupC">
                    <div className="label_name">비밀번호</div>
                    <input type="password" name="password" id="rpassword" value={user.password} onChange={handleChange}/>
                    {submitted && !user.password &&
                    <div className="invalid-feedback">필수 정보입니다.</div>
                    }
                </div>
                <div className="form-groupD">
                    <button className="btn btn-primary" id="rsubmit">
                        가입하기
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Register;