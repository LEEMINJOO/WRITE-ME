import React, {useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import './CategoryKeyword.css';
import Post from "./Post";

function PostList({ keywordID }) {
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPost] = useState(null);

    useEffect(async () => {
       const {
           data: {
               data: { posts }
           }
       } = await axios.get(
           "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
       );
       setPost(posts);
       setIsLoading(false);
    });

    return (
        <>
            {isLoading ? (
                <span> POST Loading ... </span>
            ) : (
                <div className="movies">
                    {posts.map(movie => (
                        <Post
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            summary={movie.summary}
                        />
                    ))}
                </div>
            )
            }
        </>
    );
}

Post.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
};

export default Post;