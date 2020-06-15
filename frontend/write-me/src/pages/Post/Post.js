import React from "react";
import {useLocation} from "react-router-dom";
import "./Post.css";

function Post() {
    const location = useLocation();
    const { date, postDetail, postID, postTitle, username } = location.state;
    return (
        <div className='Mains'>
        <div id='Mains-left'/>
        <div className="post_da">
            <div >
                <p id='post_title'>{postTitle}</p>
            </div>
            <div>
                <p id='post_summary'>{postDetail} </p>
            </div>
            <div>
                <p id="post_date"> {date.slice(0,10)} ⦁ By {username}</p>
            </div>
            <hr/>
        </div>
        <div id='Mains-right'/>
      </div>
    );
}

export default Post;