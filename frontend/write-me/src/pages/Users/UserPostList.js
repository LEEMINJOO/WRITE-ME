import React, {useState, useEffect } from "react";
import {useLocation, useParams} from "react-router-dom";
import axios from "axios";
import '../Category/CategoryKeyword.css';
import PostListItem from "../Category/PostListItem";

function UserPostList() {
    let { username } = useParams();

    const [state, setState] = useState({
        loading: true,
        error: null,
        posts: null
    });
    const {loading, posts} = state;

    useEffect( () => {
        setState({...state, loading: true});
        axios.get(`https://readme-writeme.appspot.com/api/post/user?username=${username}`)
            .then(data => {
                setState({
                    ...state,
                    loading: false,
                    posts: data.data
                });
                console.log(posts);
            })
            .catch(error => {
                setState({ ...state, loading: false, error });
            });
    }, []);

    return (
        <>
            <div className="post_list">
                {loading ? (
                    <span > Loading... </span>
                    ) : (
                        <div className="posts">
                            <span className="keyword_title"> {username} </span>
                            {posts.map(post => (
                                <PostListItem
                                    key={post.postID}
                                    username={post.username}
                                    title={post.postTitle}
                                    summary={post.postDetail}
                                    date={post.date}
                                    postID={post.postID}
                                />
                            ))}
                        </div>
                    )
                }
            </div>
        </>
    );
}

export default UserPostList;