import React, {useState, useEffect } from "react";
import axios from "axios";
import './CategoryKeyword.css';
import Post from "./Post";

export const updateCurrPage = page => (dispatch) => {
    dispatch({ type: UPDATE_CURRENT_PAGE, patload:page });
}

export const updateStartEndpage = (start, end) => (dispatch) => {
    dispatch({ type: UPDATE_START_END_PAGE, payload: { start, end }});
}

function PostList({ keywordID }) {
    const [state, setState] = useState({
        loading: true,
        error: null,
        posts: null
    });
    const [trigger, setTrigger] = useState(0);
    const {loading, posts} = state;


    const initialState={
        start: 0,
        end: 10,
        current: 1,
    };

    //페이지별 담는 글 개수
    const per = 10;
    const total =Math.ceil(postsCount / per);

    const array=[];
    for(let i = 0; i<total; i++){
        array.push(i+1);
    }

    const target = array.slice(start, end);

    {target.map(val =>(
        <li id={keyword ?}
    ))

    export default function (state = initialState, action){
        switch (action,type) {
            case UPDATE_CURRENT_PAGE:
                return {
                    ...state,
                    current: action.payload,
                };
            case UPDATE_START_END_PAGE:
                return {
                    ...state,
                    start: action.payload.start,
                    end: action.payload.end,
                };
            default:
                return state;
        }
    }

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
                        <span>  </span>
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