import React, {useEffect, useState} from "react";
import { useParams, NavLink } from "react-router-dom";
import "./Post.css";
import axios from "axios";
import {useSelector} from "react-redux";
import {Delete} from "./Delete";

function Post() {
    const user = useSelector(state => state.authentication);
    let { postID } = useParams();

    const [state, setState] = useState({
        loading: true,
        error: null,
        post: null
    });
    const {post} = state;

    useEffect( () => {
        setState({...state, loading: true});
        axios.get(`https://readme-writeme.appspot.com/api/post/${postID}`)
            .then(data => {
                setState({
                    ...state,
                    loading: false,
                    post: data.data
                });
            })
            .catch(error => {
                setState({ ...state, loading: false, error });
            });
    }, []);

    return (
        <>
        {!state.loading &&
        <div className='Mains'>
            <div id='Mains-left'/>
            <div className="post_da">
                <div>
                    <p id='post_title'>{post.postTitle}</p>
                </div>
                <div id="post_info">
                    <div id="post_date_username">
                        <span id="post_date"> {post.date.slice(0,10)} </span>
                        ⦁
                        <NavLink to={`/post/@${post.username}`} id="post_username"> By {post.username} </NavLink>
                    </div>
                    {(localStorage.getItem('user') && user.username === post.username) &&
                    <div id="post_button">
                        <NavLink key={post.keywordID}
                                 to={{
                                     pathname:`/post/@${post.username}/${post.postID}/edit`,
                                     state: {
                                         keywordID: post.keywordID,
                                         postDetail: post.postDetail,
                                         postTitle: post.postTitle,
                                         categoryID: post.categoryID
                                     }
                                 }}>
                            <button id="edit_button"> 수정 </button>
                        </NavLink>
                        |
                        <button id="delete_button"
                                onClick={() => {
                                    if (window.confirm('글을 삭제하시겠습니까?')) Delete(postID, user.username) } }>삭제
                        </button>
                    </div>
                    }
                </div>
                <p id='post_summary'>{post.postDetail} </p>
                <hr/>
            </div>
            <div id='Mains-right'/>
        </div>
        }
        </>
    );
}

export default Post;