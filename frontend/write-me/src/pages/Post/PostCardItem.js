import React from "react";
import {NavLink, Route, Switch} from "react-router-dom";
import './PostCard.scss';

function PostListItem({ title, summary, date, username, postID }) {
    return (
        <div className="card">
            <NavLink
                to={{
                    pathname: `/post/@${username}/${postID}`,
                    state: { postID }
                }}>
                <button className="card_button">
                    <p className="post_title"> {title.slice(0,13)}... </p>
                    <hr/>
                    <div className="post_summary">{summary.slice(0, 70)}</div>
                </button>
            </NavLink>
        </div>
    );
}

export default PostListItem;