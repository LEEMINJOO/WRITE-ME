import React, {useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import '../Category/CategoryKeyword.css';
import Post from "../Category/PostListItem";

function UserPostList() {
    const location = useLocation();
    const { username } = location.state;
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
                                <Post
                                    keywordID={post.keywordID}
                                    title={post.postTitle}
                                    summary={post.postDetail}
                                    ci={post.categoryID}
                                    date={post.date}
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