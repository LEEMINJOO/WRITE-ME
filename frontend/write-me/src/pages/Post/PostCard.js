import React, {useState, useEffect } from "react";
import axios from "axios";
import { Pagination } from '@material-ui/lab';
import { usePagination } from "../../components/usePagination";
import PostCardItem from './PostCardItem';
import './PostCard.scss';
import {Route, Switch} from "react-router-dom";
import Post from "./Post";

function PostCard({ keywordID }) {
    const [state, setState] = useState({
        loading: true,
        error: null,
        posts: null
    });

    const { setData, currentData, maxPage, handleChange } = usePagination(5);

    useEffect( () => {
        setState({...state, loading: true});
        axios.get(`https://readme-writeme.appspot.com/api/post?keywordID=${keywordID}`)
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
    }, []);

    return (
        <>
            {(keywordID !== null && !state.loading) &&
                <div className="card_list">
                    {(currentData === null || currentData === undefined) ?
                        <span className="msg"> 글을 불러올 수 없습니다. </span>
                        : <>
                            {currentData.map(post => (
                                <PostCardItem
                                    key={post.postID}
                                    username={post.username}
                                    title={post.postTitle}
                                    summary={post.postDetail}
                                    ci={post.categoryID}
                                    date={post.date}
                                    postID={post.postID}
                                />
                            ))}
                        </>
                    }
                </div>
                }
                <Pagination className="pagination" count={maxPage} onChange={handleChange} />
        </>

    );
}

export default PostCard;