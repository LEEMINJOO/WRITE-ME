import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Register.css';
import { userActions } from '../../actions';

function Register() {
    const [user, setUser] = useState({
        username: '',
        password: '',
        passwordChk: ''
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
        if ((user.username && user.password) && (user.password === user.passwordChk)) {
            dispatch(userActions.register({ username: user.username, password: user.password }));
        }
    }

    return (
        <div className="register">
            <form name="form" onSubmit={handleSubmit}>
                <h2><p className="registerlogo">WITH WRITEME</p></h2>
                <div className="form-groupA">
                    <div className="label_name">아이디</div>
                    <input type="text" name="username" id="rusername" value={user.username} onChange={handleChange} className={'form-control' + (submitted && !user.username ? ' is-invalid' : '')}/>
                    {submitted && !user.username &&
                    <div className="invalid_feedback">필수 정보입니다.</div>
                    }
                </div>
                <div className="form-groupB">
                    <div className="label_name">비밀번호</div>
                    <input type="password" name="password" id="rpassword" value={user.password} onChange={handleChange} className={'form-control' + (submitted && !user.password ? ' is-invalid' : '')}/>
                    {submitted && !user.password &&
                    <div className="invalid_feedback">필수 정보입니다.</div>
                    }
                </div>
                <div className="form-groupC">
                    <div className="label_name">비밀번호 확인</div>
                    <input type="password" name="passwordChk" id="rpassword" value={user.passwordChk} onChange={handleChange} className={'form-control' + (submitted && !user.passwordChk ? ' is-invalid' : '')}/>
                    {submitted && !user.passwordChk &&
                    <div className="invalid_feedback">필수 정보입니다.</div>
                    }
                    {submitted && (user.passwordChk !== user.password) &&
                    <div className="invalid_feedback"> 입력된 비밀번호와 다릅니다. </div>
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