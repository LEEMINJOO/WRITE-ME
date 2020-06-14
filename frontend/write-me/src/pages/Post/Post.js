import React from "react";
import {useLocation} from "react-router-dom";

function Post() {
    const location = useLocation();
    const { username, title, summary, date, postID } = location.state;
    return (
        <div className="postset">
            <div className="post_data">
                <h3 className="post_title">{title} </h3>
                <p className="post_summary">{summary} </p>
                <p className="post_date"> {date} ⦁ By {username} </p>
                <hr/>
            </div>
        </div>
    );
}

export default Post;