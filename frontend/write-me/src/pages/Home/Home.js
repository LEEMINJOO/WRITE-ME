import React from 'react';
import './Home.scss';
import '../../reset.css';
import KeywordToday from "./KeywordToday";
import {userActions} from "../../actions";

class Home extends React.Component {
    state = {
        cateID: -1,
        category: ["정치","사회","경제","세계","IT/과학"],
    };

    handleClick(id, e) {
        this.setState({cateID: id});
        e.preventDefault();
    }

    render() {
        const {cateID, category} = this.state;
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
                    <div className="dropdown">
                        <button className="dropBtn">
                            {cateID === -1 ?
                                <span> 카테고리 </span>
                                :  <span> {category[cateID]} </span>
                            }
                        </button>
                        <div className="dropdown-menu">
                            <li onClick={(e) => this.handleClick(0, e)}> 정치 </li>
                            <li onClick={(e) => this.handleClick(1, e)}> 사회 </li>
                            <li onClick={(e) => this.handleClick(2, e)}> 경제 </li>
                            <li onClick={(e) => this.handleClick(3, e)}> 세계 </li>
                            <li onClick={(e) => this.handleClick(4, e)}> IT/과학 </li>
                        </div>
                    </div>
                </div>
                { cateID !== -1 ?
                    <KeywordToday id={cateID}/>
                    : <></>
                }
            </div>
        );
    }
}

export default Home;
