import React from "react";
import "./UserPostList.css";
import {NavLink} from "react-router-dom";

function UserPostList_Item({ title, summary, date, username, postID }) {
    return (
        <div className="userpostset">
            <div className="userpost_data">
                <NavLink className="userpost_title"
                         to={{
                             pathname: `/post/@${username}/${postID}`,
                             state: { postID }
                         }}
               > {title.slice(0,30)}...
                </NavLink>
                <p className="userpost_summary">{summary.slice(0, 95)}...</p>
                <p className="userpost_date"> {date.slice(0,10)} ⦁ By {username}</p>
                <hr/>
            </div>
        </div>
    );
}

export default UserPostList_Item;