import React from "react";
import {useLocation} from "react-router-dom";

function Post() {
    const location = useLocation();
    const { date, postDetail, postID, postTitle, username } = location.state;
    return (
        <div className="postset">
            <div className="post_data">
                <h3 className="post_title">{postTitle} </h3>
                <p className="post_summary">{postDetail} </p>
                <p className="post_date"> {date} ⦁ By {username} </p>
                <hr/>
            </div>
        </div>
    );
}

export default Post;