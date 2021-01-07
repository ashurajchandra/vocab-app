import React, { Component } from "react";
import { showWordDetails } from "../actions/Words";

class WordDescription extends Component {
  handleClick = () => {
    const { word } = this.props;
    this.props.dispatch(showWordDetails(word));
  };

  render() {
    const { word, index } = this.props;

    return (
      <div className="words-list">
        <div onClick={this.handleClick}>
          <div className="word-title">{word.word}</div>
          <div>{word.results[0].lexicalEntries[0].lexicalCategory.text}</div>
          <div>{word.results[0].language}</div>
          <div>
            {
              word.results[0].lexicalEntries[0].entries[0].senses[0].examples[0]
                .text
            }
          </div>
        </div>
      </div>
    );
  }
}

export default WordDescription;
