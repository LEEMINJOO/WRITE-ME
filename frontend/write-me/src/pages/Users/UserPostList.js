import React, {useState, useEffect } from "react";
import {useLocation, useParams} from "react-router-dom";
import axios from "axios";
import UserPostList_Item from "./UserPostList_Item";
import {FaBars, FaUser } from "react-icons/all";


function UserPostList() {
    let { username } = useParams();

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
            <div className="userpost_list">
                {loading ? (
                    <span > Loading... </span>
                    ) : (
                        <div className="userposts">                 
                            <span className="username_title"> <FaUser/> {username} </span>
                            {posts.map(post => (
                                <UserPostList_Item
                                    key={post.postID}
                                    username={post.username}
                                    title={post.postTitle}
                                    summary={post.postDetail}
                                    date={post.date}
                                    postID={post.postID}
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