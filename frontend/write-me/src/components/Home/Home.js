import React from "react";
import './Home.scss';
import '../../reset.css';

class Home extends React.Component {
    render(){
        return (
          <body>
          <div className="topNav">
                
          </div>
            <header>
                <h1> WRITE ME </h1>
                <div className="dropdown">
                    <button className="dropBtn"> 카테고리 </button>
                    <div className="dropdown-content">
                        <li> 정치 </li>
                        <li> 사회 </li>
                        <li> 경제 </li>
                        <li> 세계 </li>
                        <li> IT/과학 </li>
                    </div>
                </div>
            </header>
          </body>
        );
    }
}

export default Home;
