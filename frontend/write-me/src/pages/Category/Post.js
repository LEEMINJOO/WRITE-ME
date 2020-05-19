import React from "react";
import PropTypes from "prop-types";
import "./Post.css";

function Movie({ title, summary }) {
    return (
        <div className="movie">
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <p className="movie__summary">{summary.slice(0, 250)}...</p>
                <hr/>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
};

export default Movie;