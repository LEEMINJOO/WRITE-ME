import React from 'react'
import Post from "./PostList";
import "./CategoryKeyword.css";
import "./KeywordTable.css";

class CategoryKeyword extends React.Component {

  render() {
    const isLoading = false;
    const { id } = this.props.match.params;
    return (
        <section className="container">
          {isLoading ? (
              <div className="loader__text"> Keyword Loading... </div>
          ) : (
              <div className="keyword_table">
                <span> {id} </span>
                auto-fill
                <div className ="grid">
                  <div className ="item">1</div>
                  <div className ="item">2</div>
                  <div className ="item">2</div>
                  <div className ="item">2</div>
                  <div className ="item">2</div>
                  <div className ="item">2</div>
                  <div className ="item">2</div>
                  <div className ="item">2</div>
                  <div className ="item">2</div>
                  <div className ="item">2</div>
                  <div className ="item">2</div>
                  <div className ="item">2</div>
                  <div className ="item">2</div>
                  <div className ="item">2</div>
                </div>
              </div>
          )}
        </section>
    );
  }
}
export default CategoryKeyword;