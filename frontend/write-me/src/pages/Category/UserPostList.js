import React, {useState, useEffect } from "react";
import axios from "axios";
import './CategoryKeyword.css';
import Post from "./Post";

function UserPostList({ keywordID, keywordName }) {
    const [state, setState] = useState({
        loading: true,
        error: null,
        posts: null
    });
    const {loading, posts} = state;

    useEffect( () => {
        setState({...state, loading: true});
        axios.get(`http://localhost:8080/api/post/user?username=${username}`)
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
    }, [keywordID]);

    return (
        <>
            {keywordID !== null &&
                <div className="post_list">                   
                    {loading ? (
                        <span >  </span>
                        ) : (                         
                            <div className="posts">
                                <span className="keyword_title"> {keywordName} </span>
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
            }
        </>
    );
}

export default UserPostList;