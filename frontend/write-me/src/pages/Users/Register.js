import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Register.css';
import { userActions } from '../../actions';

function Register() {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const registering = useSelector(state => state.registration.registering);
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
        if (user.firstName && user.lastName && user.username && user.password) {
            dispatch(userActions.register(user));
        }
    }

    return (
        <div className="col-lg-8 offset-lg-2">
            <form name="form" onSubmit={handleSubmit}>
                <h2><p className="registerlogo">WITH WRITEME</p></h2>
                <div className="form-groupA">
                    <div classsName="labelname">닉네임</div>
                    <input type="text" name="userName" id="rusername" value={user.lastName} onChange={handleChange} className={'form-control' + (submitted && !user.lastName ? ' is-invalid' : '')} />
                    {submitted && !user.lastName &&
                    <div className="invalid-feedback">필수 정보입니다.</div>
                    }
                </div>
                <div className="form-groupB">
                    <div classsName="labelname">아이디</div>
                    <input type="text" name="userID"  id="ruserID" value={user.username} onChange={handleChange} className={'form-control' + (submitted && !user.username ? ' is-invalid' : '')} />
                    {submitted && !user.username &&
                    <div className="invalid-feedback">필수 정보입니다.</div>
                    }
                </div>
                <div className="form-groupC">
                    <div classsName="labelname">비밀번호</div>
                    <input type="password" name="password" id="rpassword" value={user.password} onChange={handleChange} className={'form-control' + (submitted && !user.password ? ' is-invalid' : '')} />
                    {submitted && !user.password &&
                    <div className="invalid-feedback">필수 정보입니다.</div>
                    }
                </div>
                <div className="form-groupD">
                    <button className="btn btn-primary" id="rsubmit">
                        {registering && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        가입하기
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Register;