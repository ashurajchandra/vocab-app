import React, { Component } from "react";
import { WordList } from "./index";

class Home extends Component {
  render() {
    console.log("props", this.props);
    const { words } = this.props;
    return (
      <div className="home-page">
        <WordList dispatch={this.props.dispatch} words={words} />
      </div>
    );
  }
}

export default Home;
