import React from "react";
import "./PostList.css";
import {NavLink} from "react-router-dom";

function PostListItem({ title,  summary, date, username, postID }) {
    const url = `/post/@${username}/${postID}`;
    return (
        <div className="postset">
            <div className="post_data">
                <NavLink className="post_title"
                         to={{
                             pathname: `/post/@${username}/${postID}`,
                             state: { postID }
                         }}
               > {title.slice(0,30)}...
                </NavLink>
                <p className="post_summary">{summary.slice(0, 95)}...</p>
                <p className="post_date"> {date.slice(0,10)} ⦁ By {username} </p>
                <hr/>
            </div>
        </div>
    );
}

export default PostListItem;