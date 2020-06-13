import React, {useState, useEffect } from "react";
import axios from "axios";
import './CategoryKeyword.css';
import Post from "./Post";
import { Pagination } from '@material-ui/lab';
import {usePagination} from "../../components/usePagination";
import {getTime} from "../../components/getTime";

function PostList({ keywordID, keywordName }) {
    const [state, setState] = useState({
        loading: true,
        error: null,
        posts: null
    });
    const {loading, posts} = state;
    const pages = usePagination(state.posts, 6);
    const { currentData, maxPage, handleChange } = pages;

    useEffect( () => {
        setState({...state, loading: true});

        axios.get(`http://localhost:8080/api/post?keywordID=${keywordID}`)
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
                    {(loading || currentData === null) ? (
                        <span >  </span>
                        ) : (                         
                            <div className="posts">
                                <span className="keyword_title"> {keywordName} </span>
                                {currentData.map(post => (
                                    <Post
                                        key={post.id}
                                        id={post.id}
                                        userID={post.userID}
                                        title={post.postTitle}
                                        summary={post.postDetail}
                                        ci={post.categoryID}
                                        date={post.date}
                                    />
                                ))}
                                <Pagination count={maxPage}  onChange={handleChange} />
                            </div>
                        )
                    }
                </div>
            }
        </>
    );
}

export default PostList;