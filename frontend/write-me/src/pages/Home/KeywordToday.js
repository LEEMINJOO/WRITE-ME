import React, {useEffect, useState} from "react";
import { NavLink } from 'react-router-dom';
import './Keyword.scss';
import '../../reset.css';
import {getLastUpdateTime} from "../../components/getLastUpdateTime";
import axios from "axios";
import * as moment from "moment";

function KeywordToday({categoryID}) {
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null
    });
    useEffect(() => {
        setState({...state, loading: true});
        axios.get(`http://localhost:8080/api/posts/keyword?categoryID=${categoryID}`)
            .then(data => {
                setState({
                    ...state,
                    loading: false,
                    data: data.data.filter(data => (data.date.slice(0,10) === getLastUpdateTime().date && data.time === getLastUpdateTime().time))
                });
            })
            .catch(error => {
                setState({ ...state, loading: false, error });
            });
    }, [categoryID]);


    return (
        <div className="keyword">
            {state.loading ? (
                <div> loading ... </div>
            ) : (
                <div className="keywords_list">
                {state.data === undefined || state.data === null ?
                    <div> 해당되는 키워드가 없습니다. </div>
                    : <div>
                        {state.data.map(keyword => (
                            <NavLink key={keyword.keywordID}
                                to={{
                                pathname:`/write`,
                                state: {
                                    keywordID: keyword.keywordID,
                                    keywordName: keyword.keywordName
                                }
                            }}> {keyword.keywordName}
                            </NavLink>
                        ))}
                        </div>
                }   </div>
                )
            }
        </div>
    )
}

export default KeywordToday;