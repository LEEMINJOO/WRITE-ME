import React, {useState, useEffect} from 'react';
import axios from "axios";
import './Home.scss';
import '../../reset.css';
import KeywordToday from "./KeywordToday";
import { FaAngleDown } from "react-icons/all";

function Home() {
    const [categoryID, setCategoryID] = useState(0);
    const category = ["","정치","경제","사회","세계","IT/과학"];
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
                <p>
                    매일매일 새로운 글감을 추천받아 보세요. <br />
                    오전 7시/오후 7시에 업데이트 됩니다.
                </p>
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