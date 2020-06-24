import React, {useState, useEffect } from "react";
import {useLocation, useParams} from "react-router-dom";
import axios from "axios";
import UserPostList_Item from "./UserPostList_Item";
import {FaBars, FaUser } from "react-icons/all";
import {Pagination} from "@material-ui/lab";
import {usePagination} from "../../components/usePagination";


function UserPostList() {
    let { username } = useParams();

    const [state, setState] = useState({
        loading: true,
        error: null,
        posts: null
    });
    const {loading, posts} = state;

    const { setData, currentData, maxPage, handleChange } = usePagination(6);

    useEffect( () => {
        setState({...state, loading: true});
        axios.get(`https://readme-writeme.appspot.com/api/post/user?username=${username}`)
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
    }, []);

    return (
        <>
            <div className="userpost_list">
                {!loading &&
                    <div className="userposts">
                        {(currentData === null || currentData === undefined) ?
                            <span className="msg"> 작성된 글이 없습니다. </span>
                            : <> <span className="username_title"> <FaUser/> {username} </span>
                                {currentData.map(post => (
                                    <UserPostList_Item
                                    key={post.postID}
                                    username={post.username}
                                    title={post.postTitle}
                                    summary={post.postDetail}
                                    date={post.date}
                                    postID={post.postID}
                                    />
                                    ))} </>
                            }
                    </div>
                }
                <Pagination count={maxPage} onChange={handleChange} style={{margin: '0 0 0 230px'}}/>
            </div>
        </>
    );
}

export default UserPostList;