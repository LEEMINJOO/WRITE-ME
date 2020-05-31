import React, {useState, useEffect } from "react";
import axios from "axios";
import './CategoryKeyword.css';
import Post from "./Post";
//import PageNumberlist from "./PageNumberlist";

function PostList({ keywordID }) {
    const [state, setState] = useState({
        loading: true,
        error: null,
        posts: null
    });
    const [trigger, setTrigger] = useState(0);
    const {loading, posts} = state;

    useEffect( () => {
        setState({...state, loading: true})
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
                    {loading ? (
                        <span >  </span>
                        ) : (                         
                            <div className="posts">
                                <span className="keyword_title"> {keywordID} </span>
                                {posts.map(post => (
                                    <Post
                                        key={post.id}
                                        id={post.id}
                                        title={post.title}
                                        summary={post.summary}
                                        year={post.year}
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