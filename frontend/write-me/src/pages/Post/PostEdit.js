import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from "react-router-dom";
import moment from "moment";
import "./PostEdit.css";
import axios from "axios";
import qs from 'querystring'
import {history} from "../../helpers";
import {useSelector} from "react-redux";
import {userActions} from "../../actions";

function PostEdit() {
    const { postID } = useParams();
    const location = useLocation();
    const { keywordID, categoryID, postDetail, postTitle } = location.state;
    console.log(postDetail);
    const user = useSelector(state => state.authentication);

    const [post, setPost] = useState({
        postTitle: postTitle,
        postDetail: postDetail
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setPost(post => ({ ...post, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        const date = moment().format();
        if (post.postTitle === "") {
            return alert('제목을 입력해주세요');
        } else if (post.postDetail === "") {
            return alert('내용을 입력해주세요.');
        }
        if (localStorage.getItem('user') && localStorage.getItem('user').username !== post.username) {
            alert('권한이 없습니다.');
            history.push(`/`);
            return;
        }
        if (post.postTitle && post.postDetail) {
            axios({
                method: 'put',
                url: `https://readme-writeme.appspot.com/api/post/edit/${postID}`,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded;'
                },
                data: qs.stringify({
                    postTitle: post.postTitle,
                    postDetail: post.postDetail,
                    username: user.username,
                    keywordID,
                    categoryID,
                    date
                })
            }).then(data => {
                const res = data.data;
                console.log(res);
                history.push(`/post/@${res.username}/${res.postID}`);
            })
                .catch(error => {
                    alert("글 작성 실패");
                });
        }
    }

    useEffect(() => {

    }, []);
    return (
        <div className='Mains'>
            <div id='Mains-left'/>
            <div className='Edit'>
                <form className='Edit' onSubmit={handleSubmit}>
                    <div>
                        <input type='text' id='title_txt' name='postTitle' onChange={handleChange} value={post.postTitle}/>
                    </div>
                    <div>
                        <textarea id='content_txt' name='postDetail' onChange={handleChange} value={post.postDetail}/>
                    </div>
                    <div id='post_submit'>
                        <button> 발행 </button>
                    </div>
                </form>
            </div>
            <div id='Mains-right'>
            </div>
        </div>
    )
}

export default PostEdit;