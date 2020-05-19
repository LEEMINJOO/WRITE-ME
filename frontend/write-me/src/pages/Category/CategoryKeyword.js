import React from 'react'
import axios from "axios";
import { withRouter } from "react-router-dom";

import Movie from "./Movie";
import "./CategoryKeyword.css";
import "./CategoryTable.css";

class CategoryKeyword extends React.Component {
    state = {
        isLoading: true,
        movies: [],
        keyword: 0,
    };
    getMovies = async () => {
        const {
            data: {
                data: { movies }
            }
        } = await axios.get(
            "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
        );
        this.setState({ movies, isLoading: false });
        this.setState({ keyword: false });
    };
    componentDidMount() {
        this.getMovies();
    }
    handleClick(id, e) {
        this.setState({keyword: id});
        e.preventDefault();
    }
    render() {
        const { isLoading, movies,keyword } = this.state;
        const { id } = this.props.match.params;
        return (
            <section className="container">
                <h2> {id} </h2>
                {isLoading ? (
                    <div className="loader__text">Loading...</div>
                ) : (
                    <div className="category-table">
                        <table>
                            <tr>
                                <th onClick={(e) => this.handleClick(1, e)}> 영화1</th>
                                <th onClick={(e) => this.handleClick(2, e)}> 영화2</th>
                                <th onClick={(e) => this.handleClick(3, e)}> 영화없음</th>
                            </tr>
                            <tr>
                                <th>1</th>
                                <th>1</th>
                                <th>1</th>
                            </tr>
                            <tr>
                                <th>1</th>
                                <th>1</th>
                                <th>1</th>
                            </tr>
                            <tr>
                                <th>1</th>
                                <th>1</th>
                                <th>1</th>
                            </tr>
                            <tr>
                                <th>1</th>
                                <th>1</th>
                                <th>1</th>
                            </tr>
                        </table>
                    </div>
                )}
                {keyword===1 ? (
                    <div className="movies">
                        {movies.map(movie => (
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                summary={movie.summary}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="Amovie">
                    </div>
                )}
                {keyword===2 ? (
                    <div className="movies">
                        {movies.map(movie => (
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                summary={movie.summary}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="Amovie">
                    </div>
                )}
            </section>
        );
    }
}
export default CategoryKeyword;