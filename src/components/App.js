import React, { Component } from "react";
import { Navbar, Home } from "./index";
// import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import { getWords } from "../actions/Words";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getWords());
  }
  render() {
    console.log("props", this.props);
    const { words } = this.props;
    return (
      // <Router>
      <div>
        <Navbar words={words} dispatch={this.props.dispatch} />
        <Home words={words} dispatch={this.props.dispatch} />
        {/* <AddComponent dispatch={this.props.dispatch} /> */}
      </div>
      // </Router>
    );
  }
}
function mapStateToProps(state) {
  console.log("in app", state);
  return {
    words: state.words.words,
  };
}

export default connect(mapStateToProps)(App);
