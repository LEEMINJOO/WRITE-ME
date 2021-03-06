import React, {useState, useEffect } from "react";
import axios from "axios";
import './CategoryKeyword.css';


import PostListItem from "./PostListItem";
import { Pagination } from '@material-ui/lab';
import { usePagination } from "../../components/usePagination";
import { useLocation } from "react-router-dom";

function PostList({categoryID}) {
    const location = useLocation();
    const { keywordName, keywordID } = location.state;

    const [state, setState] = useState({
        loading: true,
        error: null,
        posts: null
    });

    const { setData, currentData, maxPage, handleChange } = usePagination(6);

    useEffect( () => {
        setState({...state, loading: true});
        axios.get(`https://readme-writeme.appspot.com/api/post/keywordName?keywordName=${keywordName}&categoryID=${categoryID}`)
            .then(data => {
                setState({
                    ...state,
                    loading: false,
                    posts: data.data
                });
                setData(data.data);
            })
            .catch(error => {
                setState({ ...state, loading: false, error });
            });
    }, [keywordID]);

    return (
        <>
            {keywordID !== null &&
                <div className="post_list">
                    <div className="keyword_title"> {keywordName} </div>
                    {!state.loading &&
                        <div className="posts">
                            {(currentData === null || currentData === undefined) ?
                                <span className="msg"> 작성된 글이 없습니다. </span>
                                : <>
                                    {currentData.map(post => (
                                        <PostListItem
                                            key={post.postID}
                                            username={post.username}
                                            title={post.postTitle}
                                            summary={post.postDetail}
                                            ci={post.categoryID}
                                            date={post.date}
                                            postID={post.postID}
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