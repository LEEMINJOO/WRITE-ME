import React from "react";
import PropTypes from "prop-types";
import "./Post.css";

function Post({ title, summary }) {
    return (
        <div className="post">
            <div className="post__data">
                <h3 className="post__name">{title}</h3>
                <p className="movie__summary">{summary.slice(0, 250)}...</p>
                <hr/>
            </div>
        </div>
    );
}

export default Post;