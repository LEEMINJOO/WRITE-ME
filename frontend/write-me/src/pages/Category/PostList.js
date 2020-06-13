import React, {useState, useEffect } from "react";
import axios from "axios";
import './CategoryKeyword.css';
import Post from "./Post";
import { Pagination } from '@material-ui/lab';
import { usePagination } from "../../components/usePagination";

function PostList({ keywordID, keywordName }) {
    const [state, setState] = useState({
        loading: true,
        error: null,
        posts: null
    });

    const { setData, currentData, maxPage, handleChange } = usePagination(6);

    useEffect( () => {
        setState({...state, loading: true});
        axios.get(`http://localhost:8080/api/post?keywordID=${keywordID}`)
            .then(data => {
                setState({
                    ...state,
                    loading: false,
                    posts: data.data
                });
                setData(data.data);
                console.log(currentData());
            })
            .catch(error => {
                setState({ ...state, loading: false, error });
            });
    }, [keywordID]);

    return (
        <>
            {keywordID !== null &&
                <div className="post_list">
                    {!state.loading &&
                        <div className="posts">
                            {(currentData === null || currentData === undefined) ?
                                <span className="msg"> 글을 불러올 수 없습니다. </span>
                                : <>
                                    <span className="keyword_title"> {keywordName} </span>
                                    {currentData.map(post => (
                                        <Post
                                            username={post.username}
                                            title={post.postTitle}
                                            summary={post.postDetail}
                                            ci={post.categoryID}
                                            date={post.date}
                                        />
                                    ))}
                                    <Pagination count={maxPage} onChange={handleChange} style={{margin: '0 auto 0 auto'}}/>
                                </>
                            }
                        </div>
                    }
                </div>
            }
        </>
    );
}

export default PostList;