import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import './Keyword.scss';
import '../../reset.css';
import { FaPencilAlt } from 'react-icons/fa';
import axios from "axios";
import moment from "moment";
import {func} from "prop-types";

function KeywordToday({categoryID}) {
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null
    });
    const date = moment().format().slice(0,9);

    useEffect(() => {
        setState({...state, loading: true});
        axios.get(`http://localhost:8080/api/posts/keyword?categoryID=${categoryID}`)
            .then(data => {
                setState({
                    ...state,
                    loading: false,
                    data: data.data.filter(data => data.date.slice(0,9) === date)
                });
            })
            .catch(error => {
                setState({ ...state, loading: false, error });
            });
    }, [categoryID]);


    return (
        <div className="keyword">
            <p>
                <FaPencilAlt /> 키워드를 클릭해서 시작하세요.
            </p>
            {state.loading ? (
                <div> loading ... </div>
            ) : (
                <div className="keywords">
                {state.data === undefined || state.data === null ?
                    <div> 해당되는 키워드가 없습니다. </div>
                    : <div>
                        {state.data.map(keyword => (
                            <Link key={keyword.keywordID}
                                to={{
                                pathname:`/write`,
                                state: {
                                    keywordID: keyword.keywordID,
                                    keywordName: keyword.keywordName
                                }
                            }}> {keyword.keywordName}
                            </Link>
                        ))}
                        </div>
                }   </div>
                )
            }
        </div>
    )
}

export default KeywordToday;