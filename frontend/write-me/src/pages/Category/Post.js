import React from "react";
import "./Post.css";


function Post({ title, userID, summary, date }) {
    return (
        <div className="postset">
            <div className="post_data">
                <h3 className="post_title">{title.slice(0,30)}...</h3>        
                <p className="post_summary">{summary.slice(0, 95)}...</p>
                <p className="post_date"> {date.slice(0,10)} ⦁ By {userID}</p>
                <hr/>
            </div>
        </div>
    );
}



export default Post;