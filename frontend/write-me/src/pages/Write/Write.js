import React from 'react';
import { useLocation } from "react-router-dom";
import "./Write.css";

function Write() {
    const location = useLocation();
    const { keywordName, keywordID } = location.state;
    async function submitBoard() {
    const title = document.getElementsByName('title')[0].nodeValue.trim();
    const content = document.getElementsByName('content')[0].nodeValue.trim();

    if (title === "") {
      return alert('제목을 입력해주세요');
    } else if (content === "") {
      return alert('내용을 입력해주세요.');
    }

    const data = {
        postTitle: title,
        postDetail: content};
    }

    return (
        <div className='Mains'>
          <div id='Mains-left'/>
          <div className='Write'>
            <div>
              <input type='text' id='title_txt' name='title' placeholder='제목'/>
            </div>
            <div>
                <p> {keywordName} </p>
                <p id='keyword_txt1' >키워드1 키워드2 키워드3 </p>
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
    )
}

export default Write;