import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";
import "./CategoryKeyword.css";
import "./KeywordTable.scss";
import PostList from "./PostList";
import { getCategoryID } from "../../components/getCategoryID";

function CategoryKeyword()  {
    const result = {
        1 : [
            "재난지원금",
            "코로나",
            "등교 연기",
            "선거",
            "백신",
            "전동킥보드",
            "재난지원금",
            "코로나",
            "선거",
            "백신",
            "전동킥보드",
            "재난지원금",
            "코로나",
            "선거",
            "백신",
            "전동킥보드",
            "재난지원금",
            "코로나",
            "등교 연기",
            "선거",
            "백신",
            "전동킥보드",
            "재난지원금",
            "선거",
            "백신",
            "전동킥보드"

        ],
        2 : [
            "알고리즘",
            "데베프",
            "react",
            "알고리즘",
            "데베프",
            "react",
            "알고리즘",
            "데베프",
            "react",
            "알고리즘",
            "데베프",
            "react",
        ]
    };
    const { name } = useParams();
    const id = getCategoryID(name);
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null
    });
    const {loading, error, keywords} = state;
    useEffect(() => {
        /*
        axios.get(`/api/keyword/${id}`)
            .then(data => {
                setState({
                    ...state,
                    loading: false,
                    data
                });
            })
            .catch(error => {
                setState({ ...state, loading: false, error });
            });
            */
         setState({...state, loading: false, keywords: result[id]});
    }, [id]);

    const [keyword, setKeyword] = useState(null);

    return (
      <section className="container">
        {loading ? (
            <div className="loader__text"> Keyword Loading... </div>
        ) : (
            <div className="keyword_table">
                <span className="category_name"> {name} </span>
                {keywords !== undefined &&
                <div className ="grid">
                  {keywords.map(keyword => (
                      <button onClick={() => setKeyword(keyword)} className="item">
                          {keyword}
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