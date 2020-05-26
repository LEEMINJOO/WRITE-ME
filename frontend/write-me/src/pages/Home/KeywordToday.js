import React, {useEffect, useState} from "react";
import './Keyword.scss';
import '../../reset.css';
import { FaPencilAlt } from 'react-icons/fa';
import axios from "axios";
import moment from "moment";

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
        console.log(state.data);
    }, [categoryID]);

    return (
        <div className="keyword">
            <h3>
                <FaPencilAlt /> 시작하기
            </h3>
            {state.loading ? (
                <div> loading ... </div>
            ) : (
                <div className="keywords">
                {state.data === undefined ?
                    <div> 해당되는 키워드가 없습니다. </div>
                    : <div>
                        {state.data.map(keyword => (
                            <span key={keyword.keywordID}> {keyword.keywordName} </span>
                        ))}
                        </div>
                }   </div>
                )
            }
        </div>
    )
}

export default KeywordToday;