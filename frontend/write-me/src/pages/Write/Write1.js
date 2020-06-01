import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import "./Write.css";
import { userActions } from '../../actions';


  function Write() {
      const [user, setUser] = useState({
          writingtitle: '',
          writingcontent:'',
      });
      const [submitted, setSubmitted] = useState(false);
      const writing = useSelector(state => state.post.writing);
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
          if (user.writingtitle && user.writingcontent) {
              dispatch(userActions.register(user));
          }
      }
  
      return (
          <div className="writestart">
              <form name="form" onSubmit={handleSubmit}>
                  <div className="form-writingtitle">
                      <div classsName="labelname">글제목</div>
                      <input type="text" name="writingtitle"  id="writingtitle" value={user.writingtitle} onChange={handleChange} className={'form-control' + (submitted && !user.writingtitle ? ' is-invalid' : '')} />
                      {submitted && !user.writingtitle &&
                      <div className="invalid-feedback">제목을 써주세요.</div>
                      }
                  </div>
                  <div className="form-writingcontent">
                      <div classsName="labelname">글내용</div>
                      <input type="text" name="writingcontent" id="writingcontent" value={user.writingcontent} onChange={handleChange} className={'form-control' + (submitted && !user.writingcontent ? ' is-invalid' : '')} />
                      {submitted && !user.writingcontent &&
                      <div className="invalid-feedback">당신의 글을 써주세요.</div>
                      }
                  </div>
                  <div className="form-postsave">
                      <button className="btn btn-primary" id="postsave">
                          {writing && <span className="spinner-border spinner-border-sm mr-1"></span>}
                          저장하기
                      </button>
                  </div>
              </form>
          </div>
      );
  }
  
  export default Write;