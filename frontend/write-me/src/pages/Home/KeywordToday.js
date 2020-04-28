import React from "react";
import './Keyword.scss';
import '../../reset.css';
import { FaPencilAlt } from 'react-icons/fa';

class KeywordToday extends React.Component {
    state = {
        keywordToday: 'keyword',
        keyword: {
            0: ["p1", "p2", "p3", "p4"],
            1: ["s1", "s2"]
        }
    };

    render() {
        const {keywordToday, keyword} = this.state;
        const {id} = this.props;
        return (

            <div className="keyword">
                <h3>
                    <FaPencilAlt /> 오늘의 키워드는 {keywordToday} 입니다.
                </h3>
                <div className="keywords-list">
                    {keyword[id] === undefined ?
                        <div> 해당되는 키워드가 없습니다. </div>
                        : <div>
                        {keyword[id].map(keyword => (
                            <span> {keyword} </span>
                        ))}
                        </div>
                    }
                </div>
            </div>
        )
    }
}
export default KeywordToday;