import React, { Component } from "react";
import { connect } from "react-redux";
import { WordDescription } from "./index";
import { showWordDetails } from "../actions/Words";
class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      searchText: "",
    };
  }
  handleChange = (e) => {
    //updating state with current typed value
    this.setState({ searchText: e.target.value });
  };

  handleClick = (singleWord) => {
    this.props.dispatch(showWordDetails(singleWord));
  };

  render() {
    const { searchText } = this.state;
    const { words } = this.props;

    const word = words.filter((w) => w.id == searchText);

    return (
      <div>
        <nav className="nav">
          <div className="left-div">
            <h2>Vocab</h2>
          </div>
          <div className="search-container">
            <input onChange={this.handleChange} />
            <img
              onClick={this.handleSearch}
              className="search-icon"
              src="https://image.flaticon.com/icons/svg/483/483356.svg"
              alt="search-icon"
            />

            {/* showing search results while typing the words in search box */}
            {word.length > 0 && (
              <div className="search-results">
                {word.map((singleWord) => (
                  <div
                    className="search-result"
                    onClick={() => this.handleClick(singleWord)}
                  >
                    {singleWord.word}
                  </div>
                ))}
              </div>
            )}
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    words: state.words.words,
  };
}
export default connect(mapStateToProps)(Navbar);
