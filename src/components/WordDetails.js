import React, { Component } from "react";
import { showWordList } from "../actions/Words";
import { connect } from "react-redux";
class WordDetails extends Component {
  handleClick = () => {
    this.props.dispatch(showWordList());
  };
  render() {
    const { singleWord } = this.props;

    return (
      <div className="single-word-details-page">
        <img
          src="https://t3.ftcdn.net/jpg/03/11/74/34/240_F_311743449_H2xbYofvYIrhjLC8xIm2fq7oAPXasPFz.jpg"
          alt="close-button"
          onClick={this.handleClick}
        />
        <div className="word-title">{singleWord.word}</div>
        <div>
          {singleWord.results[0].lexicalEntries[0].lexicalCategory.text}
        </div>

        <div>
          {
            singleWord.results[0].lexicalEntries[0].entries[0].senses[0]
              .examples[0].text
          }
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    singleWord: state.words.singleWord,
  };
}
export default connect(mapStateToProps)(WordDetails);
