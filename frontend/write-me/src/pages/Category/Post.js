import React from "react";
import "./Post.css";


function Post({ title, summary, year }) {
    return (
        <div className="posts">
            <div className="post_data">
                <h3 className="post_title">{title}</h3>
                <p className="post_summary">{summary.slice(0, 220)}...</p>
                <h5 className="post_date"> Upload : {year} </h5>
                <hr/>
            </div>
        </div>
    );
}



export default Post;