import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import "./Write.css";
import { userActions } from '../../actions';




class main extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
        <div>
          <h2> This is Main layout </h2>
        </div>
    );
  }
}

export default main;
[출처] React로 블로그 만들기 19.  글쓰기 기능|작성자 SeJun3278





class Write extends React.Component {

  /* writing_title writing_content state값 으로 정의 */
  state = {
    writing_title: '',
    writing_content: ''
  }

  /* input value 변경 ==> onChange */

  appChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }


  /* 저장하기 버튼 클릭 ==> onClick */
  appClick = () => {
    console.log(`당신의 글제목은:${this.state.writing_title}\n 내용은 : ${this.state.writing_content}`);
  }


render() {
  const { writing_title, writing_content } = this.state;
  const { appChange, appClick } = this;
  return (

    <div className="Writestart">
     <div className="form-writing_title">
        <input type="text" name="writing_title" id="writing_title" placeholder="제목" value={writing_title} onChange={appChange} />
        
      </div>
      <div className="form-writing_content">
        
        <input type="text" name="writing_content" id="writing_content" placeholder="글 내용" value={writing_content} onChange={appChange} />
        <button onClick={appClick}>저장하기</button>
      </div>
    </div>
    );
  }
}

  export default Write;