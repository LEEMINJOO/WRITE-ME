import React, {useEffect, useState} from 'react'
import { useParams,
    NavLink,
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch,
} from "react-router-dom";
import axios from "axios";
import "./CategoryKeyword.css";
import "./KeywordTable.scss";
import PostList from "./PostList";
import { getCategoryID } from "../../components/getCategoryID";
import {history} from "../../helpers";

function CategoryKeyword()  {
    let { url, path } = useRouteMatch();
    const { name } = useParams();
    const categoryID = getCategoryID(name);
    const [state, setState] = useState({
        loading: true,
        error: null,
        keywords: null
    });

    useEffect(() => {
        axios.get(`https://readme-writeme.appspot.com/api/posts/distinctKeyword?categoryID=${categoryID}`)
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

    return (
      <section className="container">
        {!state.loading &&
            <div className="keyword_table">
                <p className="category_name"> {name} </p>
                {state.keywords === undefined || state.keywords === null ?
                    <div className="keyword_error"> 키워드를 불러올 수 없습니다. </div>
                    :
                    <div className ="grid">
                      {state.keywords.map(keyword => (
                          <NavLink key={keyword.keywordID}
                              to={{
                                  pathname:`${url}/${keyword.keywordID}`,
                                  state: {
                                      keywordID: keyword.keywordID,
                                      keywordName: keyword.keywordName,
                                  }
                              }}>
                              <button className="item">
                                  {keyword.keywordName}
                              </button>
                          </NavLink>
                      ))}
                    </div>
                }
            </div>
        }
          <Switch>
              <Route path={`${path}/:keywordID`}>
                  <PostList/>
              </Route>
          </Switch>
    </section>
    )
}

export default CategoryKeyword;