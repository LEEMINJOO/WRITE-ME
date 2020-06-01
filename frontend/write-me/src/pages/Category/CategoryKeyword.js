import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";
import "./CategoryKeyword.css";
import "./KeywordTable.scss";
import PostList from "./PostList";
import { getCategoryID } from "../../components/getCategoryID";

function CategoryKeyword()  {
    const { name } = useParams();
    const categoryID = getCategoryID(name);
    const [state, setState] = useState({
        loading: true,
        error: null,
        keywords: null
    });

    useEffect(() => {
        axios.get(`http://localhost:8080/api/posts/keyword?categoryID=${categoryID}`)
            .then(data => {
                setState({
                    ...state,
                    loading: false,
                    keywords: data.data
                });
            })
            .catch(error => {
                setState({ ...state, loading: false, error });
            });
        console.log(state.keywords);
    }, [categoryID]);

    const [keyword, setKeyword] = useState(null);

    return (
      <section className="container">
        {state.loading ? (
            <div className="loader__text"> Keyword Loading... </div>
        ) : (
            <div className="keyword_table">
                <p className="category_name"> {name} </p>
                {(state.keywords !== undefined || null)  &&
                <div className ="grid">
                  {state.keywords.map(keyword => (
                      <button key={keyword.keywordID} onClick={() => setKeyword(keyword.keywordID)} className="item">
                          {keyword.keywordName}
                      </button>
                  ))}
                </div>
                }
            </div>
        )}
        <PostList keywordID={keyword} />
    </section>
    )
}

export default CategoryKeyword;