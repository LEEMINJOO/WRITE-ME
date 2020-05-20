import React from "react";
import "./Post.css";

function Post({ title, summary }) {
    return (
        <div className="posts">
            <div className="post_data">
                <h3 className="post_name">{title}</h3>
                <p className="post_summary">{summary.slice(0, 250)}...</p>
                <hr/>
            </div>
        </div>
    );
}

export default Post;