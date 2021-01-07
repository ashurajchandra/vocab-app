import React, { Component } from "react";
import { connect } from "react-redux";
import { WordDescription, WordDetails, AddComponent } from "./index";
class WordList extends Component {
  render() {
    const { words } = this.props;
    const { showDetails, singleWord } = this.props;

    return (
      <div>
        {!showDetails && <h2>Words List</h2>}
        {showDetails ? (
          <WordDetails />
        ) : (
          <div>
            {words.map((word, index) => (
              <WordDescription
                index={index}
                word={word}
                dispatch={this.props.dispatch}
              />
            ))}
            <AddComponent dispatch={this.props.dispatch} />
          </div>
        )}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    words: state.words.words,
    singleWord: state.words.singleWord,
    showDetails: state.words.showDetails,
  };
}

export default connect(mapStateToProps)(WordList);
