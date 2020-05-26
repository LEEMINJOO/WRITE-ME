import React, {useState, useEffect } from "react";
import axios from "axios";
import './CategoryKeyword.css';
import Post from "./Post";

function PostList({ keywordID }) {
    const [state, setState] = useState({
        loading: true,
        error: null,
        posts: null
    });
    const {loading, posts} = state;

    useEffect( () => {
        setState({...state, loading: true});
        axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
            .then(data => {
                setState({
                    ...state,
                    loading: false,
                    posts: data.data.data.movies
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
                    <span> {keywordID} </span>
                    {loading ? (
                        <span> POST Loading ... </span>
                        ) : (
                            <div className="posts">
                                {posts.map(post => (
                                    <Post
                                        key={post.id}
                                        id={post.id}
                                        title={post.title}
                                        summary={post.summary}
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

export default PostList;