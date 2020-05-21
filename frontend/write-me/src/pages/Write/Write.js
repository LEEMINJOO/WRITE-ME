import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import "./Write.css";
import { userActions } from '../../actions';


class Write extends React.Component {

  constructor(props) {
    super(props)
  }

  submitBoard= async function(){
    const title = document.getElementsByName('title')[0].nodeValue.trim();
    const content = document.getElementsByName('content')[0].nodeValue.trim();

    if(title === ""){
      return alert('제목을 입력해주세요');
    }
    else if(content === ""){
      return alert('내용을 입력해주세요.');
    }

    const data= {title : title, content : content};

}






  render() {

    return (
      <div className='Mains'>
        <div id='Mains-left'/>
        <div className='Write'>
          <div>
            <input type='text' id='title_txt' name='title' placeholder='제목'/>
          </div>
          <div>
            <p id='keyword_txt1' >키워드1 키워드2 키워드3</p>
          </div>
          <div>
            <textarea id='content_txt' name='content' placeholder='내용을 입력하세요.'/>
          </div>
          <div id='post_submit'>
            <button> 발행 </button>
          </div>
        </div>
        <div id='Mains-right'>

        </div>
      </div>

    );
  }

}
  export default Write;