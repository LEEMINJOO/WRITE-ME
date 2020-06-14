import React, {useState, useEffect} from 'react';
import axios from "axios";
import './Home.scss';
import '../../reset.css';
import KeywordToday from "./KeywordToday";
import { FaAngleDown, FaPencilAlt } from "react-icons/all";
import {getLastUpdateTime} from "../../components/getLastUpdateTime";

function Home() {
    const [categoryID, setCategoryID] = useState(0);
    const category = ["","정치","경제","사회","세계","IT/과학"];
    const now = getLastUpdateTime();
    return (
        <div className="home">
            <div className="center">
                <hr/>
                <table>
                    <tbody>
                    <tr>
                        <th>W</th>
                        <th>R</th>
                        <th>I</th>
                        <th>T</th>
                        <th>E</th>
                        <th> </th>
                        <th>M</th>
                        <th>E</th>
                        <th>.</th>
                    </tr>
                    </tbody>
                </table>
                <hr/>
                <div className="main_desc">
                    <p>
                        매일매일 새로운 글감을 추천받아 보세요.
                    </p>
                    <p className="time_desc">
                        마지막 업데이트 날짜: {now.date} 7:00 {now.time}
                    </p>
                    <p>
                        <FaPencilAlt /> 키워드를 클릭해서 시작하세요.
                    </p>
                </div>
                <div className="dropdown">
                    <button className="dropBtn">
                        {categoryID === 0 ?
                            <span> 카테고리 </span>
                            :  <span> {category[categoryID]} </span>
                        }
                        <FaAngleDown/>
                    </button>
                    <div className="dropdown-menu">
                        <li onClick={() => setCategoryID(1)}> 정치 </li>
                        <li onClick={() => setCategoryID(2)}> 경제 </li>
                        <li onClick={() => setCategoryID(3)}> 사회 </li>
                        <li onClick={() => setCategoryID(4)}> 세계 </li>
                        <li onClick={() => setCategoryID(5)}> IT/과학 </li>
                    </div>
                </div>
            </div>
            { categoryID !== 0 ?
                <KeywordToday categoryID={categoryID}/>
                : <></>
            }
        </div>
    )
}

export default Home;