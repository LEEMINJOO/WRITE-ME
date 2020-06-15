import React, {useEffect, useState} from "react";
import { useParams, NavLink } from "react-router-dom";
import "./Post.css";
import axios from "axios";

function Post() {
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
                console.log(state.post);
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
                    <span id="post_date"> {post.date.slice(0,10)} </span>
                    ⦁
                    <NavLink
                        to={{
                            pathname:`/post/@${post.username}`,
                            state: { username: post.username }
                        }}
                        id="post_username"> By {post.username} </NavLink>
                </div>
                <div>
                    <p id='post_summary'>{post.postDetail} </p>
                </div>
                <hr/>
            </div>
            <div id='Mains-right'/>
        </div>
        }
        </>
    );
}

export default Post;